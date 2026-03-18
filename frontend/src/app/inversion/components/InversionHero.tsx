"use client";

import { motion } from "framer-motion";

export default function InversionHero() {
  return (
    <section className="relative bg-[#1e1e1e] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl font-light text-white lg:text-6xl">
              Invertir con visión es elegir bien desde el inicio
            </h1>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="text-base font-light leading-relaxed text-white/80">
              En Azhari Desarrollos entendemos que invertir no es solo comprar un 
              inmueble: es tomar una decisión estratégica. Por eso desarrollamos 
              proyectos con fundamentos sólidos, pensados para generar plusvalía, 
              respaldos financieros y valor a largo plazo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

