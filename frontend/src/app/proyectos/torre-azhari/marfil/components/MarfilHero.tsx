"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function MarfilHero() {
  return (
    <section className="relative bg-[#1e1e1e]">
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-12 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-emerald-300">
              Disponible
            </span>
          </motion.span>

          <h1 className="mt-4 font-serif text-5xl font-light text-white lg:text-7xl">
            Departamento Marfil
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-base text-white/50">
            108.15 m² · 2 recámaras · 2 baños · Terraza privada
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="#contacto"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#1e1e1e] transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
            >
              Solicitar información
            </Link>
            <button
              onClick={() => document.getElementById("especificaciones")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-white/80 transition-all hover:border-white/40 hover:text-white"
            >
              Ver especificaciones
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative mt-12 aspect-[16/7] w-full overflow-hidden lg:mt-16"
      >
        <Image
          src="/images/img120.jpg"
          alt="Departamento Marfil — elegancia y confort en cada espacio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => document.getElementById("especificaciones")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-white"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Explorar</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
