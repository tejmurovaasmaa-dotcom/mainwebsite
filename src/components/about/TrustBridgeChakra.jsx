"use client";

import Image from "next/image";
import { Building2, Home, MapPin } from "lucide-react";

export default function TrustBridgeChakra() {
  const branches = [
    {
      angle: -60,
      gradient: "from-blue-400 to-blue-600",
      icon: Home,
      label: "Residential Properties",
      iconBg: "bg-blue-500",
    },
    {
      angle: 0,
      gradient: "from-purple-400 to-purple-600",
      icon: Building2,
      label: "Commercial Spaces",
      iconBg: "bg-purple-500",
    },
    {
      angle: 60,
      gradient: "from-green-400 to-green-600",
      icon: MapPin,
      label: "Premium Plots",
      iconBg: "bg-green-500",
    },
    {
      angle: 120,
      gradient: "from-orange-400 to-orange-600",
      icon: Building2,
      label: "Investment Opportunities",
      iconBg: "bg-orange-500",
    },
    {
      angle: 180,
      gradient: "from-red-400 to-red-600",
      icon: Home,
      label: "Luxury Villas",
      iconBg: "bg-red-500",
    },
    {
      angle: -120,
      gradient: "from-teal-400 to-teal-600",
      icon: MapPin,
      label: "Strategic Locations",
      iconBg: "bg-teal-500",
    },
  ];

  return (
    <section className="py-8 bg-luxury-cream overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-primary">
            Our Expertise
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto">
            Trust Bridge Group offers comprehensive real estate solutions across multiple sectors
          </p>
        </div>

        <div className="relative flex items-center justify-center w-full min-h-[700px]">
          {/* SVG for curved lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <defs>
              {branches.map((branch, index) => (
                <linearGradient
                  key={index}
                  id={`gradient-${index}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" className={branch.gradient.split(' ')[0].replace('from-', '')} stopOpacity="0.3" />
                  <stop offset="100%" className={branch.gradient.split(' ')[1].replace('to-', '')} stopOpacity="0.8" />
                </linearGradient>
              ))}
            </defs>
          </svg>

          {/* Center Logo */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
            <div className="relative flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="Trust Bridge Group"
                width={150}
                height={150}
                priority
                className="object-contain"
              />
              {/* Pulse animation */}
              <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20" />
            </div>
          </div>

          {/* Branches */}
          {branches.map((branch, index) => (
            <Branch
              key={index}
              angle={branch.angle}
              gradient={branch.gradient}
              icon={branch.icon}
              label={branch.label}
              iconBg={branch.iconBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Branch({ angle, gradient, icon: Icon, label, iconBg }) {
  const radius = 280; // Distance from center
  const angleRad = (angle * Math.PI) / 180;
  const x = Math.cos(angleRad) * radius;
  const y = Math.sin(angleRad) * radius;

  return (
    <div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        zIndex: 5,
      }}
    >
      {/* Curved line using SVG */}
      <svg
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          top: "50%",
          width: Math.abs(x) + 100,
          height: Math.abs(y) + 100,
          transform: `translate(${x > 0 ? "-100%" : "0%"}, ${y > 0 ? "-100%" : "0%"})`,
        }}
      >
        <path
          d={`M ${x > 0 ? Math.abs(x) + 50 : 50} ${y > 0 ? Math.abs(y) + 50 : 50} Q ${
            x > 0 ? Math.abs(x) / 2 + 50 : 50 - Math.abs(x) / 2
          } ${y > 0 ? Math.abs(y) / 2 + 50 : 50 - Math.abs(y) / 2} ${x > 0 ? 50 : Math.abs(x) + 50} ${
            y > 0 ? 50 : Math.abs(y) + 50
          }`}
          stroke="url(#gradient)"
          strokeWidth="3"
          fill="none"
          className="opacity-40"
        />
      </svg>

      {/* Icon circle */}
      <div
        className={`relative w-16 h-16 rounded-full ${iconBg} flex items-center justify-center shadow-lg group hover:scale-100 transition-transform duration-300 cursor-pointer`}
      >
        <Icon size={28} className="text-white" />
      </div>

      {/* Label */}
      <div
        className="absolute whitespace-nowrap bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-gray-100 text-sm font-semibold text-luxury-accent"
        style={{
          left: x > 0 ? "calc(100% + 12px)" : "auto",
          right: x < 0 ? "calc(100% + 12px)" : "auto",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
