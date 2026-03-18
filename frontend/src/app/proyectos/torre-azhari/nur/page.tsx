import type { Metadata } from "next";
import NurHero from "./components/NurHero";
import NurSpecifications from "./components/NurSpecifications";
import NurGallery from "./components/NurGallery";
import NurFloatingCTA from "./components/NurFloatingCTA";
import LeadForm from "@/shared/LeadForm";

export const metadata: Metadata = {
  title: "Departamento Nur | Torre Azhari",
  description:
    "Departamento Nur de 106.52 m² en Torre Azhari. Diseño contemporáneo, acabados premium y vistas panorámicas en el corazón de Aguascalientes.",
  alternates: {
    canonical: "/proyectos/torre-azhari/nur",
  },
  openGraph: {
    title: "Departamento Nur | Torre Azhari",
    description:
      "Espacios elegantes de 106.52 m² con 2 recámaras, 2 baños y terraza privada. Acabados de lujo y ubicación privilegiada.",
    url: "/proyectos/torre-azhari/nur",
  },
};

export default function NurPage() {
  return (
    <main className="bg-[#1e1e1e]">
      <NurHero />
      <NurSpecifications />
      <NurGallery />
      <div id="contacto">
        <LeadForm />
      </div>
      <NurFloatingCTA />
    </main>
  );
}

