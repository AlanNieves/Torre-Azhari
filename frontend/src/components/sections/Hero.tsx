// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-10 sm:pt-14 lg:pt-16">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.18em] text-zinc-300"
          >
            DESARROLLO INMOBILIARIO · EXPERIENCIA EDITORIAL
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Arquitectura contemporánea,
            <span className="text-zinc-300"> presencia absoluta.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg"
          >
            Torre Azhari es un activo de marca: ritmo visual, calma editorial y conversión sin fricción.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/contacto"
              className="rounded-full bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-950 transition hover:opacity-90"
            >
              Solicitar información
            </Link>
            <Link
              href="/proyecto"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900"
            >
              Ver el proyecto
            </Link>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20"
          >
            <div className="aspect-[4/5] w-full bg-zinc-950/40" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">
                VISUAL / RENDER PRINCIPAL
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Slot preparado para imagen optimizada (Next/Image) o video.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
