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
  phone: "+52",
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

type LeadFormProps = {
  isCompact?: boolean;
};

export default function LeadForm({ isCompact = false }: LeadFormProps) {
  const [values, setValues] = useState<LeadFormValues>(initialValues);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const canSubmit = useMemo(() => {
    const nameOk = trim(values.name).length >= 2;
    const emailOk = isEmail(values.email);
    // Phone should have +52 plus at least 10 digits (total length >= 13)
    const phoneOk = sanitizePhone(values.phone).length >= 13;
    return nameOk && emailOk && phoneOk && state !== "loading";
  }, [values.name, values.email, values.phone, state]);

  function onChange<K extends keyof LeadFormValues>(key: K, v: string) {
    setValues((prev) => ({ ...prev, [key]: v }));
  }

  function onPhoneChange(v: string) {
    // Ensure the phone always starts with +52
    if (!v) {
      setValues((prev) => ({ ...prev, phone: "+52" }));
      return;
    }
    if (!v.startsWith("+52")) {
      const digits = v.replace(/[^\d]/g, "");
      setValues((prev) => ({ ...prev, phone: "+52" + digits }));
      return;
    }
    setValues((prev) => ({ ...prev, phone: v }));
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

  const formContent = (
    <form onSubmit={onSubmit} className="mt-8 grid gap-6">
          <Field
            label="NOMBRE"
            placeholder="Escribe aquí..."
            value={values.name}
            onChange={(v) => onChange("name", v)}
            autoComplete="name"
            required
          />

          <Field
            label="CORREO"
            placeholder="Escribe aquí..."
            value={values.email}
            onChange={(v) => onChange("email", v)}
            autoComplete="email"
            inputMode="email"
            required
          />

          <Field
            label="TELÉFONO"
            placeholder="+52"
            value={values.phone}
            onChange={onPhoneChange}
            autoComplete="tel"
            inputMode="tel"
            required
          />

          <TextArea
            label="MENSAJE"
            placeholder="Escribe aquí..."
            value={values.message}
            onChange={(v) => onChange("message", v)}
            autoComplete="off"
          />

          <div className="mt-2 flex items-center gap-3">
            <motion.button
              type="submit"
              disabled={!canSubmit}
              whileTap={{ scale: canSubmit ? 0.98 : 1 }}
              className={[
                "relative inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold tracking-wide shadow-lg transition-all",
                canSubmit
                  ? "bg-white text-[#2A2520] hover:bg-[#F5F1E8] hover:shadow-xl"
                  : "cursor-not-allowed bg-white/20 text-white/40",
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
                    Enviar
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
                  className="text-sm font-medium text-white"
                >
                  ✓ Recibido. Te contactaremos pronto.
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
                className="mt-1 rounded-xl bg-red-500/20 px-4 py-2 text-sm font-medium text-red-100"
              >
                {errorMsg}
              </motion.p>
            )}
          </AnimatePresence>

          <p className="mt-4 text-sm italic leading-relaxed text-white/60">
            Al enviar este formulario, acepta que almacenemos sus datos para gestionar su consulta.
          </p>
        </form>
  );

  if (isCompact) {
    return formContent;
  }

  return (
    <div className="relative overflow-hidden bg-[#1e1e1e] px-6 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-3xl tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
          Conversemos sobre tu próxima inversión
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/70">
          Si quieres conocer más sobre nuestros proyectos, recibir información personalizada o agendar una cita, déjanos tus datos y uno de nuestros asesores se pondrá en contacto contigo.
        </p>
        {formContent}
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
    <label className="grid gap-3">
      <span className="text-xs font-normal tracking-wide text-white/90">
        {props.label} {props.required && <span className="text-white">*</span>}
      </span>
      <motion.input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        required={props.required}
        autoComplete={props.autoComplete}
        inputMode={props.inputMode}
        whileFocus={{ scale: 1.002 }}
        className="h-14 w-full rounded-xl border-0 bg-white/5 px-5 text-base text-white outline-none transition
                   placeholder:text-white/40 focus:bg-white/10"
      />
    </label>
  );
}

function TextArea(props: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-3">
      <span className="text-xs font-normal tracking-wide text-white/90">
        {props.label}
      </span>
      <motion.textarea
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        rows={5}
        autoComplete={props.autoComplete}
        whileFocus={{ scale: 1.002 }}
        className="w-full resize-none rounded-xl border-0 bg-white/5 px-5 py-4 text-base text-white outline-none transition
                   placeholder:text-white/40 focus:bg-white/10"
      />
    </label>
  );
}

function Spinner() {
  return (
    <span className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-[#2A2520] border-t-white" />
  );
}
