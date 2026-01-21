// src/components/layout/Footer.tsx
import Link from "next/link";
import { SITE, NAV } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800/60 py-10 sm:mt-20 lg:mt-24">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-serif text-2xl tracking-tight">{SITE.name}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
            {SITE.description}
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">
                NAVEGACIÓN
              </p>
              <ul className="mt-3 space-y-2">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link className="text-sm text-zinc-400 hover:text-zinc-100" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">
                CONTACTO
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li>{SITE.city}</li>
                <li>{SITE.email}</li>
                <li>{SITE.phone}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-10 text-xs text-zinc-500">
        © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
