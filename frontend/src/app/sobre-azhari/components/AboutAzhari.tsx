'use client';

import { motion } from 'framer-motion';
import { Shield, Home, ArrowRight } from 'lucide-react';

const PHILOSOPHY_ITEMS = [
  {
    icon: Shield,
    title: "Compromiso con la calidad",
    subtitle: "Lo que prometemos, lo hacemos",
    description: "Nos distinguimos por el estricto rigor y excelencia en la ejecución de cada proyecto. Gestionamos procesos a través de estrategias que aseguran funcionalidad, durabilidad y confort, utilizando solo materiales seleccionados y procesos estandarizados que garantizan la más alta calidad en cada espacio."
  },
  {
    icon: Home,
    title: "Construyendo patrimonios",
    subtitle: "Invertir con resultado rápido",
    description: "Nuestro desarrollo nace pensado en la plusvalía inmediata y en un entorno en constante crecimiento con infraestructura y servicios en expansión. Cada proyecto es construido bajo una visión estratégica en el desarrollo de vivienda, que busca impulsar la consolidación patrimonial a través de ubicaciones premium."
  },
  {
    icon: ArrowRight,
    title: "Visión a futuro",
    subtitle: "Desarrollos hoy, patrimonio de mañana",
    description: "En Azhari Desarrollos seguimos estándares rigurosos que cumplen más allá del marco legal y regulatorio. Cada proyecto ha sido concebido con una visión a largo plazo, fundamentada en análisis profundo del entorno, proyección urbana y demanda futura para ofrecer espacios por su calidad, diseño y potencial."
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
              src="/images/img49.jpg"
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
                plazo. Por ello, cada proyecto nace de un análisis profundo del 
                contexto urbano, la demanda futura y la rentabilidad real para quienes confían 
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