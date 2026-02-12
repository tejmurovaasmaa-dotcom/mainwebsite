"use client";

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-24 bg-luxury-secondary overflow-hidden" id="about">
      <div className="container-custom flex flex-col lg:flex-row items-center gap-20">
        <motion.div 
          className="flex-1 relative h-[550px] w-full group overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image 
            src="/images/project1.png" 
            alt="Modern Architecture" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
          />
          <div className="absolute inset-0 border-[20px] border-white/20 m-6 pointer-events-none"></div>
        </motion.div>
        
        <motion.div 
          className="flex-1 space-y-8"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-4">
            <span className="text-primary uppercase tracking-[3px] font-semibold text-sm">Our Vision</span>
            <h2 className="text-4xl lg:text-5xl font-heading leading-tight text-luxury-accent">Redefining Luxury Living Spaces</h2>
            <p className="text-luxury-textMuted leading-relaxed text-lg">
              At Trust Bridge Group, we don't just sell properties; we curate lifestyles. 
              With over a decade of excellence, we connect discerning clients with 
              architectural masterpieces that stand the test of time.
            </p>
          </div>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {['Trusted Excellence', 'Prime Locations', 'Legal Transparency', 'Client Centric'].map((item) => (
              <li key={item} className="flex items-center gap-4 font-semibold text-luxury-accent">
                <CheckCircle2 className="text-primary shrink-0" size={24} /> 
                {item}
              </li>
            ))}
          </ul>
          <Link href="/projects">
              <button className="btn btn-outline border-2 mt-4 border-primary hover:scale-105 active:scale-95 min-h-[44px]" aria-label="Discover more about Trust Bridge Group">
                Discover More
              </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

