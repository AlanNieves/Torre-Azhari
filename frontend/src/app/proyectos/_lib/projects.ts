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
    coverImage: '/images/img76.jpg',
    gallery: [
      '/images/img76.jpg',
      '/images/img40.jpg',
      '/images/img41.jpg',
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
    coverImage: '/images/img43.jpg',
    gallery: [
      '/images/img43.jpg',
      '/images/img46.jpg',
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
  {
    id: 'proximos-desarrollos',
    slug: 'proximos-desarrollos',
    title: 'Próximos desarrollos',
    subtitle: 'Nuevos proyectos en camino',
    location: 'Aguascalientes, México',
    description: 'Estamos trabajando en nuevos desarrollos que transformarán la forma de vivir en Aguascalientes. Mantente atento a nuestros próximos lanzamientos.',
    shortDescription: 'Nuevos proyectos que transformarán la forma de vivir en Aguascalientes.',
    status: 'coming-soon',
    coverImage: '/images/img18.jpg',
    gallery: [
      '/images/img18.jpg',
    ],
    features: [
      { icon: 'calendar', label: 'Lanzamiento', value: 'Próximamente' },
      { icon: 'map', label: 'Ubicación', value: 'Zona premium' },
      { icon: 'trending-up', label: 'Inversión', value: 'Oportunidad' },
    ],
    amenities: [
      'Diseño innovador',
      'Ubicación estratégica',
      'Plusvalía garantizada',
      'Financiamiento disponible',
    ],
    metadata: {
      title: 'Próximos Desarrollos | Azhari',
      description: 'Descubre los próximos proyectos de Azhari Desarrollos en Aguascalientes.',
      keywords: ['próximos desarrollos', 'nuevos proyectos aguascalientes', 'azhari'],
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
