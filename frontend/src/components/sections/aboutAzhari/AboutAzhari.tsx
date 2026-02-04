'use client';

import AboutImage from './AboutImage';
import AboutText from './AboutText';
import AboutSignature from './AboutSignature';

export default function AboutAzhari() {
  return (
    <section
      id="about-azhari"
      className="relative w-full bg-[#1c1c1c] py-24 overflow-hidden"
    >
      {/* CONTENIDO SUPERIOR */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          
          {/* TÍTULO IZQUIERDA */}
          <div>
            <p className="text-xs tracking-[0.3em] text-white/50 mb-4">
              SOBRE AZHARI
            </p>

            <h1
              className="
                text-[38px] md:text-[42px]
                font-normal
                tracking-[-0.01em]
                text-white/90
              "
            >
              Torre Azhari
            </h1>
          </div>

          {/* TEXTO DERECHA */}
          <AboutText />
        </div>
      </div>

      {/* IMAGEN */}
      <div className="mt-20">
        <AboutImage />
      </div>

      {/* FIRMA DE MARCA */}
      <AboutSignature />
    </section>
  );
}
