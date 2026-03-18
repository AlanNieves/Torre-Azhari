// src/components/ui/OptimizedImage.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface OptimizedImageProps {
  src?: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-video",
  priority = false,
  fill = true,
  width,
  height,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-zinc-800/60 via-zinc-900/80 to-zinc-950/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,250,250,0.03),transparent_70%)]" />
        </div>
      )}

      {/* Imagen optimizada con Next.js Image */}
      {src && (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          priority={priority}
          quality={80}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          onLoad={() => setIsLoaded(true)}
          className={`object-cover transition-all duration-700 ${isLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        />
      )}

      {/* Overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/40 to-transparent pointer-events-none"
      />
    </div>
  );
}

