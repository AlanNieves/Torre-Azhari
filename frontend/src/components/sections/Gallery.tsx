// src/components/sections/Gallery.tsx
export default function Gallery() {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24">
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">GALERÍA</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
            Visuales como narrativa
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300">
            Este bloque está listo para integrar imágenes optimizadas (Next/Image) con grid editorial.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="aspect-[4/5] rounded-3xl border border-zinc-800 bg-zinc-900/20" />
            <div className="aspect-[4/5] rounded-3xl border border-zinc-800 bg-zinc-900/20" />
            <div className="aspect-[16/9] rounded-3xl border border-zinc-800 bg-zinc-900/20 sm:col-span-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
