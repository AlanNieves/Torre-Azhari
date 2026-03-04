"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/images/img114.jpg", alt: "Recámara principal", tag: "Recámara" },
  { src: "/images/img117.jpg", alt: "Sala de estar", tag: "Sala" },
  { src: "/images/img120.jpg", alt: "Vista interior", tag: "Interior" },
];

export default function ZafirGallery() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? galleryImages.length - 1 : c - 1)),
    []
  );
  const next = useCallback(
    () => setCurrent((c) => (c === galleryImages.length - 1 ? 0 : c + 1)),
    []
  );

  return (
    <section className="bg-[#1e1e1e] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header row */}
        <div className="mb-10 flex items-end justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-medium uppercase tracking-widest text-white/50"
          >
            Galería
          </motion.p>

          {/* Nav arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-2"
          >
            <button
              onClick={prev}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Images row — 3 visible thumbnails, active one highlighted */}
        <div className="grid grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative aspect-[4/3] overflow-hidden rounded-xl transition-all duration-300 ${
                current === i
                  ? "ring-2 ring-white/70 ring-offset-2 ring-offset-[#1e1e1e]"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Tag label */}
              <span className={`absolute bottom-3 left-3 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider backdrop-blur transition-all ${
                current === i
                  ? "bg-white/20 text-white"
                  : "bg-black/30 text-white/70 group-hover:bg-white/20 group-hover:text-white"
              }`}>
                {img.tag}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Expanded preview */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl"
          >
            <Image
              src={galleryImages[current].src}
              alt={galleryImages[current].alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-6 left-6">
              <p className="text-sm font-medium text-white/80">
                {galleryImages[current].alt}
              </p>
              <p className="mt-1 text-xs text-white/50">
                {current + 1} / {galleryImages.length}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}