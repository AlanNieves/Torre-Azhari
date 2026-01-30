"use client";

import Link from "next/link";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Sobre Azhari", href: "/sobre-azhari" },
  { label: "Inversión", href: "/inversion" },
  { label: "Contacto", href: "/contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand Column */}
          <div>
            <div className="mb-4 font-serif text-2xl text-white">
              Azhari
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Desarrollos inmobiliarios que combinan visión, calidad y plusvalía. 
              Construimos proyectos pensados para vivir mejor.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <p className="mb-4 text-xs font-light tracking-widest text-white">
              NAVEGACIÓN
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <p className="mb-4 text-xs font-light tracking-widest text-white">
              CONTACTO
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Aguascalientes, Ags.</p>
              <a
                href="mailto:contacto@azharidesarrollos.com"
                className="block transition-colors hover:text-white"
              >
                contacto@azharidesarrollos.com
              </a>
              <a
                href="tel:+524491234567"
                className="block transition-colors hover:text-white"
              >
                +52 449 123 4567
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 lg:flex-row">
          <p>© 2026 Azhari Desarrollos. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/aviso-privacidad" className="transition-colors hover:text-white">
              Aviso de privacidad
            </Link>
            <Link href="/terminos" className="transition-colors hover:text-white">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
