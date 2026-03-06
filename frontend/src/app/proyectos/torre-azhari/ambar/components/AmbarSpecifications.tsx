"use client";

import { motion } from "framer-motion";
import { Maximize2, Sun, DollarSign, BedDouble, Bath, Car } from "lucide-react";

const specs = [
  { icon: Maximize2, label: "Área de departamento", value: "94.00 m²" },
  { icon: Sun,       label: "Área de terraza",      value: "4.50 m²" },
  { icon: DollarSign,label: "Costo x m²",           value: "$42,100" },
  { icon: BedDouble, label: "Recámaras",             value: "2" },
  { icon: Bath,      label: "Baños",                 value: "2" },
  { icon: Car,       label: "Cajones de estacionamiento", value: "1" },
];

export default function AmbarSpecifications() {
  return (
    <section id="especificaciones" className="bg-[#1e1e1e] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl font-light text-white lg:text-5xl">
              Especificaciones
              <br />
              generales
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
              Un espacio que se adapta a tu estilo de vida.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <p className="font-serif text-3xl font-light text-white lg:text-4xl">
                  98.50 m²
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-white/50">
                  Superficie total
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <p className="font-serif text-3xl font-light text-white lg:text-4xl">
                  $4,146,850
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-white/50">
                  Precio MXN
                </p>
              </motion.div>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <ul className="space-y-5">
              {specs.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.li
                    key={s.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="flex items-center gap-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Icon size={18} className="text-white/80" />
                    </span>
                    <span className="flex-1 text-base text-white/70">{s.label}</span>
                    <span className="text-base font-medium text-white">{s.value}</span>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1e1e1e] transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
              >
                Me interesa este departamento
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
              <p className="mt-3 text-xs text-white/40">
                Sin compromiso · Respuesta en menos de 24h
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
