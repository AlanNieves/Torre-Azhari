"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AcabadosSection() {
  return (
    <section className="bg-[#1e1e1e] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top Text with Navigation */}
        <div className="mb-16 flex items-start justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-3xl leading-relaxed text-white lg:text-4xl xl:text-5xl">
              Espacios pensados para vivir con amplitud, diseño y confort.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <button className="rounded-full border border-white/20 p-4 text-white/60 hover:border-white/40 hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="rounded-full border border-white/20 p-4 text-white/60 hover:border-white/40 hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/img40.jpg"
                alt="Acabados de lujo"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 font-serif text-5xl font-light text-white lg:text-6xl">
              Acabados de alto nivel
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/70 lg:text-xl">
              Materiales que se sienten y se notan
            </p>
            
            <p className="text-base leading-relaxed text-white/60 lg:text-lg">
              Cada departamento integra acabados seleccionados por su durabilidad, estética y calidad. 
              Mármol en pisos y muros, carpintería fina y detalles que eleven el estándar de lo que significa 
              vivir en un desarrollo de lujo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}