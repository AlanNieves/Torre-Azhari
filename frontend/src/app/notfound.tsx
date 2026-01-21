// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-14 sm:pt-16 lg:pt-20">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-8 sm:p-10">
        <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">404</p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          Esta ruta no existe. Regresa al inicio y continúa la experiencia.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:opacity-90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
