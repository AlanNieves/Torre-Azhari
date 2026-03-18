// src/app/page.tsx
import type { Metadata } from "next";
import Hero from "./homepage/components/Hero";
import IntroText from "./homepage/components/IntroText";
import ProjectsPreview from "@/shared/ProjectsPreview";
import WhyAzhari from "./homepage/components/WhyAzhari";
import BrandCTA from "./homepage/components/BrandCTA";
import Location from "./homepage/components/Location";
import LeadForm from "@/shared/LeadForm";

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

