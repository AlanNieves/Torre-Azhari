// src/app/departamentos/page.tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Departamentos",
  description: "Tipologías y unidades destacadas de Torre Azhari.",
  path: "/departamentos",
  ogImage: SITE.ogImage,
});

export default function DepartamentosPage() {
  return (
    <main className="pt-10 sm:pt-14 lg:pt-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">DEPARTAMENTOS</p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
          Tipologías con intención
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-300">
          Página preparada para tipologías, rangos, planos y módulos editoriales.
        </p>
      </header>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        {["Tipo A", "Tipo B", "Penthouse"].map((t) => (
          <div
            key={t}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 sm:p-8"
          >
            <h2 className="font-serif text-2xl tracking-tight">{t}</h2>
            <p className="mt-3 text-zinc-300">
              Módulo listo para datos reales (m², recámaras, balcón, etc).
            </p>
          </div>
        ))}
      </section>

      <div className="h-16 sm:h-20 lg:h-24" />
    </main>
  );
}
