import AboutAzhari from '@/components/sections/aboutAzhari/AboutAzhari';
import ProjectsPreview from '@/components/sections/ProjectsPreview';
import WhyAzhari from '@/components/sections/WhyAzhari';
import BrandCTA from '@/components/sections/BrandCTA';
import LeadForm from '@/components/forms/LeadForm';

export const metadata = {
  title: 'Sobre Azhari | Azhari Desarrollos',
  description:
    'Conoce la filosofía, visión y propuesta arquitectónica que distingue a Azhari Desarrollos.',
};

export default function SobreAzhariPage() {
  return (
    <main className="bg-[#1c1c1c] text-white">
      {/* 1. HERO / FILOSOFÍA */}
      <AboutAzhari />

      {/* 2. AMENIDADES + MODELOS */}
      <ProjectsPreview />

      {/* 3. DIFERENCIADORES */}
      <WhyAzhari />

      {/* 4. CTA DE MARCA */}
      <BrandCTA />

      {/* 5. FORMULARIO */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
