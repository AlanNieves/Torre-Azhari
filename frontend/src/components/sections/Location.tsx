// src/components/sections/Location.tsx
"use client";

import { motion } from "framer-motion";
import { Car, Building, Palette, ShieldCheck } from "lucide-react";
import dynamic from "next/dynamic";

/**
 * Importación dinámica del mapa
 * 
 * Usamos dynamic import con ssr: false porque:
 * - Leaflet requiere window/document (solo disponible en el cliente)
 * - Evita errores de hidratación en Next.js
 * - Mejora el performance inicial (lazy loading)
 */
const InteractiveMap = dynamic(
  () => import("@/components/ui/InteractiveMap"),
  { 
    ssr: false, // No renderizar en el servidor
    loading: () => (
      // Placeholder mientras carga el mapa
      <div className="flex h-full w-full items-center justify-center rounded-3xl bg-zinc-900/40">
        <div className="text-center">
          <div className="mx-auto mb-3 h-12 w-12 animate-pulse rounded-full border border-zinc-700 bg-zinc-800" />
          <p className="text-xs text-zinc-400">Cargando mapa...</p>
        </div>
      </div>
    ),
  }
);

/**
 * Características de la ubicación
 * Array de objetos con icono (lucide-react) y texto descriptivo
 */

const features = [
  { icon: Car, text: "Conectividad y accesos" },
  { icon: Building, text: "Zona exclusiva y servicios" },
  { icon: Palette, text: "Entorno social y cultural" },
  { icon: ShieldCheck, text: "Seguridad y calma" },
];

export default function LocationSection() {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-[#E8E2D5] bg-white/30 p-6 shadow-xl sm:p-8"
        >
        <p className="text-xs font-semibold tracking-[0.18em] text-[#5C564F]">UBICACIÓN</p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight text-[#2A2520] sm:text-4xl lg:text-5xl">
          Contexto, acceso y estilo de vida
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/**
             * Contenedor del mapa interactivo
             * 
             * Ubicación: Luis Donaldo Colosio 123 interior 4
             * Colonia: Jardines de la Concepción 2da Sección
             * Ciudad: Aguascalientes, Aguascalientes
             * CP: 20120
             * 
             * Coordenadas (Jardines de la Concepción, Aguascalientes):
             * - Latitud: 21.9249
             * - Longitud: -102.2962
             * 
             * Nota: Las coordenadas apuntan a la zona de Jardines de la Concepción.
             * Para mayor precisión, verificar la ubicación exacta del lote.
             */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-[#E8E2D5] shadow-lg">
              <InteractiveMap 
                lat={21.9249} 
                lng={-102.2962} 
                zoom={16}
                height="100%"
              />
            </div>
            
            {/* Texto descriptivo debajo del mapa */}
            <p className="mt-3 text-sm text-[#5C564F]">
              Luis Donaldo Colosio 123, Jardines de la Concepción - Aguascalientes, Ags.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-3xl border border-[#E8E2D5] bg-white/50 p-6 shadow-sm lg:col-span-5"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-[#5C564F]">PUNTOS CLAVE</p>
            <ul className="mt-4 space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={feature.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-sm text-[#2A2520]"
                >
                  <feature.icon className="h-5 w-5 text-[#6B7456]" />
                  <span>{feature.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
      </div>
    </section>
  );
}
