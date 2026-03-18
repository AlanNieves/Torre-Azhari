"use client";

import { motion } from "framer-motion";

export default function IntroText() {
  return (
    <section className="bg-[#1e1e1e] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Columna izquierda - Texto grande */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl font-light leading-tight text-white lg:text-5xl">
              Desarrollos inmobiliarios
              <br />
              que elevan la forma de
              <br />
              vivir y de invertir.
            </h2>
          </motion.div>

          {/* Columna derecha - Párrafo descriptivo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-base leading-relaxed text-gray-300">
              Azhari Desarrollos es una desarrolladora inmobiliaria enfocada en crear
              proyectos bien pensados, con diseño, calidad y ubicación como ejes
              principales.
            </p>
            <p className="text-base leading-relaxed text-gray-300">
              Cada desarrollo responde a una estrategia clara: generar plusvalía real,
              ofrecer espacios de alto nivel y brindar certeza a quienes buscan
              invertir o vivir bien.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

