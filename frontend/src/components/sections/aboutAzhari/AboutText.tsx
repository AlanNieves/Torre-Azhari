'use client';

import { motion } from 'framer-motion';

export default function AboutText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-white/80 leading-[1.7] text-[15px]"
    >
      <p className="max-w-xl pt-2">
        En Azhari desarrollamos proyectos inmobiliarios que combinan visión,
        diseño y plusvalía. Cada espacio es concebido desde la experiencia,
        cuidando cada detalle para ofrecer una vida más cómoda, estética y
        funcional.
      </p>

      <p className="max-w-xl mt-4 text-white/60 leading-[1.7] text-[15px] pt-2">
        Nuestra filosofía se basa en crear entornos que trascienden el tiempo,
        pensados tanto para habitar como para invertir con confianza.
      </p>
    </motion.div>
  );
}