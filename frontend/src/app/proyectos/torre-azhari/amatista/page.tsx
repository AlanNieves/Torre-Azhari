import type { Metadata } from "next";
import AmatistaHero from "./components/AmatistaHero";
import AmatistaSpecifications from "./components/AmatistaSpecifications";
import AmatistaGallery from "./components/AmatistaGallery";
import AmatistaFloatingCTA from "./components/AmatistaFloatingCTA";
import LeadForm from "@/shared/LeadForm";

export const metadata: Metadata = {
  title: "Departamento Amatista | Torre Azhari",
  description:
    "Departamento Amatista de 111.40 m² en Torre Azhari. Diseño contemporáneo, acabados premium y vistas panorámicas en el corazón de Aguascalientes.",
  alternates: {
    canonical: "/proyectos/torre-azhari/amatista",
  },
  openGraph: {
    title: "Departamento Amatista | Torre Azhari",
    description:
      "Espacios elegantes de 111.40 m² con 2 recámaras, 2 baños y terraza privada. Acabados de lujo y ubicación privilegiada.",
    url: "/proyectos/torre-azhari/amatista",
  },
};

export default function AmatistaPage() {
  return (
    <main className="bg-[#1e1e1e]">
      <AmatistaHero />
      <AmatistaSpecifications />
      <AmatistaGallery />
      <div id="contacto">
        <LeadForm />
      </div>
      <AmatistaFloatingCTA />
    </main>
  );
}

