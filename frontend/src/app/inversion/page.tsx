// src/app/inversion/page.tsx

import type { Metadata } from 'next';
import InversionHero from './components/InversionHero';
import WhyInvest from './components/WhyInvest';
import LeadForm from '@/shared/LeadForm';

export const metadata: Metadata = {
  title: 'Inversión | Azhari Desarrollos',
  description:
    'Invertir con visión es elegir bien desde el inicio. Descubre por qué Azhari es tu mejor opción para invertir en bienes raíces.',
  alternates: {
    canonical: '/inversion',
  },
  openGraph: {
    title: 'Inversión | Azhari Desarrollos',
    description: 'Plusvalía como eje central, inversión flexible y seguridad garantizada.',
    url: '/inversion',
  },
};

export default function InversionPage() {
  return (
    <main className="bg-[#1e1e1e]">
      <InversionHero />
      <WhyInvest />
      <LeadForm />
    </main>
  );
}
