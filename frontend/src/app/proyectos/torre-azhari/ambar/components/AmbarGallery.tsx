"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/images/designs/05SURPONIENTEambar.png", alt: "Ambar — Planta", tag: "Planta" },
  { src: "/images/gallery/img114.jpg", alt: "Ambar — Recámara", tag: "Recámara" },
  { src: "/images/gallery/img120.jpg", alt: "Ambar — Interior", tag: "Interior" },
];

export default function AmbarGallery() {
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
        <div className="mb-10 flex items-end justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-medium uppercase tracking-widest text-white/50"
          >
            Galería
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-2"
          >
            <button onClick={prev} aria-label="Anterior" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white hover:text-white">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} aria-label="Siguiente" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white hover:text-white">
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>

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
                current === i ? "ring-2 ring-white/70 ring-offset-2 ring-offset-[#1e1e1e]" : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-3 left-3">
                <span className="rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">{img.tag}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

