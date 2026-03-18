import type { Metadata } from "next";
import AmbarHero from "./components/AmbarHero";
import AmbarSpecifications from "./components/AmbarSpecifications";
import AmbarGallery from "./components/AmbarGallery";
import AmbarFloatingCTA from "./components/AmbarFloatingCTA";
import LeadForm from "@/shared/LeadForm";

export const metadata: Metadata = {
  title: "Departamento Ambar | Torre Azhari",
  description:
    "Departamento Ambar de 98.50 m² en Torre Azhari. Diseño contemporáneo, acabados premium y vistas panorámicas en el corazón de Aguascalientes.",
  alternates: {
    canonical: "/proyectos/torre-azhari/ambar",
  },
  openGraph: {
    title: "Departamento Ambar | Torre Azhari",
    description:
      "Espacios elegantes de 98.50 m² con 2 recámaras, 2 baños y terraza privada. Acabados de lujo y ubicación privilegiada.",
    url: "/proyectos/torre-azhari/ambar",
  },
};

export default function AmbarPage() {
  return (
    <main className="bg-[#1e1e1e]">
      <AmbarHero />
      <AmbarSpecifications />
      <AmbarGallery />
      <div id="contacto">
        <LeadForm />
      </div>
      <AmbarFloatingCTA />
    </main>
  );
}

