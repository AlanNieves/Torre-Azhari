"use client";

import { motion } from "framer-motion";

export default function ProjectsHero() {
  return (
    <section className="relative bg-[#1e1e1e] py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="mb-6 font-serif text-5xl font-light text-white lg:text-6xl">
            Nuestros Proyectos
          </h1>
          <p className="mx-auto max-w-3xl text-base font-light leading-relaxed text-white/80 lg:text-lg">
            Cada desarrollo de Azhari es resultado de una visión integral que
            combina ubicación estratégica, arquitectura consciente y plusvalía
            garantizada. Conoce nuestro portafolio de proyectos diseñados para
            trascender en el tiempo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
