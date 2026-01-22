// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = buildMetadata({
  title: SITE.name,
  description: SITE.description,
  path: "/",
  ogImage: SITE.ogImage,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconnect para mejor performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Optimización de carga */}
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="min-h-dvh bg-zinc-950 text-zinc-100 antialiased" suppressHydrationWarning>
        {/* Background texture sutil - optimizado */}
        <div 
          className="pointer-events-none fixed inset-0 opacity-[0.06]" 
          style={{
            background: `
              radial-gradient(circle at 20% 10%, #ffffff 0, transparent 45%),
              radial-gradient(circle at 80% 20%, #ffffff 0, transparent 40%),
              radial-gradient(circle at 50% 80%, #ffffff 0, transparent 55%)
            `,
            willChange: "auto",
          }}
        />

        {/* Layout principal */}
        <div className="relative flex min-h-screen flex-col">
          {/* Navbar pegado a los bordes */}
          <Navbar />
          
          {/* Contenido con padding y max-width */}
          <div className="mx-auto w-full max-w-[1400px] flex-1 px-4 sm:px-6 lg:px-10">
            <main className="snap-container">
              {children}
            </main>
          </div>
          
          {/* Footer con padding consistente */}
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
