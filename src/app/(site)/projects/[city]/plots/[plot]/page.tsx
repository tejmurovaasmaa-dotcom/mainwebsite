
import Link from 'next/link';
import Image from 'next/image';
import { plotsDetails, Plots } from '../../../plotsDetails';
import BookTourForm from '../../../BookTourForm';
import { cities, City } from '../../../city';
import { notFound } from 'next/navigation';
import { MapPin, Maximize, Compass, Landmark, CheckCircle2 } from 'lucide-react';

export default async function PlotDetailsPage({ params }: { params: Promise<{ city: string; plot: string }> }) {
    const { city: citySlug, plot: plotId } = await params;
    
    const plot = plotsDetails.find((p: Plots) => 
        p.id.toString() === plotId && 
        p.city.toLowerCase() === citySlug.toLowerCase()
    );

    const city = cities.find((c: City) => c.slug === citySlug);

    if (!plot || !city) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-luxury-cream text-luxury-foreground font-body mt-20">
            {/* Hero Section */}
            <div className="relative h-[80vh] w-full">
                <Image
                    src={plot.image}
                    alt={plot.name || 'Plot Image'}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col justify-end px-4 pb-20">
                    <div className="max-w-7xl mx-auto w-full">
                        <Link 
                            href={`/projects/${citySlug}/plots`} 
                            className="text-white bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all mb-8 inline-flex items-center gap-2 px-6 py-2 rounded-full text-xs tracking-[0.3em] uppercase border border-white/20"
                        >
                            ← Back to Plots in {city.name}
                        </Link>
                        <div className="max-w-4xl animate-slideUp">
                            <span className="bg-primary text-white text-[10px] tracking-[0.5em] uppercase px-5 py-2 rounded-sm mb-6 inline-block font-bold">
                                {plot.type}
                            </span>
                            {plot.name && <h1 className="text-6xl md:text-9xl font-heading text-white tracking-tighter mb-6 leading-[0.9]">
                                {plot.name}
                            </h1>}
                            <p className="text-white/90 text-xl md:text-2xl font-light flex items-center gap-3 italic">
                                <MapPin className="text-primary w-6 h-6" />
                                {plot.location}, {city.name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <section className="mb-20">
                            <div className="flex items-center gap-4 mb-10">
                                <h2 className="text-4xl font-heading text-luxury-accent tracking-tight">Overview</h2>
                                <div className="h-[2px] w-20 bg-primary" />
                            </div>
                            <p className="text-luxury-textMuted text-xl leading-relaxed font-light">
                                {plot.description}
                            </p>
                        </section>

                        <section className='mb-20'>
                            <div className='flex flex-col md:flex flex-wrap'>
                                {plot.size && plot.size.length > 0 && plot.size.map((size: string, index: number) => (
                                    <div key={index} className='flex items-center gap-3 mb-4'>
                                        <Maximize className='text-primary' size={20} />
                                        <span className="text-luxury-textMuted">{size}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className='mb-20'>
                            <div className='flex flex-col md:flex-row flex-wrap'>
                                <Landmark className="text-primary" size={36} />
                                <p className="ml-4 text-2xl text-luxury-textMuted">{plot.price}</p>
                            </div>
                        </section>

                        {/* Specifications Grid */}
                        <section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* <SpecCard 
                                icon={<Maximize className="text-primary" size={24} />}
                                label="Plot Area"
                                value={`${plot.area} sq.ft.`}
                            /> */}
                            {plot.facing &&<SpecCard 
                                icon={<Compass className="text-primary" size={24} />}
                                label="Facing"
                                value={plot.facing}
                            />}
                            {/* <SpecCard 
                                icon={<Landmark className="text-primary" size={48} />}
                                label="Investment"
                                value={`₹${plot.price}`}
                            /> */}
                        </section>

                        {/* Highlights */}
                        <section className="mb-20">
                            <h2 className="text-3xl font-heading text-luxury-accent mb-12">Project Highlights</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {plot.highlights.map((highlight: string, index: number) => (
                                    <div key={index} className="flex gap-4 p-6 bg-white rounded-2xl border border-luxury-accent/5 hover:border-primary/20 transition-all group">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-luxury-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                            <CheckCircle2 size={18} className="text-primary" />
                                        </div>
                                        <span className="text-luxury-accent font-medium">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Additional sections like Location Map, Nearby Amenities, etc. can be added here */}
                            <section className="mb-20">
                            <h2 className="text-3xl font-heading text-luxury-accent mb-12 flex items-center gap-4">
                                Location
                            </h2>
                            <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg group">
                                <iframe src={plot.locationLink} className="w-full h-full" loading="lazy" referrerPolicy="origin" allowFullScreen></iframe>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28">
                            <div className="bg-luxury-accent text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                                <h3 className="text-3xl font-heading mb-6 tracking-wide">Secure This Land</h3>
                                <p className="text-gray-300 mb-10 font-light text-lg">
                                    "Land is the only thing in the world that amounts to anything, for it's the only thing in this world that lasts."
                                </p>
                                
                               <BookTourForm propertyName={plot.name || "Plot"} city={plot.city} />
                                
                                <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-400 uppercase tracking-widest">Expert Advisor</span>
                                        <span className="text-primary font-bold">+91 73039 75006</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SpecCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="bg-white p-8 rounded-3xl border border-luxury-accent/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">{icon}</div>
            <p className="text-xs uppercase tracking-[0.2em] text-luxury-textMuted mb-2 font-bold">{label}</p>
            <p className="text-2xl font-heading text-luxury-accent">{value}</p>
        </div>
    );
}
