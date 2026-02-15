
import Link from 'next/link';
import Image from 'next/image';
import { properties } from '../../../projectDetails';
import { notFound } from 'next/navigation';
import Loading from './loading';
import { Suspense } from 'react';
import FavoriteButton from '../../../../../../components/FavoriteButton';
import BookTourForm from './BookTourForm';

export default async function PropertyDetailsPage({ params }: { params: Promise<{ city: string; type: string; property: string }> }) {
    const { city: citySlug, type: typeSlug, property: propertySlug } = await params;
    
    // Normalize type slug to match property type
    const normalizedType = typeSlug.toLowerCase() === 'residential' ? 'Residential' :'Commercial';
    
    const property = properties.find(p => 
        p.slug === propertySlug && 
        p.city === citySlug && 
        p.type === normalizedType
    );

    if (!property || !normalizedType) {
        return notFound();
    }
  
    return (
        <Suspense fallback={<Loading />}>
        <div className="min-h-screen max-w-screen bg-luxury-cream text-luxury-foreground font-body mt-20">
            {/* Hero Section */}
            <div className="relative h-[100vh] w-full">
                <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-500 via-luxury-accent/5 to-black/20" />
                
                <div className="absolute inset-0 flex flex-col justify-end px-4 pb-20">
                    <div className="max-w-7xl mx-auto w-full">
                        <Link 
                            href={`/projects/${citySlug}/${typeSlug}`} 
                            className="text-white bg-luxury-accent/30 backdrop-blur-md hover:bg-luxury-accent transition-colors mb-8 inline-flex items-center gap-2 px-6 py-2 rounded-full text-xs tracking-[0.3em] uppercase border border-white/20"
                        >
                            ← Back to {normalizedType} in {citySlug}
                        </Link>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                            <div className="max-w-3xl">
                                <span className="bg-primary text-white text-[10px] tracking-[0.5em] uppercase px-5 py-2 rounded-sm mb-6 inline-block font-bold">
                                    {property.type}
                                </span>
                                <h1 className="text-6xl md:text-9xl font-heading text-white tracking-tighter mb-6 leading-[0.9]">
                                    {property.name}
                                </h1>
                                <p className="text-white/90 text-xl md:text-2xl font-light flex items-center gap-3 italic">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {property.location}
                                </p>
                            </div>
                            <div className="flex items-start justify-end absolute top-1/2 right-2 translate-y-[-50%]">
                                <FavoriteButton id={property.id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>  

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                    {/* Main Details */}
                    <div className="lg:col-span-3">
                        <section className="mb-20">
                            <div className="flex items-center gap-4 mb-10">
                                <h2 className="text-4xl font-heading text-luxury-accent tracking-tight">The Vision</h2>
                                <div className="h-[2px] w-20 bg-primary" />
                            </div>
                            <p className="text-luxury-textMuted text-xl leading-relaxed font-light first-letter:text-6xl first-letter:font-heading first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                                {property.description}
                            </p>
                        </section>

                        {/* Unit Type */}
                        <section className="mb-20">
                            <h2 className="text-3xl font-heading text-luxury-accent mb-12 flex items-center gap-4">
                                Unit Type
                            </h2>
                            <div className="grid grid-cols-2 gap-6">
                                {property.unit.map((unit, index) => (
                                    <FactBox key={index} value={unit} />
                                ))}
                            </div>
                        </section>

                        {/* Quick Facts Grid */}
                        <section className="mb-20 bg-luxury-secondary/50 p-12 rounded-3xl border border-luxury-accent/5">
                            <h2 className="text-3xl font-heading text-luxury-accent mb-12 flex items-center gap-4">
                                Specifications
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 text-wrap">
                                <FactBox label="Possession" value={property.possession ?? ''} />
                                <FactBox label="Size" value={property.size ?? ''} />
                                <FactBox label="Total Area" value={property.area ?? ''} />
                                <FactBox label="RERA ID" value={property.rera ?? ''} />
                                <FactBox label="Investment" value={property.price ?? ''} />
                                {property.floors && <FactBox label="Floors" value={property.floors ?? ''} />}
                            </div>
                        </section>

                        {/* Amenities */}
                        <section className="mb-20">
                            <h2 className="text-3xl font-heading text-luxury-accent mb-12 flex items-center gap-4">
                                Amenities
                            </h2>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {property.amenities.map((amenity, index) => (
                                    <div key={index} className="flex flex-col gap-4 p-8 bg-white rounded-2xl shadow-sm border border-luxury-accent/5 hover:border-primary/30 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-luxury-secondary flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-primary" />
                                        </div>
                                        <span className="text-luxury-accent text-sm font-semibold tracking-wide">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Highlights */}
                        {property.highlights && <section className="mb-20">
                            <h2 className="text-3xl font-heading text-luxury-accent mb-12 flex items-center gap-4">
                                Highlights
                            </h2>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {property.highlights.map((highlight, index) => (
                                    <div key={index} className="flex flex-col gap-4 p-8 bg-white rounded-2xl shadow-sm border border-luxury-accent/5 hover:border-primary/30 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-primary" />
                                        </div>
                                        <span className="text-luxury-accent text-sm font-semibold tracking-wide">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </section>}

                        {/* Gallery */}
                        {property.gallery.length > 0 && (
                            <section className="mb-20">
                                <h2 className="text-3xl font-heading text-luxury-accent mb-12 flex items-center gap-4">
                                    Gallery
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {property.gallery.map((img, index) => (
                                        <div key={index} className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg group">
                                            <Image
                                                src={img}
                                                alt={`${property.name} gallery ${index + 1}`}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                    {property.videoLink && (
                                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg group">
                                            <iframe src={property.videoLink} className="w-full h-full" loading="lazy" referrerPolicy="origin" allowFullScreen></iframe>
                                        </div>
                                    )}
                                </div>
                            </section>
                        )}

                        {/*location map*/}
                        <section className="mb-20">
                            <h2 className="text-3xl font-heading text-luxury-accent mb-12 flex items-center gap-4">
                                Location
                            </h2>
                            <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg group">
                                <iframe src={property.locationLink} className="w-full h-full" loading="lazy" referrerPolicy="origin" allowFullScreen></iframe>
                            </div>
                        </section>
                    </div> 

                    {/* Sidebar / CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-10">
                            <div className="bg-luxury-accent text-white p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                                <h3 className="text-3xl text-white font-heading mb-8 tracking-wider">Experience Excellence</h3>
                                <p className="text-gray-200 mb-10 font-light italic text-lg leading-relaxed">
                                    "Allow our advisors to walk you through the journey of acquiring your next masterpiece."
                                </p>
                                  <BookTourForm propertyName={property.name} city={citySlug} />
                                <div className="mt-10 pt-10 border-t border-white/10 flex items-center justify-between text-sm relative z-10">
                                    <span className="text-gray-300 uppercase tracking-widest text-[15px] font-semibold">Call Us</span>
                                    <span className="font-semibold text-primary">+91 73039 75006</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Suspense>
    );
}

function FactBox({ label, value }: { label?: string, value: string }) {
    return (
        <div className="border-l-2 border-primary/20 pl-6 flex flex-col gap-2">
            <p className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold mb-2">{label}</p>
            <p className="text-2xl font-heading text-luxury-accent break-words whitespace-normal">{value}</p>
        </div>
    );
}

