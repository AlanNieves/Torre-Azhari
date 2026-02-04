'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax muy sutil
  const y = useTransform(scrollYProgress, [0, 1], [16, -16]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            border border-white/10
            bg-black
          "
        >
          <img
            src="/images/img123.jpg"
            alt="Torre Azhari"
            className="w-full 
            h-[260px] md:h-[300px]
            object-contain
            bg-black"
          />

          {/* Overlay casi invisible */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* Badge ultra discreto */}
      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          -bottom-5
          px-5
          py-2
          rounded-full
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-md
          text-[12px]
          tracking-wide
          text-white/70
        "
      >
        Diseño • Calidad • Plusvalía
      </div>
    </motion.div>
  );
}