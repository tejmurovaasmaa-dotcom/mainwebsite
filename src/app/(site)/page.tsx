import AboutSection from '../../components/AboutSection';
import ProjectsSection from '../../components/ProjectsSection';
import LocationsSection from '../../components/LocationsSection';
import Testimonials from '../../components/Testimonials';
import ContactSection from '../../components/ContactSection';
import WhatsAppButton from '../../components/WhatsAppButton';


import { lazy, Suspense } from 'react';

const Hero = lazy(() => import('../../components/Hero'));

export default function Home() {
  return (
    <main className="relative">
      <Suspense fallback={<div className="h-screen min-h-[700px] flex items-center justify-center" aria-label="Loading hero section"><div className="text-white text-lg">Loading...</div></div>}>
        <Hero />
      </Suspense>
      <AboutSection />
      <ProjectsSection />
      <LocationsSection />
      <Testimonials />
      
      {/* Short CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container-custom space-y-8">
          <h2 className="font-heading text-3xl lg:text-4xl text-white">
            Experience Luxury Without Limits
          </h2>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Join our exclusive list of property owners today and secure your architectural masterpiece.
          </p>
          <button className="px-10 py-4 bg-white text-primary font-bold uppercase tracking-widest hover:bg-luxury-secondary transition-all hover:shadow-2xl hover:scale-105 active:scale-95 shadow-xl min-h-[44px]" aria-label="Get started with Trust Bridge Group">
            Get Started
          </button>
        </div>
      </section>
      <ContactSection />
      <WhatsAppButton />
    </main>
  );
}
