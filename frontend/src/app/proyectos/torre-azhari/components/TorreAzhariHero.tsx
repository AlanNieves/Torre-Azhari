"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TorreAzhariHero() {
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
              Torre Azhari
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
                Torre Azhari nace para elevar el estándar de vivienda vertical en la
                ciudad. Un proyecto residencial de alto nivel que combina ubicación
                premium, diseño arquitectónico, materiales de primera y una
                experiencia de vida sin concesiones.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 lg:mt-16 mx-auto max-w-6xl px-6 lg:px-12"
      >
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl">
          <Image
            src="/images/img123.jpg"
            alt="Torre Azhari Exterior"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}