// src/app/proyectos/page.tsx

import type { Metadata } from 'next';
import ProjectsHero from './components/ProjectsHero';
import ProjectsGrid from './components/ProjectsGrid';
import LeadForm from '@/shared/LeadForm';
import { getAllProjects } from './_lib/projects';

export const metadata: Metadata = {
  title: 'Proyectos | Azhari Desarrollos',
  description:
    'Explora nuestro portafolio de desarrollos inmobiliarios: Torre Azhari, AMARA y próximos proyectos en Aguascalientes.',
  alternates: {
    canonical: '/proyectos',
  },
  openGraph: {
    title: 'Proyectos | Azhari Desarrollos',
    description: 'Explora nuestro portafolio de desarrollos inmobiliarios en Aguascalientes.',
    url: '/proyectos',
  },
};

export default function ProyectosPage() {
  const projects = getAllProjects();

  return (
    <main className="bg-[#1e1e1e]">
      <ProjectsHero />
      <ProjectsGrid projects={projects} />
      <LeadForm />
    </main>
  );
}
