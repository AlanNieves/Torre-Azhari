// src/components/forms/LeadForm.tsx
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createLead } from "@/lib/api";
import type { CreateLeadPayload } from "@/types/lead";

type FormState = "idle" | "loading" | "success" | "error";

type LeadFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialValues: LeadFormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function trim(v: string) {
  return (v ?? "").trim();
}

function isEmail(v: string) {
  const s = trim(v);
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function sanitizePhone(v: string) {
  const s = trim(v);
  if (!s) return "";
  return s.replace(/[^\d+]/g, "").slice(0, 20);
}

export default function LeadForm() {
  const [values, setValues] = useState<LeadFormValues>(initialValues);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const canSubmit = useMemo(() => {
    const nameOk = trim(values.name).length >= 2;
    const emailOk = isEmail(values.email);
    return nameOk && emailOk && state !== "loading";
  }, [values.name, values.email, state]);

  function onChange<K extends keyof LeadFormValues>(key: K, v: string) {
    setValues((prev) => ({ ...prev, [key]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setState("loading");
    setErrorMsg("");

    const payload: CreateLeadPayload = {
      name: trim(values.name),
      email: trim(values.email),
      phone: sanitizePhone(values.phone) || undefined,
      message: trim(values.message) || undefined,
      source: "torre-azhari-web",
    };

    try {
      await createLead(payload);
      setState("success");
      setValues(initialValues);
      window.setTimeout(() => setState("idle"), 3500);
    } catch (err: any) {
      setState("error");
      setErrorMsg(err?.message || "No pudimos enviar tu solicitud. Intenta nuevamente.");
    }
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 sm:p-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">CONTACTO</p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
          Agenda información del proyecto
        </h2>
        <p className="mt-3 text-base leading-relaxed text-zinc-300">
          Comparte tus datos. Te contactaremos con atención y claridad.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <Field
            label="Nombre"
            placeholder="Tu nombre"
            value={values.name}
            onChange={(v) => onChange("name", v)}
            autoComplete="name"
            required
          />

          <Field
            label="Correo"
            placeholder="tucorreo@dominio.com"
            value={values.email}
            onChange={(v) => onChange("email", v)}
            autoComplete="email"
            inputMode="email"
            required
          />

          <Field
            label="Teléfono (opcional)"
            placeholder="+52 ..."
            value={values.phone}
            onChange={(v) => onChange("phone", v)}
            autoComplete="tel"
            inputMode="tel"
          />

          <TextArea
            label="Mensaje (opcional)"
            placeholder="Ej. Me interesa conocer disponibilidad, precios y amenidades."
            value={values.message}
            onChange={(v) => onChange("message", v)}
          />

          <div className="mt-2 flex items-center gap-3">
            <motion.button
              type="submit"
              disabled={!canSubmit}
              whileTap={{ scale: canSubmit ? 0.98 : 1 }}
              className={[
                "relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition",
                canSubmit
                  ? "bg-zinc-100 text-zinc-950 hover:opacity-90"
                  : "cursor-not-allowed bg-zinc-800 text-zinc-400",
              ].join(" ")}
            >
              <AnimatePresence mode="wait" initial={false}>
                {state === "loading" ? (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="inline-flex items-center gap-2"
                  >
                    <Spinner />
                    Enviando…
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                  >
                    Enviar solicitud
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <AnimatePresence>
              {state === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="text-sm text-zinc-300"
                >
                  Recibido. Te contactaremos pronto.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {state === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="mt-1 text-sm text-red-300"
              >
                {errorMsg}
              </motion.p>
            )}
          </AnimatePresence>

          <p className="mt-2 text-xs leading-relaxed text-zinc-500">
            Al enviar aceptas ser contactado por el equipo de Torre Azhari. No compartimos tu información con terceros.
          </p>
        </form>
      </div>
    </div>
  );
}

function Field(props: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-medium tracking-wide text-zinc-300">
        {props.label}
      </span>
      <motion.input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        required={props.required}
        autoComplete={props.autoComplete}
        inputMode={props.inputMode}
        whileFocus={{ scale: 1.005 }}
        className="h-12 w-full rounded-2xl border border-zinc-800 bg-zinc-950/40 px-4 text-sm text-zinc-100 outline-none transition
                   placeholder:text-zinc-600 focus:border-zinc-600 focus:ring-4 focus:ring-zinc-800/50"
      />
    </label>
  );
}

function TextArea(props: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-medium tracking-wide text-zinc-300">
        {props.label}
      </span>
      <motion.textarea
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        rows={4}
        whileFocus={{ scale: 1.003 }}
        className="w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 outline-none transition
                   placeholder:text-zinc-600 focus:border-zinc-600 focus:ring-4 focus:ring-zinc-800/50"
      />
    </label>
  );
}

function Spinner() {
  return (
    <span className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-zinc-600 border-t-zinc-950" />
  );
}
