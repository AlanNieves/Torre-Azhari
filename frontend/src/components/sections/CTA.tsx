// src/components/sections/CTA.tsx
"use client";

import { motion } from "framer-motion";
import LeadForm from "@/components/forms/LeadForm";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#6B7456] py-20 sm:py-24 lg:py-32" id="contacto">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-[0.3em] text-white/80"
          >
            COMIENZA TU HISTORIA
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-serif text-5xl font-light leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Un espacio que
            <br />
            te está esperando
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-white/90"
          >
            Déjanos tus datos y uno de nuestros asesores se pondrá en contacto
            <br className="hidden sm:inline" />
            para ayudarte a encontrar tu departamento ideal.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <LeadForm />
        </motion.div>
      </div>

      {/* Decorative Bottom Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-center bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />
    </section>
  );
}
