// src/components/sections/Amenities.tsx
"use client";

import { motion } from "framer-motion";
import { Waves, Dumbbell, Sunset, Briefcase, Gamepad2, ShieldCheck, ParkingSquare, Building2 } from "lucide-react";

interface Amenity {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const AMENITIES: Amenity[] = [
  {
    id: "pool",
    icon: Waves,
    title: "Alberca",
    description: "Alberca techada con área de asoleaderos y vistas panorámicas",
  },
  {
    id: "gym",
    icon: Dumbbell,
    title: "Gimnasio",
    description: "Equipamiento de última generación disponible 24/7",
  },
  {
    id: "rooftop",
    icon: Sunset,
    title: "Roof Garden",
    description: "Terraza con área lounge, parrillas y vista de 360°",
  },
  {
    id: "cowork",
    icon: Briefcase,
    title: "Co-working",
    description: "Espacios compartidos ideales para trabajo remoto",
  },
  {
    id: "kids",
    icon: Gamepad2,
    title: "Área Infantil",
    description: "Zona de juegos segura y equipada para los más pequeños",
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Seguridad 24/7",
    description: "Control de acceso, cámaras y vigilancia permanente",
  },
  {
    id: "parking",
    icon: ParkingSquare,
    title: "Estacionamiento",
    description: "Cajones techados con acceso controlado",
  },
  {
    id: "lobby",
    icon: Building2,
    title: "Lobby",
    description: "Recepción de lujo con atención personalizada",
  },
];

function AmenityCard({ amenity, index }: { amenity: Amenity; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl sm:p-10"
    >
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-[#6B7456]/10 to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-50" />
      
      {/* Icon */}
      <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F5F1E8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#6B7456]/10">
        <amenity.icon className="h-9 w-9 text-[#6B7456] transition-colors duration-300 group-hover:text-[#B85C38]" />
      </div>

      {/* Title */}
      <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-[#2A2520] sm:text-3xl">
        {amenity.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-[#5C564F] sm:text-base">
        {amenity.description}
      </p>

      {/* Hover line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#6B7456] to-[#B85C38]"
      />
    </motion.div>
  );
}

export default function Amenities() {
  return (
    <section className="bg-[#E8E2D5] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-[0.3em] text-[#5C564F]"
          >
            AMENIDADES
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-serif text-5xl font-light leading-[1.1] tracking-tight text-[#2A2520] sm:text-6xl lg:text-7xl"
          >
            Espacios que
            <br />
            <span className="text-[#6B7456]">enriquecen tu día</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5C564F]"
          >
            Cada amenidad ha sido diseñada pensando en tu bienestar,
            combinando funcionalidad con la experiencia sensorial que mereces.
          </motion.p>
        </div>

        {/* Grid de amenidades */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.map((amenity, index) => (
            <AmenityCard key={amenity.id} amenity={amenity} index={index} />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#B85C38]/5 to-transparent blur-3xl" />
    </section>
  );
}
