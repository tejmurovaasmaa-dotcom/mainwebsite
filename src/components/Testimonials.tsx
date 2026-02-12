import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Consultant",
    text: "The professionalism shown by Trust Bridge is unmatched. They helped me find a sanctuary that perfectly balances luxury and comfort.",
    initials: "RK"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Interior Designer",
    text: "As a designer, I'm picky about layouts. Trust Bridge understood exactly what I was looking for and delivered beyond expectations.",
    initials: "PS"
  },
  {
    id: 3,
    name: "Amitabh Banerjee",
    role: "Investment Banker",
    text: "Smooth process from start to finish. Their property portfolio is curated with an eye for both luxury and long-term value.",
    initials: "AB"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary uppercase tracking-[3px] font-semibold text-sm">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-heading text-luxury-accent">What Our Clients Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-luxury-secondary p-10 relative group transition-all duration-300 hover:bg-white hover:shadow-2xl border border-transparent hover:border-primary/20">
              <Quote className="absolute top-6 right-6 text-primary opacity-10 group-hover:opacity-30 transition-opacity" size={50} />
              <p className="text-luxury-textMuted italic leading-relaxed text-lg mb-8 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl ring-4 ring-primary/10">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-heading text-xl text-luxury-accent">{t.name}</h4>
                  <p className="text-primary text-[10px] uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
