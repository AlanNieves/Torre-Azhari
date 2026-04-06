// src/lib/api.ts
import type { CreateLeadPayload, LeadApiResponse } from "@/types/lead";
import { API } from "@/lib/constants";

class ApiError extends Error {
  status: number;
  details?: unknown;
  isRetryable: boolean;

  constructor(message: string, status: number, details?: unknown, isRetryable = false) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
    this.isRetryable = isRetryable;
  }
}

async function fetchJson<T>(
  url: string,
  init?: RequestInit & { timeoutMs?: number }
): Promise<T> {
  const controller = new AbortController();
  const timeoutMs = init?.timeoutMs ?? 12000;
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      ...init,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...(init?.headers || {}),
      },
    });

    const ct = res.headers.get("content-type") || "";
    const isJson = ct.includes("application/json");
    const body = isJson ? await res.json().catch(() => null) : await res.text().catch(() => "");

    if (!res.ok) {
      const msg =
        (body && typeof body === "object" && (body.message || body.error)) ||
        (typeof body === "string" && body.trim()) ||
        "Ocurrió un error inesperado.";
      
      // Marcar como retryable solo 5xx y algunos status específicos
      const isRetryable = res.status >= 500 || res.status === 429;
      throw new ApiError(String(msg), res.status, body?.details, isRetryable);
    }

    return body as T;
  } catch (err: any) {
    if (err?.name === "AbortError") {
      throw new ApiError("Tiempo de espera agotado. Intenta nuevamente.", 408, undefined, true);
    }
    if (err instanceof ApiError) throw err;
    throw new ApiError("No se pudo conectar. Revisa tu red e intenta nuevamente.", 503, undefined, true);
  } finally {
    clearTimeout(id);
  }
}

// Retry logic con exponential backoff
async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelayMs: number = 1000
): Promise<T> {
  let lastError: Error | undefined;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err: any) {
      lastError = err;
      
      // Si el error no es retryable, lanzar inmediatamente
      if (!err?.isRetryable) {
        throw err;
      }

      // Si es el último intento, lanzar el error
      if (attempt === maxRetries - 1) {
        throw err;
      }

      // Exponential backoff: 1s, 2s, 4s
      const delayMs = baseDelayMs * Math.pow(2, attempt);
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  }

  throw lastError || new ApiError("Error desconocido", 500);
}

export async function createLead(payload: CreateLeadPayload) {
  return retryWithBackoff(
    () => fetchJson<LeadApiResponse>(API.leadsEndpoint, {
      method: "POST",
      body: JSON.stringify(payload),
      timeoutMs: 12000,
    }),
    3,  // maxRetries
    1000  // baseDelayMs (1s)
  );
}

