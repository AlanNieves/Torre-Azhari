"use client";

import { motion } from "framer-motion";
import { Maximize, Home, TrendingUp, Banknote } from "lucide-react";

const features = [
  {
    icon: Maximize,
    title: "Superficies desde",
    subtitle: "99 m² hasta 255 m²",
  },
  {
    icon: Home,
    title: "Uso habitacional",
    subtitle: "",
  },
  {
    icon: TrendingUp,
    title: "Desarrollo planificado",
    subtitle: "para largo plazo",
  },
  {
    icon: Banknote,
    title: "Financiamiento directo",
    subtitle: "",
  },
];

export default function FlexibilidadSection() {
  return (
    <section className="bg-[#1e1e1e] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-serif text-3xl font-light text-white lg:text-4xl">
            Flexibilidad para construir y crecer
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/70">
            AMARA ofrece lotes habitacionales ideales para distintos proyectos de vivienda, desde casas
            familiares hasta desarrollos personalizados, en un entorno seguro, tranquilo y con alta plusvalía.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group rounded-xl border border-white/10 bg-[#252525] px-5 py-6 text-center transition-all hover:border-white/20 hover:bg-[#2a2a2a]"
            >
              <div className="mb-3 flex justify-center">
                <feature.icon className="h-6 w-6 text-white/70" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-white">{feature.title}</p>
              {feature.subtitle && (
                <p className="mt-1 text-xs text-white/60">{feature.subtitle}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
