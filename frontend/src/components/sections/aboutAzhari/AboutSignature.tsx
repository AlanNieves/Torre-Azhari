'use client';

import { motion } from 'framer-motion';

export default function AboutSignature() {
  return (
    <div className="relative mt-28 flex justify-center">
      {/* Humo / luz difusa */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="
          absolute
          -top-12
          w-[520px]
          h-[140px]
          bg-white/10
          blur-3xl
          rounded-full
        "
      />

      {/* Texto */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="
          relative
          text-[36px]
          md:text-[44px]
          font-light
          tracking-[0.12em]
          text-white/80
        "
      >
        <motion.span
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          DISEÑO
        </motion.span>

        <span className="mx-4 text-white/40">•</span>

        <motion.span
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 4,
            delay: 1.3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          CALIDAD
        </motion.span>

        <span className="mx-4 text-white/40">•</span>

        <motion.span
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 4,
            delay: 2.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          PLUSVALÍA
        </motion.span>
      </motion.h2>
    </div>
  );
}
