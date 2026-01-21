// src/components/sections/Location.tsx
export default function LocationSection() {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 sm:p-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">UBICACIÓN</p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
          Contexto, acceso y estilo de vida
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="aspect-[16/9] w-full rounded-3xl border border-zinc-800 bg-zinc-950/40" />
            <p className="mt-3 text-sm text-zinc-400">
              Slot para mapa o visual contextual (optimizado).
            </p>
          </div>

          <div className="lg:col-span-5 rounded-3xl border border-zinc-800 bg-zinc-950/30 p-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">PUNTOS CLAVE</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>• Conectividad y accesos</li>
              <li>• Zona premium y servicios</li>
              <li>• Entorno social y cultural</li>
              <li>• Seguridad y calma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
