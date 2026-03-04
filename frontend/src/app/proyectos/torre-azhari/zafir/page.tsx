import type { Metadata } from "next";
import ZafirHero from "./components/ZafirHero";
import ZafirSpecifications from "./components/ZafirSpecifications";
import ZafirGallery from "./components/ZafirGallery";
import ZafirFloatingCTA from "./components/ZafirFloatingCTA";
import LeadForm from "@/shared/LeadForm";

export const metadata: Metadata = {
  title: "Departamento Zafir | Torre Azhari",
  description:
    "Departamento Zafir de 105.77 m² en Torre Azhari. Diseño contemporáneo, acabados premium y vistas panorámicas en el corazón de Aguascalientes.",
  alternates: {
    canonical: "/proyectos/torre-azhari/zafir",
  },
  openGraph: {
    title: "Departamento Zafir | Torre Azhari",
    description:
      "Espacios elegantes de 105.77 m² con 2 recámaras, 2 baños y terraza privada. Acabados de lujo y ubicación privilegiada.",
    url: "/proyectos/torre-azhari/zafir",
  },
};

export default function ZafirPage() {
  return (
    <main className="bg-[#1e1e1e]">
      <ZafirHero />
      <ZafirSpecifications />
      <ZafirGallery />
      <div id="contacto">
        <LeadForm />
      </div>
      <ZafirFloatingCTA />
    </main>
  );
}