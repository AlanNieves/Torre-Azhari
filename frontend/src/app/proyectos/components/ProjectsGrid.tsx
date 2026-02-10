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
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg bg-[#252525]"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <OptimizedImage
                  src={project.coverImage}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={index < 2}
                />
                
                {/* Status Badge */}
                {project.status === 'coming-soon' && (
                  <div className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[#1e1e1e] backdrop-blur-sm">
                    Próximamente
                  </div>
                )}
                
                {project.status === 'available' && (
                  <div className="absolute right-4 top-4 rounded-full bg-[#B8945F]/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                    Disponible
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-3 flex items-center gap-2 text-sm text-white/60">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>

                <h3 className="mb-3 font-serif text-3xl font-light text-white">
                  {project.title}
                </h3>

                {project.subtitle && (
                  <p className="mb-4 text-base font-medium text-[#B8945F]">
                    {project.subtitle}
                  </p>
                )}

                <p className="mb-6 text-base leading-relaxed text-white/70">
                  {project.shortDescription || project.description}
                </p>

                {/* CTA */}
                {project.status !== 'sold-out' && (
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="inline-flex items-center gap-2 text-[#B8945F] transition-all hover:gap-3 hover:text-white"
                  >
                    <span className="font-medium">
                      {project.status === 'coming-soon' ? 'Más información' : 'Conocer proyecto'}
                    </span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
