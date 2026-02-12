"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Loader2, X, Calendar, User, Mail, Phone, MapPin, Building } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const indiaPhoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;

interface BookTourFormProps {
  propertyName: string;
  city: string;
}

export default function BookTourForm({ propertyName, city }: BookTourFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full bg-primary text-white py-5 rounded-xl hover:bg-primary-dark transition-all duration-300 uppercase tracking-[0.2em] text-xs font-bold shadow-xl shadow-primary/20 relative z-10 min-h-[44px]"
        aria-label="Book a private tour"
      >
        Book a Private Tour
      </button>

      {isOpen && mounted && <BookTourModal propertyName={propertyName} city={city} onClose={() => setIsOpen(false)} />}
    </>
  );
}

function BookTourModal({ propertyName, city, onClose }: { propertyName: string, city: string, onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (!name || !email || !phone) {
      toast.error("Please fill all the fields");
      return;
    }

    if (!indiaPhoneRegex.test(phone)) {
      toast.error("Invalid phone number");
      return;
    }

    setLoading(true);

    try {
      const data = {
        name,
        email,
        phone,
        property: propertyName,
        city,
      };

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/v1/visit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Tour request received! We'll contact you shortly.");
        setName("");
        setEmail("");
        setPhone("");
        setTimeout(() => {
          onClose();
        }, 1000);
      } else {
        toast.error(result.message || "Submission failed");
      }

    } catch (error) {
      console.error("error in submitting form", error);
      toast.error("Form submission failed");
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute  inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-in fade-in duration-300" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-5 duration-300 border border-white/20">
        
        {/* Header Design */}
        <div className="bg-luxury-accent p-8 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full translate-x-10 -translate-y-10 blur-xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full -translate-x-5 translate-y-5 blur-xl" />
            
            <h3 className="text-2xl font-heading text-white tracking-widest uppercase mb-3 relative z-10">
                Book a Private Tour
            </h3>
            <div className="flex items-center justify-center gap-2 text-primary/90 text-[10px] uppercase tracking-[0.2em] font-medium relative z-10">
                <Building size={12} />
                <span>{propertyName}</span>
                <span className="mx-1">•</span>
                <MapPin size={12} />
                <span>{city}</span>
            </div>

            <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            >
                <X size={20} />
            </button>
        </div>

        <div className="p-8 bg-white/95 relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-1">
              <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-luxury-textMuted flex items-center gap-2 mb-2">
                <User size={12} className="text-primary" /> Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-luxury-secondary/30 border border-luxury-accent/10 rounded-xl focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all duration-300 text-luxury-accent placeholder:text-gray-400 font-medium"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-luxury-textMuted flex items-center gap-2 mb-2">
                <Mail size={12} className="text-primary" /> Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-luxury-secondary/30 border border-luxury-accent/10 rounded-xl focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all duration-300 text-luxury-accent placeholder:text-gray-400 font-medium"
                placeholder="Enter your email address"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-luxury-textMuted flex items-center gap-2 mb-2">
                <Phone size={12} className="text-primary" /> Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-luxury-secondary/30 border border-luxury-accent/10 rounded-xl focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all duration-300 text-luxury-accent placeholder:text-gray-400 font-medium"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="pt-2">
                <button
                type="submit"
                disabled={loading}
                className="w-full bg-luxury-accent text-white py-4 rounded-xl hover:bg-luxury-foreground transition-all duration-300 uppercase tracking-widest text-xs font-bold shadow-lg shadow-luxury-accent/20 flex items-center justify-center gap-2 group"
                >
                {loading ? (
                    <>
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span>Processing...</span>
                    </>
                ) : (
                    <>
                    <span>Confirm Booking</span>
                    <Calendar size={14} className="text-primary group-hover:bg-primary group-hover:text-white rounded-full p-0.5 transition-colors" />
                    </>
                )}
                </button>
            </div>
            
            <p className="text-center text-[10px] text-gray-400 opacity-60">
              Our team will contact you to confirm the schedule.
            </p>
          </form>
        </div>
      </div>
      
      {/* Local Toaster for the modal logic */}
      <Toaster 
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#2C3E50',
            color: '#fff',
            border: '1px solid #D4AF37',
            fontSize: '14px',
          },
          success: {
            iconTheme: {
              primary: '#D4AF37',
              secondary: '#fff',
            },
          },
        }}
      />
    </div>,
    document.body
  );
}
