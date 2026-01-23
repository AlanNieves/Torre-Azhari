// src/components/layout/Navbar.tsx
"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { NAV } from "@/lib/constants";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      x: "0%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <>
      {/* Minimal Fixed Header with Backdrop */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
          backgroundColor: isScrolled ? "rgba(245, 241, 232, 0.95)" : "rgba(245, 241, 232, 0)"
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 z-50 w-full backdrop-blur-md"
        style={{
          borderBottom: isScrolled ? "1px solid rgba(42, 37, 32, 0.1)" : "none"
        }}
      >
        <nav className="mx-auto flex h-20 w-full items-center justify-between px-6 sm:px-10 lg:px-16">
          {/* Logo + Texto */}
          <motion.a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className="group relative flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            suppressHydrationWarning
          >
            <img 
              src="/logos/TorreAzhariLogo.svg" 
              alt="Torre Azhari Logo"
              className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-80 lg:h-12"
            />
            <span className="font-serif text-2xl tracking-tight text-[#2A2520] lg:text-3xl">
              Azhari
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#6B7456] transition-all duration-500 group-hover:w-full"
            />
          </motion.a>

          {/* Hamburger Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#2A2520] text-[#F5F1E8] transition-colors hover:bg-[#6B7456]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </motion.header>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-[#2A2520]/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed right-0 top-0 z-40 h-full w-full max-w-md bg-[#F5F1E8] shadow-2xl sm:max-w-lg"
            >
              <div className="flex h-full flex-col justify-center px-8 py-20 sm:px-12">
                {/* Navigation Links */}
                <nav className="space-y-6">
                  {NAV.map((item, i) => (
                    <motion.div
                      key={item.href}
                      custom={i}
                      variants={linkVariants}
                      className="overflow-hidden"
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleClick(e, item.href)}
                        className="group block font-serif text-4xl font-light tracking-tight text-[#2A2520] transition-colors hover:text-[#6B7456] sm:text-5xl"
                      >
                        <motion.span
                          className="inline-block"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.label}
                        </motion.span>
                      </a>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="mt-12 border-t border-[#2A2520]/10 pt-8"
                >
                  <p className="mb-3 text-xs tracking-[0.2em] text-[#5C564F]">
                    CONTÁCTANOS
                  </p>
                  <a
                    href="mailto:info@torreazhari.com"
                    className="text-sm text-[#6B7456] hover:underline"
                  >
                    info@torreazhari.com
                  </a>
                </motion.div>

                {/* Decorative Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-0 left-0 h-[1px] w-full origin-left bg-gradient-to-r from-[#6B7456]/30 via-[#6B7456]/30 to-transparent"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
