"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AmaraHero() {
  return (
    <section className="relative bg-[#1e1e1e] pt-24 lg:pt-32">
      {/* Top content: Title left + Description right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl font-light text-white lg:text-7xl">
              AMARA
            </h1>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-base font-light leading-relaxed text-white/80 lg:text-lg">
              AMARA es un desarrollo habitacional diseñado para quienes buscan
              invertir con visión o construir su hogar en una de las zonas con mayor
              proyección al poniente de Aguascalientes. Un proyecto que combina
              ubicación estratégica, entorno natural y amenidades funcionales que
              elevan la calidad de vida.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 lg:mt-16"
      >
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image
            src="/images/gallery/img71.jpg"
            alt="AMARA - Desarrollo habitacional Aguascalientes"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e]/60 via-transparent to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

