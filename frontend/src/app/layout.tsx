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
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = buildMetadata({
  title: SITE.name,
  description: SITE.description,
  path: "/",
  ogImage: SITE.ogImage,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-dvh bg-zinc-950 text-zinc-100 antialiased">
        {/* Background texture sutil */}
        <div className="pointer-events-none fixed inset-0 opacity-[0.06] [background:radial-gradient(circle_at_20%_10%,#ffffff_0,transparent_45%),radial-gradient(circle_at_80%_20%,#ffffff_0,transparent_40%),radial-gradient(circle_at_50%_80%,#ffffff_0,transparent_55%)]" />

        {/* Wrapper editorial */}
        <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
