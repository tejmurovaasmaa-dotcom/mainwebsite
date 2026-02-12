import Link from 'next/link';
import { plotsDetails, Plots } from "../../plotsDetails";
import { cities, City } from "../../city";
import { notFound } from "next/navigation";
import { MapPin, MoveRight } from "lucide-react";

export default async function PlotsPage({ params }: { params: Promise<{ city: string }> }) {    
    const { city: citySlug } = await params;
    const city = cities.find((c: City) => c.slug === citySlug);
    
    if (!city) {
        return notFound();
    }

    const filteredPlots = plotsDetails.filter((p: Plots) => p.city.toLowerCase() === citySlug.toLowerCase());

    return (
        <div className="min-h-screen bg-luxury-cream text-luxury-foreground py-20 px-4">
            <div className="min-w-full mx-auto">
                {/* Header */}
                <div className="mb-20">
                    <Link href={`/projects/${citySlug}`} className="text-primary hover:text-primary-dark transition-colors mb-8 inline-flex items-center gap-2 text-sm tracking-widest uppercase font-semibold group">
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                        Back to {city.name}
                    </Link>
                    <div className="animate-slideLeft">
                        <h1 className="text-5xl md:text-8xl font-heading text-luxury-accent tracking-tighter mb-4 leading-none lowercase first-letter:uppercase">
                            {city.name} <span className="text-primary">Plots</span>
                        </h1>
                        <p className="text-luxury-textMuted text-lg font-light max-w-2xl leading-relaxed">
                            Premium land parcels and investment opportunities in prime locations across {city.name}.
                        </p>
                    </div>
                </div> 

                {/* Plots Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredPlots.map((plot: Plots) => (
                        <Link 
                            key={plot.id}
                            href={`/projects/${citySlug}/plots/${plot.id}`}
                            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                    style={{ backgroundImage: `url('${plot.image}')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-white/90 backdrop-blur-md text-luxury-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                                        {plot.type}
                                    </span>
                                </div>
                            </div>

                            <div className="p-10 flex flex-col flex-grow">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h2 className="text-3xl font-heading text-luxury-accent mb-2 group-hover:text-primary transition-colors">
                                            {plot.name}
                                        </h2>
                                        <div className="flex items-center gap-2 text-luxury-textMuted">
                                            <MapPin size={16} className="text-primary" />
                                            <span className="text-sm">{plot.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.2em] text-luxury-textMuted mb-1">Starting From</p>
                                        <p className="text-2xl font-heading text-luxury-accent">₹{plot.price}</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                        <MoveRight size={20} className="text-primary group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredPlots.length === 0 && (
                    <div className="text-center py-40 border-2 border-dashed border-primary/20 rounded-3xl bg-luxury-secondary/50">
                        <p className="text-luxury-textMuted text-xl font-light">
                            No plots currently listed in {city.name}.
                        </p>
                        <Link href="/contact" className="mt-8 inline-block text-primary hover:underline font-semibold uppercase tracking-widest text-sm">
                            Enquire for upcoming projects
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}