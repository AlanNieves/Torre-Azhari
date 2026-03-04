"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import OptimizedImage from "@/shared/ui/OptimizedImage";
import type { Project } from "@/types/project";

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section className="bg-[#1e1e1e] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center font-serif text-3xl font-light text-white lg:text-4xl"
        >
          Desarrollos activos
        </motion.h2>

        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href={
                  project.status === 'coming-soon'
                    ? '#contacto'
                    : project.slug === 'amara'
                      ? '/proyectos/proyectoAmara'
                      : `/proyectos/${project.slug}`
                }
                className="group block relative grid gap-6 overflow-hidden rounded-2xl bg-[#252525] lg:grid-cols-2 transition-all duration-300 hover:bg-[#2a2a2a] hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
                  <div className="relative h-full w-full group-hover:scale-110 transition-transform duration-700">
                    <OptimizedImage
                      src={project.coverImage}
                      alt={project.title}
                      className=""
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <h3 className="mb-3 font-serif text-3xl font-light text-white lg:text-4xl transition-colors group-hover:text-white/90">
                    {project.title}
                  </h3>

                  <div className="mb-4 flex items-center gap-2 text-sm text-white/60 transition-colors group-hover:text-white/70">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>

                  <p className="mb-8 text-base leading-relaxed text-white/70 transition-colors group-hover:text-white/80">
                    {project.shortDescription || project.description}
                  </p>

                  {/* CTA */}
                  {project.status !== 'sold-out' && (
                    <span className="group/btn inline-flex w-fit items-center gap-2 rounded-full border-2 border-white bg-white px-8 py-3.5 text-sm font-semibold text-[#1e1e1e] transition-all group-hover:bg-transparent group-hover:text-white">
                      Ver proyecto
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
