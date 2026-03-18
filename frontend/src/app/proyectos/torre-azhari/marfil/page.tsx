import type { Metadata } from "next";
import MarfilHero from "./components/MarfilHero";
import MarfilSpecifications from "./components/MarfilSpecifications";
import MarfilGallery from "./components/MarfilGallery";
import MarfilFloatingCTA from "./components/MarfilFloatingCTA";
import LeadForm from "@/shared/LeadForm";

export const metadata: Metadata = {
  title: "Departamento Marfil | Torre Azhari",
  description:
    "Departamento Marfil de 108.15 m² en Torre Azhari. Diseño contemporáneo, acabados premium y vistas panorámicas en el corazón de Aguascalientes.",
  alternates: {
    canonical: "/proyectos/torre-azhari/marfil",
  },
  openGraph: {
    title: "Departamento Marfil | Torre Azhari",
    description:
      "Espacios elegantes de 108.15 m² con 2 recámaras, 2 baños y terraza privada. Acabados de lujo y ubicación privilegiada.",
    url: "/proyectos/torre-azhari/marfil",
  },
};

export default function MarfilPage() {
  return (
    <main className="bg-[#1e1e1e]">
      <MarfilHero />
      <MarfilSpecifications />
      <MarfilGallery />
      <div id="contacto">
        <LeadForm />
      </div>
      <MarfilFloatingCTA />
    </main>
  );
}

