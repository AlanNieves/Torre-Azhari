// src/components/sections/Gallery.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  { id: 1, aspect: "aspect-[4/5]", col: "col-span-1" },
  { id: 2, aspect: "aspect-[3/4]", col: "col-span-1" },
  { id: 3, aspect: "aspect-[16/9]", col: "col-span-2" },
  { id: 4, aspect: "aspect-[1/1]", col: "col-span-1" },
  { id: 5, aspect: "aspect-[4/3]", col: "col-span-1" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function GalleryItem({ image }: { image: typeof images[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className={`group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20 ${image.col}`}
    >
      <motion.div
        style={{ y }}
        className={`${image.aspect} w-full bg-gradient-to-br from-zinc-800/60 via-zinc-900/80 to-zinc-950/90 transition-all duration-700 group-hover:scale-110`}
      >
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,250,250,0.03),transparent_70%)]" />
        
        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-center justify-center bg-zinc-950/60 backdrop-blur-sm"
        >
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">
              VER IMAGEN
            </p>
            <p className="mt-1 text-sm text-zinc-400">Imagen {image.id}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Social badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-950/80 px-3 py-1.5 backdrop-blur-sm"
      >
        <svg className="h-3.5 w-3.5 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
        <span className="text-xs font-medium text-zinc-300">@torreazhari</span>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300">GALERÍA SOCIAL</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Visuales como narrativa
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300">
            Cada imagen cuenta una historia. Grid asimétrico con ritmo visual y 
            animaciones que revelan el carácter único de Torre Azhari.
          </p>

          {/* Social stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <div>
              <p className="font-serif text-2xl">12K</p>
              <p className="mt-1 text-xs text-zinc-400">Seguidores</p>
            </div>
            <div>
              <p className="font-serif text-2xl">850</p>
              <p className="mt-1 text-xs text-zinc-400">Posts</p>
            </div>
            <div>
              <p className="font-serif text-2xl">4.8</p>
              <p className="mt-1 text-xs text-zinc-400">Rating</p>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-7">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {images.map((image) => (
              <GalleryItem key={image.id} image={image} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
