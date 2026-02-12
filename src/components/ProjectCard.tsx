import Image from 'next/image';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Property } from '../app/(site)/projects/projectDetails';


// interface ProjectCardProps {
//   title: string;
//   location: string;
//   price: string;
//   image: string;
//   status: string;
// }

export default function ProjectCard({ name, location, price, image,possession }: Property) {
  
  return (
    <div className="bg-white rounded-sm overflow-hidden shadow-sm border border-black/5 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-primary/30 group">
      <div className="relative h-72 overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-[10px] sm:text-xs font-bold px-3 py-1 uppercase tracking-widest">
          {possession}
        </div>
      </div>
      <div className="p-8 text-left">
        <h3 className="font-heading text-2xl text-luxury-accent mb-2 group-hover:text-primary transition-colors">{name}</h3>
        <p className="flex items-center gap-2 text-luxury-textMuted text-sm font-medium mb-6">
          <MapPin size={16} className="text-primary" aria-hidden="true" /> {location}
        </p>
        <div className="flex  justify-between items-center pt-6 border-t border-gray-100">
          <span className="text-xl font-bold text-primary">{price}</span>
          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-luxury-accent hover:text-primary transition-colors min-h-[44px] min-w-[44px]" aria-label={`View details for ${name}`}>
            DETAILS <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
