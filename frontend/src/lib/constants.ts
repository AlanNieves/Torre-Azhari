// src/lib/constants.ts
export const SITE = {
  name: "Torre Azhari",
  description:
    "Un desarrollo inmobiliario de alto nivel. Una experiencia editorial-arquitectónica diseñada para generar deseo, confianza y contacto.",
  url: "https://example.com",
  ogImage: "/og.jpg",
  city: "Aguascalientes, MX",
  email: "contacto@torreazhari.com",
  phone: "+52 000 000 0000",
} as const;

export const NAV = [
  { label: "Inicio", href: "#hero" },
  { label: "Proyecto", href: "#proyecto" },
  { label: "Departamentos", href: "#departamentos" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
] as const;

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const API = {
  // En producción (Render), esta URL será https://azhari-backend.onrender.com
  // En desarrollo, será http://localhost:5000
  leadsEndpoint: `${API_BASE_URL}/api/leads`,
} as const;

