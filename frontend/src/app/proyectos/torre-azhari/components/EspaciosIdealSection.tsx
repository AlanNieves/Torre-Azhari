"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const departamentos = [
  {
    name: "Zafir",
    size: "105.77 m²",
    image: "/images/img114.jpg",
    link: "/proyectos/torre-azhari/zafir"
  },
  {
    name: "Amatista",
    size: "111.40 m²",
    image: "/images/img117.jpg",
    link: "#"
  },
  {
    name: "Nur",
    size: "106.62 m²",
    image: "/images/img120.jpg",
    link: "#"
  }
];

export default function EspaciosIdealSection() {
  return (
    <section className="bg-[#1e1e1e] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-4 font-serif text-4xl font-light text-white lg:text-5xl">
            Encuentra tu
          </h2>
          <h3 className="font-serif text-4xl font-light text-white lg:text-5xl">
            espacio ideal
          </h3>
        </motion.div>

        {/* Apartments Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {departamentos.map((depto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={depto.link}
                className="group block overflow-hidden rounded-lg bg-[#2a2a2a] transition-all duration-300 hover:bg-[#333333] hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={depto.image}
                    alt={depto.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h4 className="mb-2 text-2xl font-light text-white transition-colors group-hover:text-white/90">
                    {depto.name}
                  </h4>
                  <p className="mb-4 text-lg text-white/70 transition-colors group-hover:text-white/80">
                    {depto.size}
                  </p>
                  <span className="text-sm font-medium text-white/80 transition-colors group-hover:text-white">
                    Solicitar información
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}