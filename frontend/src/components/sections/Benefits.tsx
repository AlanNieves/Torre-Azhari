// src/components/sections/Benefits.tsx
const items = [
  { title: "Calma editorial", desc: "Jerarquía clara, aire y ritmo visual." },
  { title: "Arquitectura premium", desc: "Lenguaje sobrio, contemporáneo y sólido." },
  { title: "Conversión sin fricción", desc: "CTA limpio y directo a leads." },
];

export default function Benefits() {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 sm:p-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">ENFOQUE</p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
          Experiencia por encima del ruido
        </h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950/30 p-6"
            >
              <p className="font-serif text-xl tracking-tight">{it.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
