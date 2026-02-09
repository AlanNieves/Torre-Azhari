import AboutAzhari from './components/AboutAzhari';
import LeadForm from '@/shared/LeadForm';

export const metadata = {
  title: 'Sobre Azhari | Azhari Desarrollos',
  description:
    'Conoce la filosofía, visión y propuesta arquitectónica que distingue a Azhari Desarrollos.',
};

export default function SobreAzhariPage() {
  return (
    <main className="bg-[#1e1e1e] text-white">
      {/* About Section */}
      <AboutAzhari />

      {/* Contact Form Section */}
      <LeadForm />
    </main>
  );
}
