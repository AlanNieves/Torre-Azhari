'use client';

import { motion } from 'framer-motion';
import { Shield, Home, ArrowRight } from 'lucide-react';

const PHILOSOPHY_ITEMS = [
  {
    icon: Shield,
    title: "Compromiso con la calidad",
    subtitle: "Lo que prometemos, lo cumplimos",
    description: "Nos distinguimos por un enfoque claro y transparente en cada etapa del proceso. Desde la planeación hasta la entrega, trabajamos con altos estándares de calidad, materiales seleccionados y procesos definidos que garantizan confianza y certeza a nuestros clientes."
  },
  {
    icon: Home,
    title: "Construyendo patrimonios",
    subtitle: "Invertir con respaldo importa",
    description: "Nuestros desarrollos están pensados para generar plusvalía real, apoyados en ubicaciones estratégicas, conceptos sólidos y una visión de crecimiento a largo plazo. Ya sea un proyecto residencial vertical o un desarrollo de terrenos, cada iniciativa responde a una lógica clara de valor."
  },
  {
    icon: ArrowRight,
    title: "Visión a futuro",
    subtitle: "Desarrollar hoy pensando en mañana",
    description: "En Azhari Desarrollos seguimos creciendo con una visión firme: crear proyectos que eleven el estándar inmobiliario en Aguascalientes, aporten valor a la ciudad y se conviertan en referentes por su calidad, diseño y planeación."
  }
];

export default function AboutAzhari() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-[#1e1e1e] py-32 lg:py-40">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 font-serif text-5xl font-light text-white lg:text-6xl"
          >
            Sobre Azhari
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto max-w-3xl text-base font-light leading-relaxed text-white/80 lg:text-lg"
          >
            En Azhari Desarrollos creamos proyectos inmobiliarios pensados para trascender en el tiempo. 
            Nuestro enfoque combina planeación estratégica, arquitectura consciente y ubicaciones con alto 
            potencial, dando como resultado desarrollos que generan valor real tanto para quienes invierten 
            como para los que habitan.
          </motion.p>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="relative bg-[#1e1e1e] pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src="/images/gallery/img182.jpg"
              alt="Torre Azhari"
              className="h-[400px] w-full object-cover lg:h-[500px]"
            />
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="bg-[#1e1e1e] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left side - Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl font-light text-white lg:text-4xl">
                Nuestra filosofía:
                <br />
                Cada proyecto debe
                <br />
                tener una razón de ser
              </h2>
            </motion.div>

            {/* Right side - Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center"
            >
              <p className="text-base font-light leading-relaxed text-white/80">
                En Azhari creemos que un buen desarrollo no solo se mide por su
                estética, sino por su funcionalidad, su entorno y su impacto a largo
                plazo. Por eso, cada proyecto nace de un análisis profundo del
                mercado, la ubicación y las necesidades reales de quienes confían
                en nosotros.
              </p>
            </motion.div>
          </div>

          {/* Three columns */}
          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {PHILOSOPHY_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="rounded-2xl bg-[#2a2a2a] p-8"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                    <Icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="mb-2 text-xl font-light text-white">
                    {item.title}
                  </h3>
                  
                  <p className="mb-4 text-sm font-light text-white/60">
                    {item.subtitle}
                  </p>
                  
                  <p className="text-sm font-light leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

