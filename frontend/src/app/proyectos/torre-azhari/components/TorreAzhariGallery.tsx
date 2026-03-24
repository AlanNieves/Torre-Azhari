"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const exteriorImages = [
  { src: "/images/fachada/1.11.webp", alt: "Fachada Torre Azhari - vista frontal" },
  { src: "/images/fachada/1.2.webp", alt: "Fachada Torre Azhari - vista lateral" },
  { src: "/images/fachada/1.4.webp", alt: "Fachada Torre Azhari - noche" },
  { src: "/images/fachada/1.5.webp", alt: "Fachada Torre Azhari - iluminación" },
  { src: "/images/fachada/1.8.webp", alt: "Fachada Torre Azhari - entorno" },
];

const interiorImages = [
  { src: "/images/apartamento-tipo-a/COCINA MOD 2 DEPA A.webp", alt: "Interior: cocina moderna" },
  { src: "/images/apartamento-tipo-a/COMEDOR MOD 2.0 DEPA A.webp", alt: "Interior: comedor" },
  { src: "/images/apartamento-tipo-a/COCINA MOD 2.1 DEPA A.webp", alt: "Interior: cocina y barra" },
  { src: "/images/apartamento-tipo-a/COMEDOR MOD 2.1 DEPA A.webp", alt: "Interior: área social comedor" },
  { src: "/images/apartamento-tipo-a/COMEDOR MOD 2.2 DEPA A.webp", alt: "Interior: sala-comedor" },
];

export default function TorreAzhariGallery() {
  const [activeTab, setActiveTab] = useState<"exterior" | "interior">("exterior");
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = useMemo(
    () => (activeTab === "exterior" ? exteriorImages : interiorImages),
    [activeTab]
  );

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const switchTab = (tab: "exterior" | "interior") => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <section id="galeria" className="bg-[#1e1e1e] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Galería Torre Azhari
            </p>
            <h2 className="mt-2 text-3xl font-serif font-light text-white lg:text-4xl">
              Explora exteriores e interiores
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/70">
              Descubre la arquitectura desde el frente y vive la atmósfera interior con acabados y espacios de lujo.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white/10 p-1">
            <button
              onClick={() => switchTab("exterior")}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase transition-all ${
                activeTab === "exterior"
                  ? "bg-white text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Exteriores
            </button>
            <button
              onClick={() => switchTab("interior")}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase transition-all ${
                activeTab === "interior"
                  ? "bg-white text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Interiores
            </button>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-white/60">{images.length} imágenes</p>
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevious}
              aria-label="Imagen anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/40 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              aria-label="Imagen siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/40 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="hidden gap-4 lg:grid lg:grid-cols-3">
          {images.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                quality={80}
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <div className="relative lg:hidden">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="relative h-full w-full"
              >
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-cover"
                  quality={80}
                  sizes="100vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ver imagen ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-white"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
