"use client";

import { motion } from "framer-motion";

const espacios = [
  {
    icon: (
      <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Rooftop",
    description: "Un espacio exclusivo para relajarte y convivir, con areas lounge, vegetación y vistas abiertas de la ciudad."
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z"/>
      </svg>
    ),
    title: "Gimnasio",
    description: "Equipado con tecnología de última generación para entrenar cómodamente sin salir de casa."
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l1 1h8l1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 13H6V7h12v9z"/>
      </svg>
    ),
    title: "Cowork",
    description: "Área para trabajar, reunirte o crear, con Wi-Fi de alta velocidad y un ambiente tranquilo."
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
      </svg>
    ),
    title: "Salón social",
    description: "Un espacio versátil para reuniones y celebraciones, con diseño contemporáneo y un ambiente cálido."
  }
];

export default function EspaciosSection() {
  return (
    <section className="bg-[#1e1e1e] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-wider text-white/80">
            AMENIDADES
          </p>
          <h2 className="mb-6 font-serif text-4xl font-light text-white lg:text-5xl">
            Espacios que enriquecen tu día
          </h2>
          <p className="text-base leading-relaxed text-white/70 lg:text-lg">
            Cada amenidad ha sido diseñada pensando en tu bienestar, combinando 
            funcionalidad con la experiencia sensorial que mereces.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {espacios.map((espacio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10"
            >
              <div className="mb-4 text-white">
                {espacio.icon}
              </div>
              <h4 className="mb-3 text-xl font-medium text-white">
                {espacio.title}
              </h4>
              <p className="text-sm leading-relaxed text-white/70">
                {espacio.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

