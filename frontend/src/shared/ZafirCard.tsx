"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ZafirCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl bg-[#2a2a2a]"
    >
      <Link
        href="/proyectos/torre-azhari/zafir"
        className="block transition-all duration-300 hover:bg-[#333333] hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-2"
      >
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src="/images/img40.jpg"
            alt="Departamento Zafir"
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-2 font-serif text-2xl font-light text-white transition-colors group-hover:text-white/90">
            Zafir
          </h3>
          
          <p className="mb-4 text-lg font-light text-gray-400 transition-colors group-hover:text-gray-300">
            105.77 m²
          </p>
          
          <span className="inline-block text-sm font-light text-white transition-all group-hover:text-white/90">
            Solicitar información
          </span>
        </div>
      </Link>
    </motion.div>
  );
}