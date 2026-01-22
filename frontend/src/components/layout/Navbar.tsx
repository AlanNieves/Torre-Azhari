// src/components/layout/Navbar.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { NAV } from "@/lib/constants";
import { useEffect, useState } from "react";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(9, 9, 11, 0.6)", "rgba(9, 9, 11, 0.85)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 50], [0.6, 0.8]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 20);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Detectar sección activa basada en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#hero", "#proyecto", "#departamentos", "#ubicacion", "#contacto"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const { offsetTop, offsetHeight } = element as HTMLElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      style={{
        backgroundColor,
      }}
      className="sticky top-0 z-50 w-full border-b border-zinc-800/60 backdrop-blur-xl transition-all duration-300"
    >
      <nav className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* 
          Logo + Texto
          
          Estructura: Logo SVG + "Torre Azhari" (sin "PREMIUM")
          Ubicación logo: /public/logos/TorreAzhariLogo.svg
          
          Nota: brightness-0 invert hace que el logo negro se vuelva blanco
          para que sea visible en el fondo oscuro
        */}
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className="group inline-flex items-center gap-3"
        >
          <img 
            src="/logos/TorreAzhariLogo.svg" 
            alt="Torre Azhari Logo"
            className="h-8 w-auto brightness-0 invert transition-opacity duration-300 group-hover:opacity-80"
          />
          <span className="font-serif text-xl tracking-tight transition-colors duration-300 group-hover:text-zinc-100">
            Torre Azhari
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV.slice(0, -1).map((item) => {
            const active = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cx(
                  "rounded-full px-4 py-2 text-sm transition-all duration-300",
                  active
                    ? "bg-zinc-100 text-zinc-950 shadow-lg shadow-zinc-100/10"
                    : "text-zinc-300 hover:bg-zinc-900/80 hover:text-zinc-100"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <a
          href={NAV[NAV.length - 1].href}
          onClick={(e) => handleClick(e, NAV[NAV.length - 1].href)}
          className={cx(
            "rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 transition-all duration-300 hover:scale-105 hover:border-zinc-600 hover:bg-zinc-900 hover:shadow-lg active:scale-95",
            isScrolled && "bg-zinc-900/60"
          )}
        >
          {NAV[NAV.length - 1].label}
        </a>
      </nav>

      {/* Mobile Menu Indicator */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ borderColor: `rgba(113, 113, 122, ${borderOpacity})` }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-transparent via-zinc-700 to-transparent"
      />
    </motion.header>
  );
}
