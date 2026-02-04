"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BrandCTA() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/img49.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 font-serif text-4xl font-light text-white lg:text-5xl"
          >
            Más que inmuebles, desarrollamos patrimonio.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 text-base font-light leading-relaxed text-white lg:text-lg"
          >
            En Azhari Desarrollos analizamos cada proyecto desde la plusvalía, la demanda futura y el crecimiento urbano para ofrecer oportunidades reales de inversión.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/contacto"
              className="inline-block rounded-full bg-white px-10 py-4 text-sm font-light tracking-wider text-black transition-all hover:bg-gray-100"
            >
              Agenda una cita
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
