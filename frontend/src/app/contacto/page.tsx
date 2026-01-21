// src/app/contacto/page.tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description: "Solicita información de Torre Azhari. Captura sin fricción.",
  path: "/contacto",
  ogImage: SITE.ogImage,
});

export default function ContactoPage() {
  return (
    <main className="pt-10 sm:pt-14 lg:pt-16">
      <CTA />
      <div className="h-16 sm:h-20 lg:h-24" />
    </main>
  );
}
