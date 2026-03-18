// src/lib/api.ts
import type { CreateLeadPayload, LeadApiResponse } from "@/types/lead";
import { API } from "@/lib/constants";

class ApiError extends Error {
  status: number;
  details?: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
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
      throw new ApiError(String(msg), res.status, body?.details);
    }

    return body as T;
  } catch (err: any) {
    if (err?.name === "AbortError") {
      throw new ApiError("Tiempo de espera agotado. Intenta nuevamente.", 408);
    }
    if (err instanceof ApiError) throw err;
    throw new ApiError("No se pudo conectar. Revisa tu red e intenta nuevamente.", 503);
  } finally {
    clearTimeout(id);
  }
}

export async function createLead(payload: CreateLeadPayload) {
  return fetchJson<LeadApiResponse>(API.leadsEndpoint, {
    method: "POST",
    body: JSON.stringify(payload),
    timeoutMs: 12000,
  });
}

