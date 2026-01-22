// src/components/sections/Hero.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section ref={ref} className="relative pt-10 sm:pt-14 lg:pt-16">
      {/* Overlay gradient para mejor contraste */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/40" />
      
      <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div 
          className="lg:col-span-7"
          style={{ opacity }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold tracking-[0.18em] text-zinc-300"
          >
            DESARROLLO INMOBILIARIO · ARQUITECTURA CONTEMPORÁNEA
          </motion.p>

          {/* H1 SEO */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-serif text-4xl font-light leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Departamentos en Aguascalientes
            <span className="text-zinc-300"> diseñados para vivir mejor.</span>
          </motion.h1>

          {/* Subtítulo editorial */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg"
          >
            Torre Azhari es un desarrollo inmobiliario contemporáneo que combina
            arquitectura, ubicación y una experiencia pensada para habitar con calma.
          </motion.h2>

          {/* Texto contextual SEO */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400"
          >
            Ubicado en Aguascalientes, Torre Azhari ofrece departamentos
            diseñados para quienes buscan construir un hogar, invertir con visión
            o vivir en un entorno arquitectónico de alto nivel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/contacto"
              className="group relative overflow-hidden rounded-full bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-zinc-100/20 active:scale-[0.98]"
            >
              <span className="relative z-10">Solicitar información</span>
              <div className="absolute inset-0 -z-0 bg-zinc-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            <Link
              href="/proyecto"
              className="group rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-100 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900/80 hover:shadow-md active:scale-[0.98]"
            >
              Ver el proyecto
            </Link>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20 shadow-2xl shadow-black/40"
          >
            <div className="aspect-[4/5] w-full bg-gradient-to-br from-zinc-900/60 via-zinc-950/40 to-zinc-900/80" />
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent p-6"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">
                VISUAL / RENDER PRINCIPAL
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Espacio preparado para imagen o video optimizado con Next/Image.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

