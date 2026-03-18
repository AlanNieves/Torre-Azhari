// src/app/contacto/page.tsx

import type { Metadata } from 'next';
import ContactHero from './components/ContactHero';

export const metadata: Metadata = {
  title: 'Contacto | Azhari Desarrollos',
  description:
    'Conversemos sobre tu próxima inversión. Contáctanos para recibir información personalizada sobre nuestros proyectos inmobiliarios.',
  alternates: {
    canonical: '/contacto',
  },
  openGraph: {
    title: 'Contacto | Azhari Desarrollos',
    description: 'Agenda una cita y conoce más sobre nuestros desarrollos inmobiliarios.',
    url: '/contacto',
  },
};

export default function ContactoPage() {
  return (
    <main className="bg-[#1e1e1e]">
      <ContactHero />
    </main>
  );
}

