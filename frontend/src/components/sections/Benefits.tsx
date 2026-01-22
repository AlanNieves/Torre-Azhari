// src/components/sections/Benefits.tsx
"use client";

import { motion } from "framer-motion";

const items = [
  { title: "Calma editorial", desc: "Jerarquía clara, aire y ritmo visual." },
  { title: "Arquitectura premium", desc: "Lenguaje sobrio, contemporáneo y sólido." },
  { title: "Conversión sin fricción", desc: "CTA limpio y directo a leads." },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Benefits() {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/30 to-zinc-950/40 p-6 shadow-2xl shadow-black/20 sm:p-8"
      >
        <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">ENFOQUE</p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl">
          Experiencia por encima del ruido
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-8 grid gap-4 lg:grid-cols-3"
        >
          {items.map((it) => (
            <motion.div
              key={it.title}
              variants={item}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl border border-zinc-800 bg-zinc-950/50 p-6 transition-all duration-500 hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-900/40"
            >
              <p className="font-serif text-xl tracking-tight transition-colors duration-300 group-hover:text-zinc-100">
                {it.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{it.desc}</p>
              
              {/* Indicador visual */}
              <div className="mt-4 h-1 w-12 rounded-full bg-zinc-700 transition-all duration-500 group-hover:w-16 group-hover:bg-zinc-500" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
