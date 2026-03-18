"use client";

import { motion } from "framer-motion";
import LeadForm from "@/shared/LeadForm";

export default function ContactHero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/gallery/img147.jpg')",
          }}
        >
          {/* Overlay oscuro para mejorar la legibilidad */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl"
        >
          {/* Form with transparent background */}
          <div className="rounded-lg bg-black/60 p-8 backdrop-blur-sm lg:p-12">
            <h1 className="mb-4 text-center font-serif text-3xl font-light text-white lg:text-4xl">
              Conversemos sobre tu próxima inversión
            </h1>
            
            <p className="mb-8 text-center text-sm text-white/80 lg:text-base">
              Si quieres conocer más sobre nuestros proyectos, recibir información personalizada o agendar una cita,
              déjanos tus datos y uno de nuestros asesores se pondrá en contacto contigo.
            </p>

            {/* Form Component */}
            <LeadForm isCompact />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

