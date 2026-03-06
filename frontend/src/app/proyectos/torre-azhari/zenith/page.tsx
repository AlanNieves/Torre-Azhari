import type { Metadata } from "next";
import ZenithHero from "./components/ZenithHero";
import ZenithSpecifications from "./components/ZenithSpecifications";
import ZenithGallery from "./components/ZenithGallery";
import ZenithFloatingCTA from "./components/ZenithFloatingCTA";
import LeadForm from "@/shared/LeadForm";

export const metadata: Metadata = {
  title: "Penthouse Zenith | Torre Azhari",
  description:
    "Penthouse Zenith de 187.40 m² en Torre Azhari. El nivel más alto de lujo con terraza panorámica, 3 recámaras y acabados exclusivos en Aguascalientes.",
  alternates: {
    canonical: "/proyectos/torre-azhari/zenith",
  },
  openGraph: {
    title: "Penthouse Zenith | Torre Azhari",
    description:
      "Penthouse exclusivo de 187.40 m² con 3 recámaras, 3 baños y terraza panorámica privada. El máximo nivel de Torre Azhari.",
    url: "/proyectos/torre-azhari/zenith",
  },
};

export default function ZenithPage() {
  return (
    <main className="bg-[#1e1e1e]">
      <ZenithHero />
      <ZenithSpecifications />
      <ZenithGallery />
      <div id="contacto">
        <LeadForm />
      </div>
      <ZenithFloatingCTA />
    </main>
  );
}
