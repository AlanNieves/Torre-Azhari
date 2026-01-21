// src/types/lead.ts
export type CreateLeadPayload = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  source?: string;
};

export type LeadApiResponse =
  | { ok: true }
  | { ok?: false; message?: string; error?: string };
