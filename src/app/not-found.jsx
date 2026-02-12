"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function NotFound() {
  const [stars, setStars] = useState([]);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const containerRef = useRef(null);
  
  // Motion values for the astronaut's position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the rope end point to give it an elastic feel
  const springX = useSpring(x, { stiffness: 200, damping: 1 });
  const springY = useSpring(y, { stiffness: 200, damping: 1 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setStars(newStars);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Path calculation for the rope
  const ropePath = useTransform(
    [springX, springY],
    ([latestX, latestY]) => {
      const startX = 0;
      const startY = 0;
      
      const centerX = windowSize.width / 2;
      const centerY = windowSize.height / 2;
      
      // Target point is the astronaut (roughly at center + offset)
      // We point it slightly to the side of the center to match where a tether might attach
      const targetX = centerX + latestX - 20; 
      const targetY = centerY + latestY - 80;
      
      // Create a curve that sags or stretches
      const controlX = targetX * 0.3;
      const controlY = targetY * 0.7;
      
      return `M ${startX} ${startY} Q ${controlX} ${controlY} ${targetX} ${targetY}`;
    }
  );

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-[1001] flex flex-col items-center justify-center overflow-hidden bg-[#050505] font-body"
    >
      {/* Stars Background */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: "0 0 10px white",
            }}
          />
        ))}
      </div>

      {/* <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Shadow rope for depth */}
        <motion.path
          fill="none"
          stroke="rgba(0,0,0,0.5)"
          strokeWidth="6"
          d={ropePath}
        />
        
        {/* Main tether rope */}
        <motion.path
          fill="none"
          stroke="#555"
          strokeWidth="3"
          d={ropePath}
          style={{ filter: "url(#glow)" }}
        />
        
        {/* Connection point dot at top-left */}
        <circle cx="0" cy="0" r="6" fill="#D4AF37" />
      {/* </svg>} */}

      {/* Floating & Draggable Astronaut */}
      <motion.div
        drag
        dragSnapToOrigin
        dragElastic={0.4}
        dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
        style={{ x, y }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1,
          scale: 1,
          rotate: [0, 5, -5, 0],
        }}
        transition={{ 
          rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 1 },
          scale: { duration: 1 }
        }}
        className="relative z-20 cursor-grab active:cursor-grabbing select-none"
      >
        <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] flex items-center justify-center">
          <Image 
            src="/astronaut.svg" 
            alt="Floating Astronaut" 
            fill 
            className="object-contain pointer-events-none drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            priority
          />
          {/* Subtle glow behind astronaut to blend with space */}
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-[120px] -z-10" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-30 text-center mt-4 px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="bg-[#0a0a0a]/40 backdrop-blur-3xl p-12 rounded-[3rem] border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.3)] space-y-8 max-w-lg mx-auto pointer-events-auto"
        >
          <div className="space-y-2">
            <h1 className="text-8xl font-black font-heading text-white tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/20">
              404
            </h1>
            <h2 className="text-xl font-medium text-primary tracking-[0.3em] uppercase">
              We have a problem
            </h2>
          </div>
          
          <p className="text-luxury-cream/70 text-lg leading-relaxed font-light">
            The page you're searching for has drifted into deep space. 
            <span className="block text-sm italic mt-4 opacity-40">
              Tip: Pull the astronaut to stretch the tether!
            </span>
          </p>

          <Link 
            href="/" 
            className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-black font-bold uppercase tracking-widest hover:text-white transition-all duration-700 overflow-hidden rounded-full"
          >
            <span className="relative z-10 font-bold">Initiate Return</span>
            <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </motion.div>
      </div>

      {/* Background radial gradient for depth */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0" />
    </div>
  );
}
