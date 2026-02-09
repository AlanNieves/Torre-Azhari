// src/app/proyectos/_lib/projects.ts

import type { Project } from '@/types/project';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'torre-azhari',
    slug: 'torre-azhari',
    title: 'Torre Azhari',
    subtitle: 'Residencias verticales de lujo',
    location: 'Aguascalientes, México',
    description: 'Residencias verticales de lujo en una de las zonas más exclusivas de Aguascalientes. Torre Azhari combina arquitectura contemporánea con acabados premium y vistas panorámicas incomparables.',
    shortDescription: 'Residencias verticales de lujo en una de las zonas más exclusivas de Aguascalientes.',
    status: 'available',
    coverImage: '/images/img40.jpg',
    gallery: [
      '/images/img40.jpg',
      '/images/img41.jpg',
      '/images/img42.jpg',
    ],
    features: [
      { icon: 'building', label: 'Niveles', value: '12 pisos' },
      { icon: 'home', label: 'Unidades', value: '48 departamentos' },
      { icon: 'ruler', label: 'Desde', value: '85 m²' },
      { icon: 'car', label: 'Estacionamiento', value: '2 lugares' },
    ],
    amenities: [
      'Alberca infinity',
      'Gimnasio equipado',
      'Área de coworking',
      'Salón de eventos',
      'Terraza rooftop',
      'Seguridad 24/7',
      'Elevadores de alta velocidad',
    ],
    metadata: {
      title: 'Torre Azhari | Residencias de Lujo en Aguascalientes',
      description: 'Descubre Torre Azhari: departamentos de lujo con acabados premium, amenidades exclusivas y ubicación privilegiada en Aguascalientes.',
      keywords: ['torre azhari', 'departamentos lujo aguascalientes', 'residencias verticales'],
    },
  },
  {
    id: 'amara',
    slug: 'amara',
    title: 'AMARA',
    subtitle: 'Terrenos habitacionales premium',
    location: 'Aguascalientes, México',
    description: 'Terrenos habitacionales en un entorno natural privilegiado, con plusvalía garantizada y planeación a largo plazo. AMARA ofrece la oportunidad perfecta para construir tu patrimonio.',
    shortDescription: 'Terrenos habitacionales en un entorno natural, con plusvalía y planeación a largo plazo.',
    status: 'available',
    coverImage: '/images/img71.jpg',
    gallery: [
      '/images/img71.jpg',
      '/images/img72.jpg',
    ],
    features: [
      { icon: 'map', label: 'Lotes desde', value: '200 m²' },
      { icon: 'tree', label: 'Zona', value: 'Residencial' },
      { icon: 'shield', label: 'Legal', value: 'Escriturado' },
      { icon: 'trending-up', label: 'Plusvalía', value: 'Alta' },
    ],
    amenities: [
      'Acceso controlado',
      'Áreas verdes',
      'Infraestructura completa',
      'Servicios subterráneos',
      'Ciclovía',
      'Parque central',
    ],
    metadata: {
      title: 'AMARA | Terrenos Residenciales en Aguascalientes',
      description: 'Invierte en terrenos habitacionales con alta plusvalía. AMARA ofrece lotes premium en zona de crecimiento garantizado.',
      keywords: ['amara', 'terrenos aguascalientes', 'lotes residenciales', 'inversión inmobiliaria'],
    },
  },
];

export function getAllProjects(): Project[] {
  return PROJECTS_DATA;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS_DATA.find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit?: number): Project[] {
  const projects = PROJECTS_DATA.filter((p) => p.status === 'available');
  return limit ? projects.slice(0, limit) : projects;
}
