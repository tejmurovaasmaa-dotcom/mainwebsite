import ProjectCard from './ProjectCard';
import Link from 'next/link';
import { properties } from '../app/(site)/projects/projectDetails';

const projects = [
  {
    id: 1,
    title: "Splendor Onyx Blue",
    location: "Sector 142, Noida",
    slug:"splendor-onyx-blue",
    city:"noida",
    type:"commercial",
    price: "Starts at ₹25 Lacs*",
    image: "https://res.cloudinary.com/dkgo71mgz/image/upload/v1767605870/onyx_geu5sx.png",
    status: "New Launch"
  },
  {
    id: 2,
    title: "Mahagun Medalleo",
    location: "Sector 107, Noida",
    price: "₹ 4.2 Cr*",
    image: "/images/hero.png", 
    status: "Under Construction"
  },
  {
    id: 3,
    title: "Godrej Tropical Isle",
    location: "Sector 146, Noida",
    price: "₹ 3.8 Cr*",
    image: "/images/project1.png", 
    status: "Best Seller"
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-luxury-cream" id="projects">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-primary uppercase tracking-[3px] font-semibold text-sm">Our Portfolio</span>
          <h2 className="text-4xl lg:text-5xl font-heading text-luxury-accent">Exclusive Properties</h2>
          <p className="text-luxury-textMuted leading-relaxed text-lg">
            Discover our curated selection of the finest luxury residences in prime locations.
            Each property is a masterpiece of design and comfort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((props) => (
            // const type = props.type.toLowerCase();
            <Link href={`/projects/${props.city}/${props.type.toLowerCase()}/${props.slug}`} key={props.id}>
            <ProjectCard
              key={props.id}
              {...props}
            />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
