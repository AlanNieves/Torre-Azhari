// src/app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Gallery from "@/components/sections/Gallery";
import LocationSection from "@/components/sections/Location";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Torre Azhari | Departamentos en Aguascalientes",
  description:
    "Torre Azhari es un desarrollo inmobiliario en Aguascalientes enfocado en departamentos contemporáneos para vivir, invertir y construir un hogar con arquitectura de alto nivel.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Torre Azhari | Departamentos en Aguascalientes",
    description:
      "Desarrollo inmobiliario en Aguascalientes con departamentos diseñados para un estilo de vida contemporáneo y una inversión sólida.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Gallery />
      <LocationSection />
      <CTA />
    </main>
  );
}
