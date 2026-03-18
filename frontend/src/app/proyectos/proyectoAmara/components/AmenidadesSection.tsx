"use client";

import { motion } from "framer-motion";
import { Flame, PawPrint, TreePine, ShoppingBag } from "lucide-react";
import Image from "next/image";

const amenidades = [
  {
    icon: Flame,
    title: "Asadores y salones",
    subtitle: "para eventos",
  },
  {
    icon: PawPrint,
    title: "Espacios para",
    subtitle: "pasear mascotas",
  },
  {
    icon: TreePine,
    title: "Áreas de recreación",
    subtitle: "y descanso",
  },
  {
    icon: ShoppingBag,
    title: "Área comercial",
    subtitle: "semiprivada",
  },
];

export default function AmenidadesSection() {
  return (
    <section className="bg-[#252525] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Title + Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="font-serif text-3xl font-light text-white lg:text-4xl">
            Espacios que suman
            <br />
            valor a tu día a día
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            El proyecto integra más de 1,000 m² de parques lineales, diseñados para la convivencia, el descanso
            y la vida al aire libre, además de áreas comunes que fortalecen el sentido de comunidad.
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 text-xs font-semibold uppercase tracking-widest text-white/50"
        >
          Amenidades destacadas
        </motion.p>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {amenidades.map((amenidad, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
                <amenidad.icon className="h-7 w-7 text-white/70" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-white">{amenidad.title}</p>
              <p className="text-sm text-white/60">{amenidad.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

