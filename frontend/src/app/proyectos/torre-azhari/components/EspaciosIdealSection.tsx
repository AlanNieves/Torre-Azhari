"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const departamentos = [
  {
    name: "Zafir",
    size: "105.77 m²",
    tipo: "DEPARTAMENTO",
    image: "/images/designs/01CENTRONORPONIENTE-zafir.png",
    link: "/proyectos/torre-azhari/zafir",
  },
  {
    name: "Sati",
    size: "102.30 m²",
    tipo: "DEPARTAMENTO",
    image: "/images/designs/02CENTRONORORIENTE1-sati.png",
    link: "/proyectos/torre-azhari/sati",
  },
  {
    name: "Nur",
    size: "106.52 m²",
    tipo: "DEPARTAMENTO",
    image: "/images/designs/03NORPONIENTEDEFnur.png",
    link: "/proyectos/torre-azhari/nur",
  },
  {
    name: "Amatista",
    size: "111.40 m²",
    tipo: "DEPARTAMENTO",
    image: "/images/designs/04NORORIENTE-amatista.png",
    link: "/proyectos/torre-azhari/amatista",
  },
  {
    name: "Ambar",
    size: "98.50 m²",
    tipo: "DEPARTAMENTO",
    image: "/images/designs/05SURPONIENTEambar.png",
    link: "/proyectos/torre-azhari/ambar",
  },
  {
    name: "Marfil",
    size: "108.15 m²",
    tipo: "DEPARTAMENTO",
    image: "/images/designs/06SURORIENTEmarfil.png",
    link: "/proyectos/torre-azhari/marfil",
  },
  {
    name: "Opal",
    size: "103.75 m²",
    tipo: "DEPARTAMENTO",
    image: "/images/designs/07CENTROSURPONIENTEopal.png",
    link: "/proyectos/torre-azhari/opal",
  },
  {
    name: "Onix",
    size: "115.20 m²",
    tipo: "DEPARTAMENTO",
    image: "/images/designs/08CENTROSURORIENTEOnix.png",
    link: "/proyectos/torre-azhari/onix",
  },
  {
    name: "Zenith",
    size: "187.40 m²",
    tipo: "PENTHOUSE",
    image: "/images/designs/PHSURPONIENTE-zenith1.png",
    link: "/proyectos/torre-azhari/zenith",
  },
];

export default function EspaciosIdealSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Desktop always shows 2.5 cards — same as original
  const CARDS_VISIBLE = 2.5;
  const N = departamentos.length;

  // Mobile: 1 card + peek (1.1). Track width and card width change via state.
  const [cardsVisible, setCardsVisible] = useState(CARDS_VISIBLE);
  const isMobile = cardsVisible < 2;
  const maxIndexForDevice = N - Math.floor(cardsVisible);

  useEffect(() => {
    const update = () => {
      setCardsVisible(window.innerWidth < 640 ? 1.1 : CARDS_VISIBLE);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Reset index when switching between mobile/desktop
  useEffect(() => {
    scrollTo(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsVisible]);

  const scrollTo = useCallback(
    (index: number) => {
      const max = N - Math.floor(cardsVisible);
      const clamped = Math.max(0, Math.min(index, max));
      setCurrentIndex(clamped);
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${clamped * (100 / N)}%)`;
      }
    },
    [N, cardsVisible]
  );

  const prev = () => scrollTo(currentIndex - 1);
  const next = () => scrollTo(currentIndex + 1);

  // Touch swipe — mobile only, harmless on desktop
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section className="bg-[#1e1e1e] py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Modelos
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight text-white lg:text-5xl">
              Encuentra tu
              <br />
              espacio ideal
            </h2>
          </div>

          {/* Navigation arrows — desktop only */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndexForDevice}
              aria-label="Siguiente"
              className="flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Carousel viewport */}
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${(N / cardsVisible) * 100}%` }}
          >
            {departamentos.map((depto, index) => (
              <div
                key={index}
                style={{ width: `${100 / N}%` }}
                className="flex-shrink-0 pr-5"
              >
                <Link href={depto.link} className="group block bg-[#242424]">
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#c8c8c8]">
                    <Image
                      src={depto.image}
                      alt={`Departamento ${depto.name}`}
                      fill
                      sizes="(max-width: 768px) 90vw, 38vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Card content */}
                  <div className="px-5 pb-7 pt-5">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                      {depto.tipo}
                    </p>
                    <h3 className="mb-4 font-serif text-3xl font-light text-white lg:text-4xl">
                      {depto.name}
                    </h3>
                    <div className="mb-4 h-px w-full bg-white/15" />
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                      Área
                    </p>
                    <p className="mb-6 font-serif text-xl font-light text-white">
                      {depto.size}
                    </p>
                    <span className="text-sm font-light text-white/70 underline-offset-4 transition-colors group-hover:text-white">
                      Solicitar información
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators — mobile only */}
        {isMobile && (
          <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
            {departamentos.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Ir a ${departamentos[i].name}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}