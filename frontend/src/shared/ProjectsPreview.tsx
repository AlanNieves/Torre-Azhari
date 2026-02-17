"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";

const PROJECTS = [
  {
    id: "torre-azhari",
    title: "Torre Azhari",
    location: "Aguascalientes, México.",
    description: "Residencias verticales de lujo en una de las zonas más exclusivas de Aguascalientes.",
    image: "/images/img40.jpg",
    link: "/proyectos/torre-azhari",
    linkText: "Conocer proyecto",
  },
  {
    id: "amara",
    title: "AMARA",
    location: "Aguascalientes, México.",
    description: "Terrenos habitacionales en un entorno natural, con plusvalía y planeación a largo plazo.",
    image: "/images/img71.jpg",
    link: "/proyectos/proyectoAmara",
    linkText: "Conocer proyecto",
  },
  {
    id: "proximos",
    title: "Próximos desarrollos",
    location: "Aguascalientes, México.",
    description: "Nuevos proyectos en planeación, pensados para quienes buscan invertir con visión.",
    image: "/images/img43.jpg",
    link: "/proyectos",
    linkText: "Próximamente",
  },
];

export default function ProjectsPreview() {
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
          <h2 className="font-serif text-4xl font-light text-white lg:text-5xl">
            Nuestros proyectos
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-[#2a2a2a]"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 font-serif text-2xl font-light text-white">
                  {project.title}
                </h3>
                <div className="mb-4 flex items-center gap-2 text-gray-400">
                  <MapPin size={16} />
                  <span className="text-sm">{project.location}</span>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="inline-block text-sm font-light text-white underline transition-opacity hover:opacity-70"
                >
                  {project.linkText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
