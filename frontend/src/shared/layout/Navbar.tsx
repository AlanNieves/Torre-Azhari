"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "INICIO", href: "/" },
  { label: "PROYECTOS", href: "/proyectos" },
  { label: "SOBRE AZHARI", href: "/sobre-azhari" },
  { label: "INVERSIÓN", href: "/inversion" },
  { label: "CONTACTO", href: "/contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]
  );

  return (
    <motion.header
      style={{ backgroundColor }}
      className="fixed top-0 z-50 w-full backdrop-blur-sm transition-all duration-300"
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo con imagen y texto */}
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/logos/TorreAzhariLogo.svg" 
            alt="Azhari Logo"
            className="h-14 w-14 object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <span className="font-serif text-2xl font-normal tracking-tight text-white group-hover:opacity-80 transition-opacity">
            Azhari
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-12 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-2"
              >
                <span className={`text-xs font-medium tracking-widest uppercase transition-opacity ${
                  isActive ? 'text-white' : 'text-white/90 hover:text-white'
                }`}>
                  {link.label}
                </span>
                {/* Línea indicadora */}
                <span 
                  className={`absolute -bottom-1 left-0 h-[2px] bg-white transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}
