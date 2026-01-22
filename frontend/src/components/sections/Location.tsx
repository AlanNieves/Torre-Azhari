// src/components/sections/Location.tsx
"use client";

import { motion } from "framer-motion";

const features = [
  { icon: "🚗", text: "Conectividad y accesos" },
  { icon: "🏢", text: "Zona premium y servicios" },
  { icon: "🎨", text: "Entorno social y cultural" },
  { icon: "🔒", text: "Seguridad y calma" },
];

export default function LocationSection() {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/30 to-zinc-950/40 p-6 shadow-2xl shadow-black/20 sm:p-8"
      >
        <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">UBICACIÓN</p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl">
          Contexto, acceso y estilo de vida
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/40 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-900/40">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/40 via-zinc-900/60 to-zinc-950/80" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,250,250,0.02),transparent_70%)]" />
              
              {/* Map placeholder indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80">
                    <svg className="h-6 w-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-zinc-300">MAPA INTERACTIVO</p>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-zinc-400">
              Slot para mapa o visual contextual (optimizado).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/50 p-6 lg:col-span-5"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">PUNTOS CLAVE</p>
            <ul className="mt-4 space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={feature.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-sm text-zinc-300"
                >
                  <span className="text-lg">{feature.icon}</span>
                  <span>{feature.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
