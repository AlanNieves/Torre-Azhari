// src/app/ubicacion/page.tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Ubicación en Aguascalientes | Torre Azhari",
  description:
    "Conoce la ubicación de Torre Azhari en Aguascalientes. Contexto urbano, conectividad y entorno pensado para vivir con calidad y acceso a lo esencial.",
  path: "/ubicacion",
  ogImage: SITE.ogImage,
});

export default function UbicacionPage() {
  return (
    <main className="pt-10 sm:pt-14 lg:pt-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">
          UBICACIÓN
        </p>

        <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
          Ubicación de Torre Azhari en Aguascalientes
        </h1>

        <p className="mt-4 text-base leading-relaxed text-zinc-300">
          Torre Azhari se ubica en una zona estratégica de Aguascalientes,
          conectada con los principales accesos, servicios y espacios que
          definen la vida urbana contemporánea.
        </p>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400">
          Vivir en esta zona de Aguascalientes significa cercanía, seguridad y
          una planeación urbana pensada para el día a día, la movilidad y el
          bienestar.
        </p>
      </header>

      <section className="mt-10 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7 rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 sm:p-8">
          <h2 className="font-serif text-2xl tracking-tight">Mapa de ubicación</h2>
          <p className="mt-3 text-zinc-300">
            Referencia visual de la ubicación de Torre Azhari dentro de
            Aguascalientes.
          </p>
          <div className="mt-6 aspect-video w-full rounded-2xl border border-zinc-800 bg-zinc-950/40" />
        </div>

        <div className="lg:col-span-5 rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 sm:p-8">
          <h3 className="font-serif text-xl tracking-tight">Contexto urbano</h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li>• Conectividad vial</li>
            <li>• Vida social y servicios</li>
            <li>• Seguridad y entorno</li>
            <li>• Accesos estratégicos</li>
          </ul>
        </div>
      </section>

      <div className="h-16 sm:h-20 lg:h-24" />
    </main>
  );
}
