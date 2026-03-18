// src/app/proyectos/proyectoAmara/page.tsx

import type { Metadata } from "next";
import AmaraHero from "./components/AmaraHero";
import UbicacionEstrategica from "./components/UbicacionEstrategica";
import FlexibilidadSection from "./components/FlexibilidadSection";
import AmenidadesSection from "./components/AmenidadesSection";
import GaleriaSection from "./components/GaleriaSection";
import LeadForm from "@/shared/LeadForm";

export const metadata: Metadata = {
  title: "AMARA | Azhari Desarrollos",
  description:
    "AMARA es un desarrollo habitacional diseñado para quienes buscan invertir con visión o construir su hogar en una de las zonas con mayor proyección al poniente de Aguascalientes.",
  alternates: {
    canonical: "/proyectos/proyectoAmara",
  },
  openGraph: {
    title: "AMARA | Azhari Desarrollos",
    description:
      "Desarrollo habitacional con ubicación estratégica, entorno natural y amenidades funcionales en Aguascalientes.",
    url: "/proyectos/proyectoAmara",
  },
};

export default function ProyectoAmaraPage() {
  return (
    <main className="bg-[#1e1e1e]">
      <AmaraHero />
      <UbicacionEstrategica />
      <FlexibilidadSection />
      <AmenidadesSection />
      <GaleriaSection />
      <LeadForm />
    </main>
  );
}

