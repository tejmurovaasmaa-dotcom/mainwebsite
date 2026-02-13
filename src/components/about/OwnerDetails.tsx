import Image, { type StaticImageData } from 'next/image';
import { User } from 'lucide-react';
// import asya from '../../../public/images/asya.jpg';

interface Owner {
  name: string;
  post: string;
  image?: string | StaticImageData;
}

const owners: Owner[] = [
  {
    name: 'PRASHANT SHARMA',
    post: 'Managing Director',
    image: 'https://res.cloudinary.com/dkgo71mgz/image/upload/v1770975440/IMG_6247_brrswm.webp',
  },
  {
    name: 'Asya Sharma',
    post: 'Director',
    image: "https://res.cloudinary.com/dkgo71mgz/image/upload/v1767591918/asya_vhdd8j.jpg",
  },
  {
    name: 'RAM SHARMA',
    post: 'Business Head',
    image: 'https://res.cloudinary.com/dkgo71mgz/image/upload/v1770553639/ram_sgzjix.png',
  },
];

export default function OwnerDetails() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading mb-6 text-luxury-accent">
            Meet Our Team
          </h2>
          <p className="text-lg text-luxury-textMuted max-w-3xl mx-auto leading-relaxed">
            At Trust Bridge Group, our strength lies in our people. Our team of experienced real estate professionals, consultants, and advisors work together to deliver trust, transparency, and excellence in every project. With deep market knowledge and a customer-first approach, we turn your property dreams into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {owners.map((owner, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="relative w-full aspect-image max-w-[300px] mx-auto mb-6 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-200 group-hover:-translate-y-4 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                {owner.image ? (
                  typeof owner.image === 'string' ? (
                    <Image
                      src={owner.image}
                      alt={owner.name}
                      width={400}
                      height={500}
                      className="object-cover group-hover:scale-110 transition-transform duration-300 w-full h-full"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                  ) : (
                    <Image
                      src={owner.image}
                      alt={owner.name}
                      
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                  )
                ) : (
                  <User className="w-24 h-24 text-primary/50" />
                )}
              </div>
              <h3 className="text-2xl font-heading mb-2 text-luxury-accent">
                {owner.name}
              </h3>
              <p className="text-primary font-body text-lg font-semibold uppercase tracking-wider">
                {owner.post}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

