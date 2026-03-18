import type { Metadata } from "next";
import OnixHero from "./components/OnixHero";
import OnixSpecifications from "./components/OnixSpecifications";
import OnixGallery from "./components/OnixGallery";
import OnixFloatingCTA from "./components/OnixFloatingCTA";
import LeadForm from "@/shared/LeadForm";

export const metadata: Metadata = {
  title: "Departamento Onix | Torre Azhari",
  description:
    "Departamento Onix de 115.20 m² en Torre Azhari. Diseño contemporáneo, acabados premium y vistas panorámicas en el corazón de Aguascalientes.",
  alternates: {
    canonical: "/proyectos/torre-azhari/onix",
  },
  openGraph: {
    title: "Departamento Onix | Torre Azhari",
    description:
      "Espacios elegantes de 115.20 m² con 2 recámaras, 2 baños y terraza privada. Acabados de lujo y ubicación privilegiada.",
    url: "/proyectos/torre-azhari/onix",
  },
};

export default function OnixPage() {
  return (
    <main className="bg-[#1e1e1e]">
      <OnixHero />
      <OnixSpecifications />
      <OnixGallery />
      <div id="contacto">
        <LeadForm />
      </div>
      <OnixFloatingCTA />
    </main>
  );
}

