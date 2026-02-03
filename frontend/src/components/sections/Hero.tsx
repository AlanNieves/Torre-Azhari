"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gray-900 pt-20">
      {/* Background Image - Optimizado con Next.js Image */}
      <Image
        src="/images/img18.jpg"
        alt="Azhari Desarrollos - Residencias de lujo"
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/55 to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 py-24">
        <div className="w-full max-w-6xl text-center">
          <h1 className="mb-6 font-serif text-6xl font-light leading-tight text-white sm:text-7xl md:text-8xl lg:text-9xl animate-fade-in">
            Azhari
            <br />
            Desarrollos
          </h1>
          
          <p className="mx-auto mb-12 max-w-4xl text-lg font-light leading-relaxed text-white sm:text-xl md:text-2xl animate-fade-in-delay">
            Desarrollos inmobiliarios que combinan lujo, ubicación y plusvalía
          </p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm font-medium tracking-[0.4em] text-white">
              DESCUBRIR
            </span>
            <motion.div
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronDown className="h-8 w-8 text-white" strokeWidth={2} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
