"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const eficienciaItems = [
  {
    id: "energia",
    title: "Energía inteligente en áreas comunes",
    content: "Sistemas de iluminación LED automatizados y sensores de movimiento que optimizan el consumo energético en todas las áreas comunes del edificio."
  },
  {
    id: "eficiencia",
    title: "Eficiencia hídrica de alto nivel",
    content: "Sistemas de recolección de agua pluvial, grifería de bajo consumo y tecnología de tratamiento de aguas grises para un uso responsable del recurso hídrico."
  },
  {
    id: "elevadores",
    title: "Elevadores con autodiagnóstico médico",
    content: "Tecnología de vanguardia en elevadores con sistemas inteligentes de mantenimiento predictivo y funciones de seguridad avanzadas."
  },
  {
    id: "confort",
    title: "Preparado para un confort total",
    content: "Instalaciones preconfiguradas para sistemas de climatización inteligente, domótica y tecnología smart home de última generación."
  }
];

export default function EficienciaSection() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section className="bg-[#1e1e1e] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-light text-white lg:text-5xl mb-6">
              Eficiencia y
            </h2>
            <h3 className="font-serif text-4xl font-light text-white lg:text-5xl">
              ahorro inteligente
            </h3>
          </motion.div>

          {/* Right - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {eficienciaItems.map((item, index) => (
              <div key={item.id} className="border-b border-white/20">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between py-4 text-left transition-colors duration-200 hover:text-white/80"
                >
                  <span className="text-lg font-medium text-white">
                    {item.title}
                  </span>
                  <motion.div
                    animate={{ rotate: activeItem === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 flex-shrink-0"
                  >
                    <svg
                      className="h-5 w-5 text-white/60"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeItem === item.id ? "auto" : 0,
                    opacity: activeItem === item.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pb-4 pr-8">
                    <p className="text-sm leading-relaxed text-white/70">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

