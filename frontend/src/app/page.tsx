// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Gallery from "@/components/sections/Gallery";
import LocationSection from "@/components/sections/Location";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <Benefits />
      <Gallery />
      <LocationSection />
      <CTA />
    </main>
  );
}
