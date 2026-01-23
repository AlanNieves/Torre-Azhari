// src/components/sections/Hero.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: i * 0.02,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-[#F5F1E8]">
      {/* Background with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#E8E2D5] via-[#F5F1E8] to-[#EBE6DD]"
        style={{ scale }}
      >
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #2A2520 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A2520]/10 via-transparent to-[#F5F1E8]/60" />
        
        {/* Parallax Layers */}
        <motion.div
          className="absolute inset-0 bg-[#6B7456]/5"
          style={{
            x: mousePosition.x / 50,
            y: mousePosition.y / 50,
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
        style={{ y: textY, opacity }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 text-xs font-medium tracking-[0.3em] text-[#5C564F] sm:text-sm"
        >
          AGUASCALIENTES · 2026
        </motion.p>

        {/* Título dramático con animación por caracteres */}
        <h1 className="overflow-hidden font-serif text-[11vw] font-light leading-[0.9] tracking-tight text-[#2A2520] sm:text-[10vw] lg:text-[8vw]">
          <div className="mb-4">{splitText("Torre")}</div>
          <div>{splitText("Azhari")}</div>
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-[#5C564F] sm:text-lg lg:text-xl"
        >
          Arquitectura contemporánea que redefine
          <br />
          el habitar en la ciudad
        </motion.h2>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 flex flex-col items-center gap-2"
        >
          <p className="text-xs tracking-[0.2em] text-[#5C564F]">DESCUBRIR</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-[#6B7456]" />
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#6B7456]/30 to-transparent"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5F1E8]/40" />
    </section>
  );
}

