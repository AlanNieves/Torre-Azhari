import type { Metadata } from "next";
import OpalHero from "./components/OpalHero";
import OpalSpecifications from "./components/OpalSpecifications";
import OpalGallery from "./components/OpalGallery";
import OpalFloatingCTA from "./components/OpalFloatingCTA";
import LeadForm from "@/shared/LeadForm";

export const metadata: Metadata = {
  title: "Departamento Opal | Torre Azhari",
  description:
    "Departamento Opal de 103.75 m² en Torre Azhari. Diseño contemporáneo, acabados premium y vistas panorámicas en el corazón de Aguascalientes.",
  alternates: {
    canonical: "/proyectos/torre-azhari/opal",
  },
  openGraph: {
    title: "Departamento Opal | Torre Azhari",
    description:
      "Espacios elegantes de 103.75 m² con 2 recámaras, 2 baños y terraza privada. Acabados de lujo y ubicación privilegiada.",
    url: "/proyectos/torre-azhari/opal",
  },
};

export default function OpalPage() {
  return (
    <main className="bg-[#1e1e1e]">
      <OpalHero />
      <OpalSpecifications />
      <OpalGallery />
      <div id="contacto">
        <LeadForm />
      </div>
      <OpalFloatingCTA />
    </main>
  );
}

