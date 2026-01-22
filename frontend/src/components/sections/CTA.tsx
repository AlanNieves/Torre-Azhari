// src/components/sections/CTA.tsx
"use client";

import { motion } from "framer-motion";
import LeadForm from "@/components/forms/LeadForm";

export default function CTA() {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24" id="contacto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <LeadForm />
      </motion.div>
    </section>
  );
}
