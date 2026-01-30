"use client";

import { motion } from "framer-motion";
import { MapPin, ShoppingBag, Users, Shield } from "lucide-react";

const BENEFITS = [
  {
    icon: MapPin,
    title: "Conectividad y accesos",
  },
  {
    icon: ShoppingBag,
    title: "Zona exclusiva y servicios",
  },
  {
    icon: Users,
    title: "Entorno social y cultural",
  },
  {
    icon: Shield,
    title: "Seguridad y calma",
  },
];

export default function Location() {
  return (
    <section className="bg-[#1e1e1e] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="overflow-hidden rounded-2xl bg-[#2a2a2a]">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[400px] lg:h-auto"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29685.66489897815!2d-102.29589!3d21.88234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee986a6e1d21%3A0x7ca2b8c5d8f6d3a!2sAguascalientes%2C%20Ags.!5e0!3m2!1ses-419!2smx!4v1234567890123!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              />
            </motion.div>

            {/* Lista de beneficios */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center space-y-6 p-8 lg:p-12"
            >
              {BENEFITS.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Icon size={20} className="text-white" />
                    </div>
                    <p className="text-lg font-light text-white">
                      {benefit.title}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
