import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import { Building2, MapPin, Phone, Mail, Instagram, Linkedin, Twitter , Facebook, Youtube} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-luxury-cream pt-24 pb-8 border-t border-primary/10" id="contact">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
          <Link href="/" className="font-heading text-2xl text-primary font-bold flex items-center gap-3 tracking-wider" aria-label="Trust Bridge Group Home">
            <Image src={logo} alt="Trust Bridge Group Logo" width={70} height={70} sizes="70px"/>
          </Link>
          <p className="text-luxury-textMuted leading-relaxed font-medium">
            Your premium partner in real estate, dedicated to finding your perfect sanctuary.
            We build trust through transparency and excellence.
          </p>
        </div>
        
        <div className="space-y-8">
          <h2 className="font-heading text-xl text-luxury-accent uppercase tracking-widest border-b border-primary/20 pb-2 inline-block">Quick Links</h2>
          <ul className="space-y-4">
            {['Home', 'About Us', 'Projects'].map((item) => {
              let href = item === 'Home' ? '/' : `#${item.toLowerCase()}`;
              if (item === 'Projects') href = '/projects';
              if (item === 'About Us') href = '/about';
              return <li key={item}>
                <Link href={href} className="text-luxury-textMuted hover:text-primary transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all"></span> {item}
                </Link>
              </li>
            })}
            <li>
              <Link href="/privacy_policy" className="text-luxury-textMuted hover:text-primary transition-colors font-medium flex items-center gap-2 group">
                <span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all"></span> Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="space-y-8 hidden md:block">
          <h2 className="font-heading text-xl text-luxury-accent uppercase tracking-widest border-b border-primary/20 pb-2 inline-block">Services</h2>
          <ul className="space-y-4">
            {['Consultation', 'Property Management', 'Investment'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-luxury-textMuted hover:text-primary transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all"></span> {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-8">
          <h2 className="font-heading text-xl text-luxury-accent uppercase tracking-widest border-b border-primary/20 pb-2 inline-block">Contact Us</h2>
          <ul className="space-y-6">
            <li className="flex gap-4 group">
              <MapPin size={24} className="text-primary shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
              <span className="text-luxury-textMuted font-medium leading-relaxed">2216-17 ,Tower B, Bhutani Alphathum, Sector 90, Noida, Uttar Pradesh 201305</span>
            </li>
            <li className="flex gap-4 group">
                <Phone size={24} className="text-primary shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
                <Link href="tel:+917303975006">
                <span className="text-luxury-textMuted font-medium italic underline decoration-primary/30">+91 730 397 5006</span>
                </Link>
            </li>
            <li className="flex gap-4 group">
              <Mail size={24} className="text-primary shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
              <Link href="mailto:info@trustbridgegroup.in">
              <span className="text-luxury-textMuted font-medium">info@trustbridgegroup.in</span>
              </Link>
            </li>
            <li className="flex gap-4 group">
              <Link href="https://www.instagram.com/trustbridge.group/" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} className="text-primary shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
              </Link>
              <Link href="https://www.linkedin.com/in/prashant-sharma-93a008391/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} className="text-primary shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
              </Link>
              <Link href="https://x.com/trustbridg56583" target="_blank" rel="noopener noreferrer">
                <Twitter size={24} className="text-primary shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
              </Link>
              <Link href="https://www.facebook.com/people/Trust-Bridge-Group/61583519242777/" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} className="text-primary shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
              </Link>
              <Link href="https://www.youtube.com/@trustbridgegroup" target="_blank" rel="noopener noreferrer">
                <Youtube size={24} className="text-primary shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center pt-8 border-t border-gray-100 text-luxury-textMuted text-xs font-bold uppercase tracking-[2px] opacity-60">
        © {new Date().getFullYear()} Trust Bridge Group. Crafted for Excellence.
      </div>
    </footer>
  );
}
