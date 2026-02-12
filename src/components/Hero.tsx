import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import StatsSection  from './StatsSection';   


export default function Hero() {
  return (
    <section className="relative w-screen h-screen  min-h-[700px] flex items-center justify-center text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute w-full h-full inset-0 z-[-2]">
          <img 
            src="/images/hero.webp" 
            alt="Hero Background" 
            className="block min-[1000px]:hidden w-full h-full object-cover"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden min-[1000px]:block w-full h-full object-fill"
          >
            <source src="https://res.cloudinary.com/dkgo71mgz/video/upload/v1770551903/video_cnvafa.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        {/* black gradient */}
        <div className="absolute inset-0 bg-gradient-to-tl from-black/100 to-black/100  opacity-50 z-[0]"/>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl px-5 mt-16 animate-in fade-in slide-in-from-bottom-5 duration-1000 ">
        <span className="font-body text-sm md:block tracking-[4px] uppercase mb-12 lg:mb-12 text-luxury-cream/90 drop-shadow-2xl animate-slideUp">
          Welcome to Trust Bridge
        </span>
        <h1 className="md:block hidden font-body text-5xl leading-[1.1] uppercase tracking-widest drop-shadow-2xl text-white animate-slideLeft">
          Your Trusted 
        </h1>
        <h1 className="md:block hidden font-body text-5xl leading-[1.1] uppercase tracking-widest drop-shadow-2xl text-white animate-slideRight">Real Estate Partner</h1>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
          <Link href="/projects">
            <button className="btn bg-yellow-500 hover:text-luxury-accent px-8 py-4 animate-slideLeft" aria-label="View our projects">
              View Projects <ArrowRight size={20} aria-hidden="true" />
            </button>
          </Link>
          <Link href="tel:+917303975006">
            <button className="btn border-white text-white border  hover:text-yellow-500 px-8 py-4 min-h-[44px] min-w-[44px] animate-slideRight" aria-label="Contact us">
              <Phone size={20} aria-hidden="true" /> Contact Us
            </button>
          </Link>
        </div>  
        <StatsSection />
      </div>
    </section>
  );
}
