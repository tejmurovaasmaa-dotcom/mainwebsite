'use client';

import Image from 'next/image';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/917303975006', '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className="fixed bottom-1/2 right-8 w-16 h-16 text-white rounded-full flex items-center justify-center shadow-2xl z-[1000] transition-all hover:scale-110 active:scale-95 group overflow-hidden animate-bounce"
      aria-label="Contact us on WhatsApp"
    >
      {/* <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div> */}
      <Image src="/whatsapp.svg" alt="WhatsApp" width={50} height={50}  aria-hidden="true" />
    </button>
  );
}
