import Image from 'next/image';
import logo from '../../../public/logo.svg';

export default function CompanyDetails() {
  return (
    <section className=" min-w-screen section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Main Company Story */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-heading mb-8 text-primary text-center">
              Trust Bridge Group
            </h2>
            <div className="w-full flex items-center justify-center space-y-6 text-lg text-luxury-foreground ">
                <div className="w-full flex items-center justify-center">
                  <Image src={logo} alt="Trust Bridge Group Logo" width={300} height={300} sizes="(max-width: 768px) 100vw, 300px" />
                </div>
              <div className="w-full ">
                <p >
                    At Trust Bridge Group, our journey began with a simple vision — to build a bridge of trust between people and their dream homes. With years of experience in the real estate industry, we have established ourselves as a reliable name known for integrity, transparency, and excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Vision and Values */}
          <div className="p-8 md:p-12 rounded-lg shadow-sm border bg-cover border-primary/10"
          style={{ backgroundImage: "url('/images/gl.webp')" }}>
            <h3 className="text-3xl md:text-4xl font-heading mb-6 text-luxury-accent">
              Our Vision and Values
            </h3>
            <p className="text-luxury-foreground leading-relaxed text-lg">
              At Trust Bridge Group, our vision is to redefine the way people experience real estate — by creating a future where every property investment is guided by trust, transparency, and long-term value. We aspire to be a leading name in property consulting and development, offering opportunities that empower individuals and families to achieve their dreams of premium living. Through honesty, excellence, and innovation, Trust Bridge Group continues to build bridges — connecting people with properties that truly reflect their aspirations and lifestyle.
            </p>
          </div>

          {/* Excellence Section */}
          {/* <div className="p-8 md:p-12 rounded-lg border bg-cover border-primary/20" style={{ backgroundImage: "url('/images/sl.webp')" }}>
            <h3 className="text-3xl md:text-4xl font-heading mb-6 text-luxury-accent">
              Excellence in Real Estate
            </h3>
            <p className="text-luxury-foreground leading-relaxed text-lg">
              At Trust Bridge Group, excellence isn't just a goal — it's the standard we live by. We bring together industry expertise, market insight, and personalized service to deliver real estate solutions that exceed expectations. Every project we undertake is guided by a deep understanding of our clients' needs and a commitment to achieving the highest level of satisfaction. With a focus on quality, trust, and innovation, Trust Bridge Group continues to set new benchmarks in real estate, making your dream property not just a purchase — but a proud achievement.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

