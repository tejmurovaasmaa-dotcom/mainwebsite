import Link from 'next/link';
import Image from 'next/image';
import { properties } from '../../projectDetails';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import FavoriteButton from '../../../../../components/FavoriteButton';
import FavoritesCount from '../../../../../components/FavoritesCount';
import { cities } from '../../city';

export default async function TypePage({ params }: { params: Promise<{ city: string; type: string }> }) {
    const { city: citySlug, type: typeSlug } = await params;
    const city = cities.find(c => c.slug === citySlug);
    
    if (!city) {
        return notFound();
    }

    // Normalize type slug to match property type
    const normalizedType = typeSlug.toLowerCase() === 'residential' ? 'Residential' : typeSlug.toLowerCase() === 'commercial' ? 'Commercial' : null;
    
    if (!normalizedType) {
        return notFound();
    }

    const cityProperties = properties.filter(p => p.city === citySlug && p.type === normalizedType);

    return (
        <div className="min-h-screen bg-luxury-cream text-luxury-foreground py-20 px-4 mt-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-20">
                    <Link 
                        href={`/projects/${citySlug}`} 
                        className="text-primary hover:text-primary-dark transition-colors mb-8 inline-flex items-center gap-2 text-sm tracking-widest uppercase font-semibold"
                    >
                        <ArrowLeft size={16} />
                        Back to {city.name}
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-6">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-heading text-luxury-accent tracking-wider mb-4">
                                {normalizedType} <span className="text-primary/40">in {city.name.toLowerCase() === 'noida' ? 'Noida City' : city.name}</span>
                            </h1>
                            <p className="text-luxury-textMuted text-lg font-light max-w-2xl leading-relaxed">
                                Explore our curated selection of {normalizedType.toLowerCase()} properties in {city.name}. 
                                Each property represents excellence in design and location.
                            </p>
                        </div>
                        <div className="flex flex-col items-end gap-4">
                            <div className="text-right">
                                <p className="text-3xl font-heading text-luxury-accent">{cityProperties.length}</p>
                                <p className="text-xs uppercase tracking-widest text-primary">Properties</p>
                            </div>
                            <FavoritesCount />
                        </div>
                    </div>
                </div>

                {/* Properties Grid */}
                {cityProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {cityProperties.map((property) => (
                            <PropertyCard key={property.id} property={property} citySlug={citySlug} typeSlug={typeSlug} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-40 border-2 border-dashed border-primary/20 rounded-3xl bg-luxury-secondary/50">
                        <p className="text-luxury-textMuted text-xl font-light">
                            No {normalizedType.toLowerCase()} properties available in {city.name} at the moment.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

function PropertyCard({ property, citySlug, typeSlug }: { property: any; citySlug: string; typeSlug: string }) {
    return (
        <Link 
            href={`/projects/${citySlug}/${typeSlug}/${property.slug}`}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-luxury-accent/5"
        >
            <div className="relative h-72 overflow-hidden">
                <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md text-luxury-accent text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full font-bold shadow-sm">
                        {property.type}
                    </span>
                </div>
                <div className="absolute top-6 right-6">
                    <FavoriteButton id={property.id} />
                </div>
            </div>
            <div className="p-8">
                <h3 className="text-2xl font-heading text-luxury-accent mb-3 group-hover:text-primary transition-colors">{property.name}</h3>
                <p className="text-luxury-textMuted text-sm mb-6 flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.location}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-luxury-secondary">
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-luxury-textMuted mb-1">Starting from</span>
                        <span className="text-luxury-accent font-bold text-lg">{property.price}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-luxury-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
}

