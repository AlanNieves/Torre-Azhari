// src/components/sections/FeaturedUnits.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Unit {
  id: string;
  name: string;
  type: string;
  area: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  available: number;
}

const UNITS: Unit[] = [
  {
    id: "u1",
    name: "Modelo A",
    type: "Departamento Contemporáneo",
    area: "95",
    price: 3850000,
    bedrooms: 2,
    bathrooms: 2,
    available: 5,
  },
  {
    id: "u2",
    name: "Modelo B",
    type: "Departamento Plus",
    area: "135",
    price: 5500000,
    bedrooms: 3,
    bathrooms: 2,
    available: 3,
  },
  {
    id: "u3",
    name: "Modelo C",
    type: "Penthouse Premium",
    area: "180",
    price: 8900000,
    bedrooms: 4,
    bathrooms: 3,
    available: 1,
  },
];

function UnitCard({ unit, index }: { unit: Unit; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group min-w-[90vw] sm:min-w-[500px] lg:min-w-[600px]"
    >
      <div className="relative h-full overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(107,116,86,0.3)]">
        {/* Image Area */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#E8E2D5] to-[#D5CFC0]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(107,116,86,0.1),transparent_70%)]" />
          
          {/* Decorative elements */}
          <div className="absolute right-8 top-8 flex flex-col items-end gap-2">
            <div className="rounded-full bg-white/90 px-4 py-2 text-xs font-medium tracking-[0.2em] text-[#2A2520]">
              {unit.available} DISPONIBLES
            </div>
          </div>

          {/* Placeholder for unit image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-serif text-6xl font-light text-[#6B7456]/20">
              {unit.name}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10">
          <div className="mb-6">
            <p className="text-xs font-medium tracking-[0.3em] text-[#5C564F]">
              {unit.type}
            </p>
            <h3 className="mt-2 font-serif text-4xl font-light tracking-tight text-[#2A2520] sm:text-5xl">
              {unit.name}
            </h3>
          </div>

          {/* Specs Grid */}
          <div className="mb-8 grid grid-cols-3 gap-6 border-y border-[#E8E2D5] py-6">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#5C564F]">ÁREA</p>
              <p className="mt-1 font-serif text-2xl font-light text-[#2A2520]">
                {unit.area}<span className="text-base">m²</span>
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-[#5C564F]">RECÁMARAS</p>
              <p className="mt-1 font-serif text-2xl font-light text-[#2A2520]">
                {unit.bedrooms}
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-[#5C564F]">BAÑOS</p>
              <p className="mt-1 font-serif text-2xl font-light text-[#2A2520]">
                {unit.bathrooms}
              </p>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <p className="text-xs tracking-[0.2em] text-[#5C564F]">DESDE</p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-serif text-4xl font-light tracking-tight text-[#2A2520]">
                ${(unit.price / 1000000).toFixed(2)}
              </span>
              <span className="text-lg text-[#5C564F]">MDP</span>
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-full bg-[#6B7456] py-4 text-center text-sm font-medium tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#B85C38]"
          >
            SOLICITAR INFORMACIÓN
          </motion.button>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
          className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-[#6B7456] via-[#B85C38] to-[#6B7456]"
        />
      </div>
    </motion.div>
  );
}

export default function FeaturedUnits() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 650;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      // Update button states
      setTimeout(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
          setCanScrollLeft(scrollLeft > 0);
          setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
      }, 300);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F5F1E8] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-16 flex items-end justify-between">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-medium tracking-[0.3em] text-[#5C564F]"
            >
              MODELOS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 font-serif text-5xl font-light leading-[1.1] tracking-tight text-[#2A2520] sm:text-6xl lg:text-7xl"
            >
              Encuentra tu
              <br />
              <span className="text-[#6B7456]">espacio ideal</span>
            </motion.h2>
          </div>

          {/* Navigation Controls */}
          <div className="hidden gap-3 lg:flex">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[#2A2520]/20 bg-white transition-all duration-300 hover:border-[#6B7456] hover:bg-[#6B7456] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[#2A2520]/20 bg-white transition-all duration-300 hover:border-[#6B7456] hover:bg-[#6B7456] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="horizontal-scroll flex gap-8 overflow-x-auto pb-4"
        >
          {UNITS.map((unit, i) => (
            <UnitCard key={unit.id} unit={unit} index={i} />
          ))}
        </div>

        {/* Mobile scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-center text-sm tracking-[0.2em] text-[#5C564F] lg:hidden"
        >
          ← DESLIZAR PARA VER MÁS →
        </motion.p>
      </div>

      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#B85C38]/5 via-transparent to-[#6B7456]/5 blur-3xl" />
    </section>
  );
}
