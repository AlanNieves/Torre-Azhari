"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, FileCheck, Sparkles } from "lucide-react";

const FEATURES = [
  {
    icon: MapPin,
    title: "Ubicaciones con potencial real de crecimiento",
  },
  {
    icon: Building2,
    title: "Proyectos diseñados desde la inversión y el uso",
  },
  {
    icon: FileCheck,
    title: "Transparencia en cada etapa del proceso",
  },
  {
    icon: Sparkles,
    title: "Diseño, calidad y planeación como base",
  },
];

export default function WhyAzhari() {
  return (
    <section className="bg-[#1e1e1e] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-4 font-serif text-4xl font-light text-white lg:text-5xl">
            ¿Por qué Azhari?
          </h2>
          <p className="max-w-2xl text-base text-gray-400">
            No vendemos promesas. Construimos proyectos que
            <br />
            se pueden respaldar.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl bg-[#2a2a2a] p-8"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                  <Icon size={38} className="text-white" />
                </div>
                <h3 className="font-serif text-xl font-light text-white">
                  {feature.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

