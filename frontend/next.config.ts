import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimizaciones de performance
  reactStrictMode: true,
  
  // Compresión y optimización
  compress: true,
  
  // Output para hosting tradicional como Hostinger
  output: "standalone",
  
  // Suprimir warnings de hidratación causados por extensiones del navegador
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },

  // Optimización de imágenes
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80],
    minimumCacheTTL: 31536000, // 1 año - contenido inmobiliario es relativamente estático
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
  },
  
  // Headers de seguridad y performance
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // Caché agresivo para imágenes
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 año
          },
        ],
      },
      // Caché agresivo para logos
      {
        source: "/logos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 año
          },
        ],
      },
      // Caché para archivos compilados de Next.js
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 año
          },
        ],
      },
    ];
  },
  
  // Experimental features para mejor performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
