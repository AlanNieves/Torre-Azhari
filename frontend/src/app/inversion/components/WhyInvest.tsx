"use client";

import { motion } from "framer-motion";
import OptimizedImage from "@/shared/ui/OptimizedImage";

const investmentReasons = [
  {
    id: 1,
    title: "Plusvalía como eje central",
    subtitle: "El valor no es casualidad, se diseña",
    description:
      "La plusvalía no ocurre sola. Se crea desde la selección del terreno, el diseño del proyecto, el tipo de desarrollo y su integración con el entorno. En Azhari, cada decisión responde a una lógica de crecimiento sostenido.",
    image: "/images/gallery/img197.jpg",
  },
  {
    id: 2,
    title: "Inversión flexible",
    subtitle: "Estrategias que se ajustan a distintos perfiles",
    description:
      "Azhari ofrece proyectos que permiten diferentes formas de inversión, desde terrenos hasta desarrollos verticales, facilitando esquemas accesibles y bien estructurados que permiten invertir sin comprometer tu estabilidad financiera",
    image: "/images/gallery/img200.jpg",
  },
  {
    id: 3,
    title: "Seguridad y confianza",
    subtitle: "Invertir con respaldo hace la diferencia",
    description:
      "Trabajamos con procesos claros, información transparente y un acompañamiento cercano. Sabemos que la confianza es clave en cualquier inversión, y por eso cuidamos cada detalle del proceso. Cuando inviertes con Azhari, sabes dónde estás invirtiendo.",
    image: "/images/gallery/img203.jpg",
  },
];

export default function WhyInvest() {
  return (
    <section className="bg-[#1e1e1e] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center font-serif text-4xl font-light text-white lg:text-5xl"
        >
          ¿Por qué invertir con Azhari?
        </motion.h2>

        {/* Investment Reasons */}
        <div className="space-y-8">
          {investmentReasons.map((reason, index) => (
            <motion.article
              key={reason.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group flex flex-col overflow-hidden rounded-lg bg-[#252525] md:flex-row"
            >
              {/* Image Container - Fixed width on desktop */}
              <div className="relative h-64 w-full flex-shrink-0 overflow-hidden md:h-auto md:w-80">
                <div className="relative h-full w-full">
                  <OptimizedImage
                    src={reason.image}
                    alt={reason.title}
                    className="h-full w-full"
                    aspectRatio="aspect-square md:aspect-[4/5]"
                    priority={index === 0}
                  />
                </div>
              </div>

              {/* Content - Flexible width */}
              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                <h3 className="mb-3 font-serif text-2xl font-light text-white lg:text-3xl">
                  {reason.title}
                </h3>

                <p className="mb-4 text-base font-light text-white/90">
                  {reason.subtitle}
                </p>

                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                  {reason.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

