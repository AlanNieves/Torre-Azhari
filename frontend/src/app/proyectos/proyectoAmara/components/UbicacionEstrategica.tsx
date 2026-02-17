"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";

const InteractiveMap = dynamic(() => import("@/shared/ui/InteractiveMap"), {
  ssr: false,
  loading: () => <div className="flex h-96 items-center justify-center bg-gray-800 rounded-lg">Cargando mapa...</div>
});

const locationPoints = [
  "Universidad Autónoma de Aguascalientes (UAA)",
  "Isla San Marcos",
  "Bosque Sereno",
  "Zona FNSM (Perímetro feral)",
  "CBTIS 39 y 168",
  "Av. Aguascalientes Poniente",
  "Av. Convención de 1914 Poniente",
];

export default function UbicacionEstrategica() {
  return (
    <section className="bg-[#252525] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="font-serif text-3xl font-light text-white lg:text-4xl">
            Ubicación estratégica
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 text-base text-white/70"
        >
          Vivir bien también es estar bien ubicado.
        </motion.p>

        {/* Map + Location Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-8 lg:grid-cols-2 lg:gap-12"
        >
          {/* Map */}
          <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/3]">
            <InteractiveMap
              lat={21.8639}
              lng={-102.3517}
              zoom={14}
              height="100%"
            />
          </div>

          {/* Location Points */}
          <div className="flex flex-col justify-center gap-4">
            {locationPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-start gap-3"
              >
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-white/60" />
                <span className="text-base text-white/80">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
