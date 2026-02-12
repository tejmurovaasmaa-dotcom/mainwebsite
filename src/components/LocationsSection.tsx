"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const locations = [
  {
    id: 1,
    title: "Noida",
    slug: "noida",
    desc: "Luxury Hub of Northern India",
    image: "/images/noida.png",
    from: -100
  },
  {
    id: 2,
    title: "Greater Noida",
    slug: "greater-noida",
    desc: "Planned Urban Excellence",
    image: "/images/gnoida.png",
    from: 100
  },
  {
    id: 3,
    title: "Yamuna Expressway",
    slug: "yamuna-expressway",
    desc: "The Future of Connectivity",
    image: "/images/yamuna.png",
    from: -100
  }
];

export default function LocationsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        
        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-primary uppercase tracking-[3px] font-semibold text-sm">
            Explore Locations
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading text-luxury-accent">
            Prime Investment Zones
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, index) => (
            <Link href={`/projects/${loc.slug}`} key={loc.slug}>
              <motion.div
                initial={{
                  opacity: 0,
                  x: index === 0 ? -120 : index === 2 ? 120 : 0,
                  y: index === 1 ? 120 : 0
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.9,
                  ease: "easeOut",
                  delay: index * 0.15
                }}
                className="relative h-[450px] overflow-hidden group cursor-pointer shadow-lg rounded-sm"
              >
                <Image
                  src={loc.image}
                  alt={loc.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 transition-colors group-hover:from-black/100">
                  <h3 className="font-heading text-3xl text-white mb-2 group-hover:-translate-y-2 transition-transform">
                    {loc.title}
                  </h3>
                  <p className="text-white/80 text-xs uppercase tracking-[2px] group-hover:-translate-y-2 transition-transform delay-75">
                    {loc.desc}
                  </p>
                  <div className="w-12 h-1 bg-primary mt-6 transition-all duration-300 group-hover:w-full"></div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
