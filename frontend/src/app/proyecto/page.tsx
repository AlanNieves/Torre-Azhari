// src/app/proyecto/page.tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Proyecto",
  description: "Concepto, visión arquitectónica y narrativa editorial de Torre Azhari.",
  path: "/proyecto",
  ogImage: SITE.ogImage,
});

export default function ProyectoPage() {
  return (
    <main className="pt-10 sm:pt-14 lg:pt-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">PROYECTO</p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
          Una experiencia que se siente bien
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-300">
          Torre Azhari no compite por volumen de información, compite por percepción.
          Este espacio está listo para integrar contenido editorial definitivo.
        </p>
      </header>

      <section className="mt-10 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7 rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 sm:p-8">
          <h2 className="font-serif text-2xl tracking-tight">Arquitectura contemporánea</h2>
          <p className="mt-3 text-zinc-300">
            Narrativa visual, blancos controlados y tipografía editorial.
          </p>
        </div>
        <div className="lg:col-span-5 rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 sm:p-8">
          <h3 className="font-serif text-xl tracking-tight">Materialidad</h3>
          <p className="mt-3 text-zinc-300">
            Espacio reservado para render/galería del proyecto.
          </p>
        </div>
      </section>

      <div className="h-16 sm:h-20 lg:h-24" />
    </main>
  );
}
