import Link from 'next/link';
import Image from 'next/image';
import { cities } from './city';

export default function Page() {
    return (
        <div className="min-h-screen bg-luxury-cream text-luxury-foreground py-24 px-4 font-body">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 mt-20">
                    <h1 className="text-6xl md:text-6xl font-heading text-luxury-accent tracking-widest mb-6">
                        Explore Cities
                    </h1>
                    <p className="text-luxury-textMuted text-xl font-light max-w-2xl mx-auto italic">
                        "Luxury is not a location, but a destination of excellence."
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-6 flex-wrap  ">
                    {cities.map((city) => (
                        <Link 
                            key={city.slug} 
                            href={`/projects/${city.slug}`}
                            className="group relative h-[500px] md:w-96 overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:shadow-primary/10 flex-wrap"
                        >
                            {/* Background Image */}
                            <Image
                                src={city.image}
                                alt={city.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            
                            {/* Sophisticated Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-luxury-accent via-luxury-accent/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-12 flex flex-col justify-end text-luxury-cream">
                                <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                    <h2 className="text-5xl font-heading mb-4 tracking-tight text-luxury-cream">{city.name}</h2>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="h-[1px] w-12 bg-primary" />
                                        <span className="text-sm tracking-[0.2em] uppercase font-medium">
                                            {city.projectCount} Premium Projects
                                        </span>
                                    </div>
                                    <p className="text-gray-200 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2 max-w-md">
                                        {city.description}
                                    </p>
                                </div>
                            </div>

                            {/* Premium Border Overlay */}
                            <div className="absolute inset-6 border border-white/20 group-hover:border-primary/40 transition-colors duration-500 pointer-events-none" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

