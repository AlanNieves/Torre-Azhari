"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

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
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/logos/TorreAzhariLogo.svg"
                  alt="Azhari Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <span className="font-serif text-2xl font-normal tracking-tight text-white">
                  Azhari
                </span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Desarrollos inmobiliarios que combinan visión, calidad y plusvalía. 
              Construimos proyectos pensados para vivir e invertir mejor.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
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

