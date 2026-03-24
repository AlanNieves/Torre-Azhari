// src/app/proyectos/torre-azhari/page.tsx

import type { Metadata } from "next";
import TorreAzhariHero from "./components/TorreAzhariHero";
import EspaciosSection from "./components/EspaciosSection";
import EspaciosIdealSection from "./components/EspaciosIdealSection";
import AcabadosSection from "./components/AcabadosSection";
import EficienciaSection from "./components/EficienciaSection";
import TorreAzhariGallery from "./components/TorreAzhariGallery";
import LeadForm from "@/shared/LeadForm";

export const metadata: Metadata = {
  title: "Torre Azhari | Azhari Desarrollos",
  description:
    "Torre Azhari: Residencias verticales de lujo en una de las zonas más exclusivas de Aguascalientes. Arquitectura contemporánea con acabados premium y vistas panorámicas.",
  alternates: {
    canonical: "/proyectos/torre-azhari",
  },
  openGraph: {
    title: "Torre Azhari | Azhari Desarrollos",
    description:
      "Residencias verticales de lujo con acabados premium, amenidades exclusivas y ubicación privilegiada en Aguascalientes.",
    url: "/proyectos/torre-azhari",
  },
};

export default function TorreAzhariPage() {
  return (
    <main className="bg-[#1e1e1e]">
      <TorreAzhariHero />
      <EspaciosSection />
      <EspaciosIdealSection />
      <AcabadosSection />
      <EficienciaSection />
      <TorreAzhariGallery />
      <LeadForm />
    </main>
  );
}

