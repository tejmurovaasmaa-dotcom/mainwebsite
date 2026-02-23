'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, Building2, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { cities } from '../app/(site)/projects/city';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   const contactElement = document.getElementById('contact-form');
  //   if (contactElement) {
  //     contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  //   setIsOpen(false);
  // };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-300 ${
      scrolled || !isHome 
        ? 'py-3 bg-[#023e7d] shadow-md backdrop-blur-md border-b border-primary/10' 
        : 'py-5 bg-transparent'
    } ${className || ''}`}>
      <div className="container-custom flex justify-between items-center">
        <Link href="/" aria-label="Trust Bridge Group Home">
          <Image src='/logo.svg' alt="Trust Bridge Group Logo" width={100} height={100} priority sizes="100px" />
        </Link>
        
        <div className="hidden min-[901px]:flex gap-10 items-center">
          {['Home', 'Projects', 'About', 'Contact'].map((item) => {
            let href = item === 'Home' ? '/' : `#${item.toLowerCase()}`;
            if (item === 'Projects') href = '/projects';
            if (item === 'About') href = '/about';
            if (item === 'Contact') href = '/contact';

            // Special handling for Projects with Dropdown
            if (item === 'Projects') {
              return (
                <div key={item} className="relative group/projects h-full flex items-center">
                  <Link 
                    href={href}
                    className={"font-body text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary relative py-4 " + (scrolled || !isHome ? 'text-white' : 'text-white')}
                  >
                    {item}
                    <span className="absolute bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover/projects:w-full"></span>
                  </Link>

                  {/* Projects Dropdown */}
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg
                                  opacity-0 invisible
                                  group-hover/projects:opacity-100 group-hover/projects:visible
                                  transition-all duration-300
                                  transform translate-y-4 group-hover/projects:translate-y-0
                                  border-t-4 border-primary">
                    <div className="py-2">
                        {cities.map((city) => (
                          <div key={city.slug} className="relative group/city">
                            <Link 
                              href={`/projects/${city.slug}`}
                              className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary font-medium uppercase tracking-wide transition-colors flex justify-between items-center"
                            >
                              {city.name}
                              <svg className="w-4 h-4 transform -rotate-90 text-gray-400 group-hover/city:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </Link>

                            {/* Nested Dropdown for City (Residential/Commercial) */}
                            <div className="absolute top-0 left-full ml-1 w-56 bg-white shadow-xl rounded-lg
                                            opacity-0 invisible
                                            group-hover/city:opacity-100 group-hover/city:visible
                                            transition-all duration-300
                                            transform translate-x-2 group-hover/city:translate-x-0
                                            border-l-4 border-primary/20 z-50">                            
                                <Link 
                                  href={`/projects/${city.slug}/residential`}
                                  className="block px-6 py-4 text-sm text-gray-700 hover:bg-primary hover:text-white transition-all duration-200 border-b border-gray-100 last:border-0"
                                >
                                  <span className="font-semibold block mb-1">Residential</span>
                                </Link>
                                <Link 
                                  href={`/projects/${city.slug}/commercial`}
                                  className="block px-6 py-4 text-sm text-gray-700 hover:bg-luxury-accent hover:text-white transition-all duration-200 border-b border-gray-100 last:border-0"
                                >
                                  <span className="font-semibold block mb-1">Commercial</span>   
                                </Link>
                                <Link 
                                  href={`/projects/${city.slug}/plots`}
                                  className="block px-6 py-4 text-sm text-gray-700 hover:bg-purple-600 hover:text-white transition-all duration-200"
                                >
                                  <span className="font-semibold block mb-1">Plots</span>   
                                </Link>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link 
                key={item}
                href={href} 
                // onClick={item === 'Contact'   ? handleContactClick : undefined}
                className={"font-body text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary relative group " + (scrolled || !isHome ? 'text-white' : 'text-white')}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </div>      

        <div className="flex gap-4 items-center">  
          <button className={"min-[901px]:hidden text-white cursor-pointer min-h-[44px] min-w-[44px]"} onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
            {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`absolute top-full left-0 right-0 bg-white p-8 flex flex-col gap-6 shadow-2xl transition-all duration-300 min-[901px]:hidden ${
          isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-5 opacity-0 pointer-events-none'
        }`}>
          {['Home', 'About', 'Projects', 'Contact'].map((item) => {
            let href = item === 'Home' ? '/' : `#${item.toLowerCase()}`;
            if (item === 'Projects') href = '/projects';
            if (item === 'About') href = '/about';
            if (item === 'Contact') href = '#contact';
            return (
              <Link 
                key={item}
                href={href} 
                className="font-body text-lg font-medium uppercase tracking-widest hover:text-primary transition-colors border-b border-gray-50 pb-2 text-luxury-accent"
                // onClick={item === 'Contact' ? handleContactClick : () => setIsOpen(false)}
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
