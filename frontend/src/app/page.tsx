// src/app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import IntroText from "@/components/sections/IntroText";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import WhyAzhari from "@/components/sections/WhyAzhari";
import BrandCTA from "@/components/sections/BrandCTA";
import Location from "@/components/sections/Location";
import LeadForm from "@/components/sections/LeadForm";

export const metadata: Metadata = {
  title: "Azhari Desarrollos | Desarrollos Inmobiliarios en Aguascalientes",
  description:
    "Desarrollos inmobiliarios que combinan lujo, ubicación y plusvalía. Torre Azhari, AMARA y más proyectos en Aguascalientes.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Azhari Desarrollos | Desarrollos Inmobiliarios en Aguascalientes",
    description:
      "Desarrollos inmobiliarios que combinan lujo, ubicación y plusvalía.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <IntroText />
      <ProjectsPreview />
      <WhyAzhari />
      <BrandCTA />
      <Location />
      <LeadForm />
    </main>
  );
}
