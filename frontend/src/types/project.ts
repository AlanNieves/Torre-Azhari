// src/types/project.ts

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  location: string;
  description: string;
  shortDescription?: string;
  status: 'available' | 'coming-soon' | 'sold-out';
  
  // Imágenes
  coverImage: string;
  gallery: string[];
  
  // Características generales
  features: ProjectFeature[];
  amenities: string[];
  
  // Ubicación
  coordinates?: {
    lat: number;
    lng: number;
  };
  address?: string;
  
  // Unidades (si aplica)
  units?: ProjectUnit[];
  
  // SEO y metadata
  metadata?: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface ProjectFeature {
  icon: string;
  label: string;
  value: string;
}

export interface ProjectUnit {
  id: string;
  name: string;
  type: string;
  size: number; // m²
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  price: number;
  pricePerM2?: number;
  isAvailable: boolean;
  floor?: number;
  description?: string;
  images?: string[];
  features?: string[];
}

export interface ProjectsFilter {
  status?: Project['status'];
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}

