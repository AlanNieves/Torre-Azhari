// src/components/sections/Amenities.tsx
"use client";

import { motion } from "framer-motion";

interface Amenity {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const AMENITIES: Amenity[] = [
  {
    id: "pool",
    icon: "🏊",
    title: "Alberca",
    description: "Alberca techada con área de asoleaderos y vistas panorámicas",
  },
  {
    id: "gym",
    icon: "💪",
    title: "Gimnasio",
    description: "Equipamiento de última generación disponible 24/7",
  },
  {
    id: "rooftop",
    icon: "🌆",
    title: "Roof Garden",
    description: "Terraza con área lounge, parrillas y vista de 360°",
  },
  {
    id: "cowork",
    icon: "💼",
    title: "Co-working",
    description: "Espacios compartidos ideales para trabajo remoto",
  },
  {
    id: "kids",
    icon: "🎮",
    title: "Área Infantil",
    description: "Zona de juegos segura y equipada para los más pequeños",
  },
  {
    id: "security",
    icon: "🔒",
    title: "Seguridad 24/7",
    description: "Control de acceso, cámaras y vigilancia permanente",
  },
  {
    id: "parking",
    icon: "🅿️",
    title: "Estacionamiento",
    description: "Cajones techados con acceso controlado",
  },
  {
    id: "lobby",
    icon: "🏢",
    title: "Lobby Premium",
    description: "Recepción de lujo con atención personalizada",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function AmenityCard({ amenity }: { amenity: Amenity }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/40 to-zinc-950/60 p-6 shadow-lg transition-all duration-500 hover:border-zinc-700 hover:shadow-2xl hover:shadow-zinc-900/40"
    >
      {/* Icon */}
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950/80 text-3xl transition-all duration-300 group-hover:scale-110 group-hover:border-zinc-700">
        {amenity.icon}
      </div>

      {/* Content */}
      <h3 className="font-serif text-xl tracking-tight transition-colors duration-300 group-hover:text-zinc-100">
        {amenity.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
        {amenity.description}
      </p>

      {/* Hover effect */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100/5 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}

export default function Amenities() {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24">
      {/* Header */}
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-[0.18em] text-zinc-300"
        >
          AMENIDADES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl"
        >
          Diseñado para tu bienestar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-300"
        >
          Espacios comunes pensados para elevar tu calidad de vida, 
          combinando funcionalidad, confort y exclusividad.
        </motion.p>
      </div>

      {/* Grid de amenidades */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {AMENITIES.map((amenity) => (
          <AmenityCard key={amenity.id} amenity={amenity} />
        ))}
      </motion.div>

      {/* CTA adicional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-zinc-400">
          ¿Quieres conocer más sobre nuestras instalaciones?
        </p>
        <a
          href="/proyecto"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-100 transition-all duration-300 hover:scale-105 hover:border-zinc-600 hover:bg-zinc-900/80 active:scale-95"
        >
          <span>Ver proyecto completo</span>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
