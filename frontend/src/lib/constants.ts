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
  { label: "Inicio", href: "/" },
  { label: "Proyecto", href: "/proyecto" },
  { label: "Departamentos", href: "/departamentos" },
  { label: "Ubicación", href: "/ubicacion" },
  { label: "Contacto", href: "/contacto" },
] as const;

export const API = {
  // si quieres apuntar directo al backend externo, pon NEXT_PUBLIC_LEADS_ENDPOINT en .env.local
  leadsEndpoint: process.env.NEXT_PUBLIC_LEADS_ENDPOINT || "/api/leads",
} as const;
