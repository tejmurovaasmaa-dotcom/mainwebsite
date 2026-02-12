import Link from 'next/link';
import { plotsDetails } from '../plotsDetails';
import { properties } from '../projectDetails';
import { notFound } from 'next/navigation';
import { Building2, Home, MapPin } from 'lucide-react';
import { cities } from '../city';

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = await params;
    const city = cities.find(c => c.slug === citySlug);
    
    if (!city) {
        return notFound();
    }

    const cityProperties = properties.filter(p => p.city.toLowerCase() === citySlug.toLowerCase());
    const residential = cityProperties.filter(p => p.type === 'Residential');
    const commercial = cityProperties.filter(p => p.type === 'Commercial');
    const cityPlots = plotsDetails.filter(p => p.city.toLowerCase() === citySlug.toLowerCase());

    return (
        <div className="min-h-screen bg-luxury-cream text-luxury-foreground py-20 px-4">
            <div className="min-w-full mx-auto">
                {/* Header */}
                <div className="mb-20">
                    <Link href="/projects" className="text-primary hover:text-primary-dark transition-colors mb-8 inline-flex items-center gap-2 text-sm tracking-widest uppercase font-semibold group">
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                        Back to cities
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-6">
                        <div className="animate-slideLeft">
                            <h1 className="text-5xl md:text-8xl font-heading text-luxury-accent tracking-tighter mb-4 leading-none">
                                {city.name}
                            </h1>
                            <p className="text-luxury-textMuted text-lg font-light max-w-2xl leading-relaxed">
                                Curating the finest architectural marvels in {city.name}. From bespoke residences to landmark commercial hubs.
                            </p>
                        </div>
                        <div className="flex md:flex-row flex-col gap-4 animate-slideRight">
                            <div className="md:text-right border-l-2 md:border-l-0 md:border-r-2 border-primary/30 pl-6 md:pl-0 md:pr-6">
                                <p className="text-4xl font-heading text-luxury-accent">{cityProperties.length + cityPlots.length}</p>
                                <p className="text-xs uppercase tracking-widest text-primary font-bold">Total Portfolios</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Type Selection Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-w-[100%] mx-auto mb-20">
                    {/* Residential Option */}
                    <Link 
                        href={`/projects/${citySlug}/residential`}
                        className="group relative h-[600px] w-[400px] overflow-hidden rounded-[2rem] shadow-2xl transition-all duration-700 hover:-translate-y-4"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-10" />
                        <div className="absolute inset-0 bg-luxury-accent opacity-60" />
                        <div 
                            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
                            style={{ backgroundImage: "url('/images/res.webp')" }} 
                        />
                        
                        <div className="absolute inset-0 p-10 flex flex-col justify-between text-white z-20">
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500">
                                    <Home size={32} className="text-white group-hover:text-primary transition-colors" />
                                </div>
                                <h2 className="text-5xl text-white font-heading mb-4 tracking-tight">Residential</h2>
                                <p className="text-white/70 text-lg font-light leading-relaxed max-w-[280px]">
                                    Curated luxury homes for the discerning individual.
                                </p>
                            </div>
                            <div className="flex items-end justify-between">
                                <div>
                                    <p className="text-5xl font-heading mb-1 text-primary">{residential.length}</p>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">Properties</p>
                                </div>
                                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:translate-x-2">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Commercial Option */}
                    <Link 
                        href={`/projects/${citySlug}/commercial`}
                        className="group relative h-[600px] w-[400px] overflow-hidden rounded-[2rem] shadow-2xl transition-all duration-700 hover:-translate-y-4"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-10" />
                        <div className="absolute inset-0 bg-primary opacity-20 z-0" />
                        <div 
                            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
                            style={{ backgroundImage: "url('/images/project1.png')" }} 
                        />
                        
                        <div className="absolute inset-0 p-10 flex flex-col justify-between text-white z-20">
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500">
                                    <Building2 size={32} className="text-white group-hover:text-primary transition-colors" />
                                </div>
                                <h2 className="text-5xl text-white font-heading mb-4 tracking-tight">Commercial</h2>
                                <p className="text-white/70 text-lg font-light leading-relaxed max-w-[280px]">
                                    World-class business environments & retail spaces.
                                </p>
                            </div>
                            <div className="flex items-end justify-between">
                                <div>
                                    <p className="text-5xl font-heading mb-1 text-primary">{commercial.length}</p>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">Properties</p>
                                </div>
                                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:translate-x-2">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Plots Option */}
                    <Link 
                        href={`/projects/${citySlug}/plots`}
                        className="group relative h-[600px] w-[400px] overflow-hidden rounded-[2rem] shadow-2xl transition-all duration-700 hover:-translate-y-4"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-10" />
                        <div className="absolute inset-0 bg-green-900/40 opacity-40 z-0" />
                        <div 
                            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
                            style={{ backgroundImage: "url('https://res.cloudinary.com/dkgo71mgz/image/upload/v1770620917/plts_zmegj2.webp')" }} 
                        />
                        
                        <div className="absolute inset-0 p-10 flex flex-col justify-between text-white z-20">
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500">
                                    <MapPin size={32} className="text-white group-hover:text-primary transition-colors" />
                                </div>
                                <h2 className="text-5xl text-white font-heading mb-4 tracking-tight">Land Plots</h2>
                                <p className="text-white/70 text-lg font-light leading-relaxed max-w-[280px]">
                                    Prime land opportunities for custom development.
                                </p>
                            </div>
                            <div className="flex items-end justify-between">
                                <div>
                                    <p className="text-5xl font-heading mb-1 text-primary">{cityPlots.length}</p>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">Properties</p>
                                </div>
                                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:translate-x-2">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {cityProperties.length === 0 && (
                    <div className="text-center py-40 border-2 border-dashed border-primary/20 rounded-3xl bg-luxury-secondary/50">
                        <p className="text-luxury-textMuted text-xl font-light">
                            Exclusive opportunities in {city.name} coming soon.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

