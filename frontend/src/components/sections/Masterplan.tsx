// src/components/sections/Masterplan.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const FLOORS = [
  { level: "PB", name: "Planta Baja", units: 0, amenities: ["Lobby", "Seguridad", "Estacionamiento"] },
  { level: "1-5", name: "Niveles 1 al 5", units: 20, amenities: ["4 departamentos por nivel"] },
  { level: "6-10", name: "Niveles 6 al 10", units: 20, amenities: ["4 departamentos por nivel"] },
  { level: "11", name: "Roof Garden", units: 2, amenities: ["Penthouse", "Terraza", "Asadores"] },
];

const SPECS = [
  { label: "Niveles", value: "11" },
  { label: "Departamentos", value: "42" },
  { label: "Elevadores", value: "2" },
  { label: "Cajones", value: "84" },
];

export default function Masterplan() {
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-white py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Información */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-[#5C564F]">MASTERPLAN</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-[#2A2520] sm:text-4xl lg:text-5xl">
            Distribución inteligente
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5C564F]">
            Cada nivel ha sido diseñado para maximizar el espacio, 
            las vistas y la privacidad de los residentes.
          </p>

          {/* Especificaciones */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {SPECS.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="rounded-2xl border border-[#E8E2D5] bg-white/50 p-4 shadow-sm"
              >
                <p className="font-serif text-3xl text-[#2A2520]">{spec.value}</p>
                <p className="mt-1 text-xs text-[#5C564F]">{spec.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Info adicional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 rounded-2xl border border-[#E8E2D5] bg-white/50 p-6 shadow-sm"
          >
            <h3 className="text-sm font-semibold tracking-[0.16em] text-[#5C564F]">
              CARACTERÍSTICAS TÉCNICAS
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#5C564F]">
              <li className="flex items-center gap-2">
                <span className="text-[#6B7456]">•</span>
                <span>Construcción de concreto armado</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#6B7456]">•</span>
                <span>Fachada con acabados premium</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#6B7456]">•</span>
                <span>Sistemas de eficiencia energética</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#6B7456]">•</span>
                <span>Áreas verdes y jardines</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Visualización del edificio */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="rounded-3xl border border-[#E8E2D5] bg-white/30 p-6 shadow-xl sm:p-8">
            {/* Plano placeholder */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#E8E2D5] bg-[#F5F1E8]/80 sm:aspect-[3/4]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8E2D5]/40 via-[#F5F1E8]/60 to-white/80" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,250,250,0.02),transparent_70%)]" />
              
              {/* Vista lateral del edificio */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative h-full w-full max-w-sm">
                  {/* Roof */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    onClick={() => setSelectedFloor("11")}
                    className="absolute top-0 left-1/2 h-16 w-full -translate-x-1/2 cursor-pointer rounded-t-xl border-2 border-[#6B7456] bg-[#6B7456]/20 transition-all duration-300 hover:border-[#6B7456] hover:bg-[#6B7456]/30"
                  >
                    <div className="flex h-full items-center justify-center">
                      <span className="text-xs font-semibold text-[#2A2520]">ROOF</span>
                    </div>
                  </motion.div>

                  {/* Pisos intermedios */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="absolute left-1/2 top-20 h-[calc(100%-120px)] w-full -translate-x-1/2 cursor-pointer border-2 border-[#6B7456] bg-gradient-to-b from-[#6B7456]/10 to-[#6B7456]/20 transition-all duration-300 hover:border-[#6B7456]"
                    onClick={() => setSelectedFloor("1-10")}
                  >
                    {/* Líneas de pisos */}
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute left-0 right-0 border-t border-[#E8E2D5]"
                        style={{ top: `${(i + 1) * 10}%` }}
                      />
                    ))}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-semibold text-[#2A2520]">NIVELES 1-10</span>
                    </div>
                  </motion.div>

                  {/* Planta baja */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    onClick={() => setSelectedFloor("PB")}
                    className="absolute bottom-0 left-1/2 h-20 w-full -translate-x-1/2 cursor-pointer rounded-b-xl border-2 border-[#6B7456] bg-[#6B7456]/30 transition-all duration-300 hover:border-[#6B7456] hover:bg-[#6B7456]/40"
                  >
                    <div className="flex h-full items-center justify-center">
                      <span className="text-xs font-semibold text-[#2A2520]">PLANTA BAJA</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-4 left-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-[#5C564F]">
                  VISTA ESQUEMÁTICA
                </p>
              </div>
            </div>

            {/* Leyenda de niveles */}
            <div className="mt-6 space-y-3">
              {FLOORS.map((floor, index) => (
                <motion.div
                  key={floor.level}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  onClick={() => setSelectedFloor(floor.level)}
                  className={`cursor-pointer rounded-xl border p-4 transition-all duration-300 ${
                    selectedFloor === floor.level
                      ? "border-[#6B7456] bg-[#6B7456]/20"
                      : "border-[#E8E2D5] bg-white/50 hover:border-[#6B7456] hover:bg-[#6B7456]/10"
                  }`}
                >
                  <div className="flex items-center justify-between" suppressHydrationWarning>
                    <div>
                      <p className="text-sm font-semibold text-[#2A2520]">{floor.name}</p>
                      <p className="mt-1 text-xs text-[#5C564F]">
                        {floor.units > 0 ? `${floor.units} unidades` : "Áreas comunes"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[#5C564F]">{floor.amenities.join(" · ")}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
