import Image from 'next/image';
import { Award, Shield, CheckCircle } from 'lucide-react';

interface Certification {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const certifications: Certification[] = [
  {
    title: 'Licensed Real Estate Consultant',
    description: 'Fully licensed and certified to provide real estate consulting services with adherence to all regulatory standards.',
    icon: <Shield className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Industry Recognition',
    description: 'Recognized by leading real estate developers and builders for excellence in property consulting and client service.',
    icon: <Award className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Quality Assurance',
    description: 'Committed to maintaining the highest standards of quality, transparency, and ethical practices in all our dealings.',
    icon: <CheckCircle className="w-12 h-12 text-primary" />,
  },
];

export default function Certification() {
  return (
    <section className="section-padding bg-gradient-to-b from-luxury-cream to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading mb-6 text-luxury-accent">
            Our Certifications & Standards
          </h2>
          <p className="text-lg text-luxury-textMuted max-w-3xl mx-auto leading-relaxed">
            Trust Bridge Group is committed to maintaining the highest standards of professionalism, ethics, and service excellence. Our certifications and industry recognitions reflect our dedication to quality and trustworthiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                {cert.icon}
              </div>
              <h3 className="text-2xl font-heading mb-4 text-luxury-accent text-center">
                {cert.title}
              </h3>
              <p className="text-luxury-textMuted leading-relaxed text-center">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


