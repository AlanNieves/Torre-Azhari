// src/components/sections/Benefits.tsx
"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  { 
    title: "Espacios que respiran", 
    desc: "Diseño arquitectónico que prioriza la luz natural y la amplitud visual en cada rincón.",
    number: "01"
  },
  { 
    title: "Materiales nobles", 
    desc: "Acabados cuidadosamente seleccionados que envejecen con elegancia y dignidad.",
    number: "02"
  },
  { 
    title: "Ubicación estratégica", 
    desc: "En el corazón de Aguascalientes, cerca de lo esencial sin renunciar a la tranquilidad.",
    number: "03"
  },
  { 
    title: "Inversión inteligente", 
    desc: "Un patrimonio que crece contigo, pensado para el largo plazo.",
    number: "04"
  },
];

export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [xPosition, setXPosition] = useState(0);

  // Auto-scroll infinito
  useAnimationFrame((t, delta) => {
    if (containerRef.current) {
      const speed = 0.3; // píxeles por frame
      const cardWidth = 480 + 32; // ancho de card + gap
      const totalWidth = cardWidth * items.length;
      
      setXPosition((prev) => {
        const newPosition = prev - speed;
        // Reset cuando completa un ciclo
        return newPosition <= -totalWidth ? 0 : newPosition;
      });
    }
  });

  const scroll = (direction: "left" | "right") => {
    const cardWidth = 480 + 32;
    setXPosition((prev) => 
      direction === "left" 
        ? Math.min(prev + cardWidth, 0)
        : prev - cardWidth
    );
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#F5F1E8] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-medium tracking-[0.3em] text-[#5C564F]">
              FILOSOFÍA
            </p>
            <h2 className="mt-6 font-serif text-5xl font-light leading-[1.1] tracking-tight text-[#2A2520] sm:text-6xl lg:text-7xl">
              Vivir con intención,
              <br />
              <span className="text-[#6B7456]">no con prisa</span>
            </h2>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="hidden gap-3 lg:flex">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2A2520]/20 bg-white transition-all duration-300 hover:border-[#6B7456] hover:bg-[#6B7456] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2A2520]/20 bg-white transition-all duration-300 hover:border-[#6B7456] hover:bg-[#6B7456] hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        {/* Infinite Auto-Scroll Container */}
        <div className="mt-20 overflow-hidden">
          <motion.div
            animate={{ x: xPosition }}
            transition={{ type: "tween", ease: "linear", duration: 0 }}
            className="flex gap-8"
          >
            {/* Duplicar items para efecto infinito */}
            {[...items, ...items, ...items].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (i % items.length) * 0.1 }}
                className="group min-w-[calc(100vw-3rem)] sm:min-w-[400px] lg:min-w-[480px]"
              >
                <div className="relative h-full rounded-2xl border border-[#E8E2D5] bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl sm:p-10 lg:p-12">
                  {/* Number */}
                  <motion.p 
                    className="font-serif text-8xl font-light text-[#6B7456]/20 transition-colors duration-500 group-hover:text-[#6B7456]/40"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.number}
                  </motion.p>

                  {/* Content */}
                  <div className="mt-8">
                    <h3 className="font-serif text-3xl font-light tracking-tight text-[#2A2520] sm:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-[#5C564F] sm:text-lg">
                      {item.desc}
                    </p>
                  </div>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + (i % items.length) * 0.1 }}
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#6B7456]/60 to-transparent"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-gradient-to-l from-[#6B7456]/5 to-transparent blur-3xl" />
    </section>
  );
}
