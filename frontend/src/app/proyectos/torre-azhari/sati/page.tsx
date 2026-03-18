import type { Metadata } from "next";
import SatiHero from "./components/SatiHero";
import SatiSpecifications from "./components/SatiSpecifications";
import SatiGallery from "./components/SatiGallery";
import SatiFloatingCTA from "./components/SatiFloatingCTA";
import LeadForm from "@/shared/LeadForm";

export const metadata: Metadata = {
  title: "Departamento Sati | Torre Azhari",
  description:
    "Departamento Sati de 102.30 m² en Torre Azhari. Diseño contemporáneo, acabados premium y vistas panorámicas en el corazón de Aguascalientes.",
  alternates: {
    canonical: "/proyectos/torre-azhari/sati",
  },
  openGraph: {
    title: "Departamento Sati | Torre Azhari",
    description:
      "Espacios elegantes de 102.30 m² con 2 recámaras, 2 baños y terraza privada. Acabados de lujo y ubicación privilegiada.",
    url: "/proyectos/torre-azhari/sati",
  },
};

export default function SatiPage() {
  return (
    <main className="bg-[#1e1e1e]">
      <SatiHero />
      <SatiSpecifications />
      <SatiGallery />
      <div id="contacto">
        <LeadForm />
      </div>
      <SatiFloatingCTA />
    </main>
  );
}

