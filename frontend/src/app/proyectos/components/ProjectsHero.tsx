"use client";

import { motion } from "framer-motion";

export default function ProjectsHero() {
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
              Proyectos
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
              En Azhari Desarrollos creamos proyectos inmobiliarios con una visión
              clara: ubicaciones estratégicas, diseño de alto nivel y valor real a largo
              plazo.
            </p>
            <p className="text-base font-light leading-relaxed text-white/80">
              Cada desarrollo responde a un estilo de vida distinto, pero todos
              comparten el mismo estándar de calidad, planeación y plusvalía.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
