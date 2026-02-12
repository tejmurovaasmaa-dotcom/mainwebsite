'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const indiaPhoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;

function isValidIndianPhone(phone: string) {
  return indiaPhoneRegex.test(phone);
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    if (!isValidIndianPhone(formData.phone)) {
      toast.error("Invalid phone number");
      return;
    }

    setLoading(true);

    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/v1/interest`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Form submitted successfully");
        setFormData({ name: '', email: '', phone: '', message: '' });
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

  return (
    <section className="py-24 bg-luxury-secondary" id="contact-form">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-10">
          <div className="space-y-4 group">
            <h2 className="text-primary uppercase tracking-[3px] font-semibold text-sm group-hover:translate-x-2 transition-transform">
              Connect With Us
            </h2>
            <h2 className="text-3xl font-heading leading-tight text-luxury-accent tracking-widest group-hover:translate-x-2 transition-transform">
              Let's Find Your <br />Perfect Estate
            </h2>
            <p className="text-luxury-textMuted leading-relaxed text-lg max-w-xl">
              Have questions about a specific property or want to explore our portfolio?
              Fill out the form and our luxury property consultants will get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-8">
            <div className="group">
              <h3 className="font-heading text-lg text-primary mb-1 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                Head Office
              </h3>
              <p className="text-luxury-textMuted font-medium italic">
                2216-17, 22nd Floor, B Tower, Alpha Thum, Sector 90, Noida, Uttar Pradesh 201305
              </p>
            </div>
            <div className="group">
              <h3 className="font-heading text-lg text-primary mb-1 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                Direct Line
              </h3>
              <p className="text-luxury-textMuted font-medium italic">
                +91 73039 75006
              </p>
            </div>
          </div>
        </div>

        <form
          className="bg-white p-10 lg:p-14 shadow-2xl border border-gray-100 rounded-sm relative overflow-hidden"
          onSubmit={handleSubmit}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full"></div>

          <div className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-[10px] font-bold text-luxury-accent uppercase tracking-widest">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white transition-all outline-none rounded-none"
                placeholder="Your Name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-[10px] font-bold text-luxury-accent uppercase tracking-widest">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white transition-all outline-none rounded-none"
                placeholder="email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-[10px] font-bold text-luxury-accent uppercase tracking-widest">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white transition-all outline-none rounded-none"
                placeholder="XXXXXXXXXX"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-[10px] font-bold text-luxury-accent uppercase tracking-widest">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white transition-all outline-none rounded-none h-32 resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                w-full py-4 min-h-[44px]
                bg-primary text-white font-bold uppercase tracking-[4px]
                hover:bg-primary-dark transition-all
                hover:shadow-xl hover:shadow-primary/20
                active:scale-95
                disabled:opacity-60 disabled:cursor-not-allowed
                flex items-center justify-center gap-3
              "
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Inquiry"
              )}
            </button>
          </div>
        </form>
      </div>

      <Toaster />
    </section>
  );
}
