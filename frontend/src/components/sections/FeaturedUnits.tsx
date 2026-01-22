// src/components/sections/FeaturedUnits.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Unit {
  id: string;
  name: string;
  type: string;
  area: string;
  price: number;
  oldPrice?: number;
  isOffer?: boolean;
  available: number;
}

const UNITS: Unit[] = [
  {
    id: "u1",
    name: "Departamento 301",
    type: "2 habitaciones · 2 baños",
    area: "95 m²",
    price: 3850000,
    oldPrice: 4200000,
    isOffer: true,
    available: 2,
  },
  {
    id: "u2",
    name: "Departamento 502",
    type: "3 habitaciones · 2.5 baños",
    area: "135 m²",
    price: 5500000,
    available: 3,
  },
  {
    id: "u3",
    name: "Penthouse 801",
    type: "4 habitaciones · 3 baños",
    area: "180 m²",
    price: 8900000,
    available: 1,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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

function UnitCard({ unit }: { unit: Unit }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < unit.available) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <motion.div
      variants={item}
      className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/60 to-zinc-950/80 p-6 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:border-zinc-700 hover:shadow-2xl hover:shadow-zinc-900/40"
    >
      {/* Badge OFERTA */}
      {unit.isOffer && (
        <motion.div
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: 1, rotate: -12 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="absolute right-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-lg"
        >
          Oferta
        </motion.div>
      )}

      {/* Imagen placeholder */}
      <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,250,250,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950/80 to-transparent p-4">
          <p className="text-xs font-semibold tracking-[0.16em] text-zinc-300">
            VISTA RENDER
          </p>
        </div>
      </div>

      {/* Info */}
      <div>
        <h3 className="font-serif text-xl tracking-tight">{unit.name}</h3>
        <p className="mt-1 text-sm text-zinc-400">{unit.type}</p>
        <p className="mt-1 text-sm font-medium text-zinc-300">{unit.area}</p>

        {/* Precio */}
        <div className="mt-4 flex items-baseline gap-2">
          {unit.oldPrice && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-zinc-500 line-through"
            >
              ${unit.oldPrice.toLocaleString()}
            </motion.span>
          )}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: unit.oldPrice ? 0.4 : 0.2 }}
            className="font-serif text-2xl tracking-tight"
          >
            ${unit.price.toLocaleString()}
          </motion.span>
          <span className="text-sm text-zinc-400">MXN</span>
        </div>

        {/* Disponibilidad */}
        <p className="mt-2 text-xs text-zinc-400">
          {unit.available} {unit.available === 1 ? "unidad disponible" : "unidades disponibles"}
        </p>

        {/* Control de cantidad */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handleDecrement}
              disabled={quantity <= 1}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
              aria-label="Disminuir cantidad"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            
            <span className="w-8 text-center font-medium">{quantity}</span>
            
            <button
              onClick={handleIncrement}
              disabled={quantity >= unit.available}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
              aria-label="Aumentar cantidad"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          <button className="rounded-full bg-zinc-100 px-5 py-2 text-sm font-medium text-zinc-950 transition-all duration-300 hover:scale-105 hover:bg-zinc-200 hover:shadow-lg active:scale-95">
            Reservar
          </button>
        </div>
      </div>

      {/* Efecto hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100/5 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}

export default function FeaturedUnits() {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24">
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-[0.18em] text-zinc-300"
        >
          UNIDADES DESTACADAS
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl"
        >
          Espacios que elevan tu estilo de vida
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-300"
        >
          Cada unidad ha sido diseñada con atención al detalle, 
          combinando funcionalidad y elegancia contemporánea.
        </motion.p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {UNITS.map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </motion.div>
    </section>
  );
}
