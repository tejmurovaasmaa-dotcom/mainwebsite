
import { Building2, MapPin, Phone, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container-custom mx-auto px-5">
        <h1 className="text-3xl md:text-5xl font-heading text-luxury-accent font-bold mb-12 text-center uppercase tracking-widest relative">
            Privacy Policy
            <span className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 w-24 h-1 bg-primary"></span>
        </h1>
        
        <div className="max-w-4xl mx-auto text-luxury-textMuted text-base md:text-lg leading-relaxed space-y-10 font-body">
            <p className="pb-4 italic border-b border-gray-100">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section>
                <h2 className="text-xl md:text-2xl font-heading text-luxury-accent font-bold mb-4 flex items-center gap-3">
                    <span className="text-primary">01.</span> Introduction
                </h2>
                <p>
                    Welcome to <strong className="text-luxury-accent">Trust Bridge Group</strong>. We respect your privacy and are committed to protecting your personal data. 
                    This privacy policy will inform you as to how we look after your personal data when you visit our website 
                    (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                </p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-heading text-luxury-accent font-bold mb-4 flex items-center gap-3">
                    <span className="text-primary">02.</span> Information We Collect
                </h2>
                <p className="mb-4">
                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                    <li><strong className="text-luxury-accent">Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                    <li><strong className="text-luxury-accent">Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                    <li><strong className="text-luxury-accent">Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                    <li><strong className="text-luxury-accent">Usage Data:</strong> includes information about how you use our website, products and services.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-heading text-luxury-accent font-bold mb-4 flex items-center gap-3">
                    <span className="text-primary">03.</span> How We Use Your Information
                </h2>
                <p>
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-primary mt-4">
                    <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
                    {/* <li>To manage Your Account: to manage Your registration as a user of the Service.</li> */}
                    <li>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
                    <li>To provide You with news, special offers and general information about other goods, services and events which we offer.</li>
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-heading text-luxury-accent font-bold mb-4 flex items-center gap-3">
                    <span className="text-primary">04.</span> Data Security
                </h2>
                <p>
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
                </p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-heading text-luxury-accent font-bold mb-4 flex items-center gap-3">
                    <span className="text-primary">05.</span> Cookies
                </h2>
                <p>
                    We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. You can instruct your browser to refuse all Cookies or to indicate when a Cookie is being sent.
                </p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-heading text-luxury-accent font-bold mb-4 flex items-center gap-3">
                    <span className="text-primary">06.</span> Third-Party Links
                </h2>
                <p>
                    This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
                </p>
            </section>

             <section>
                <h2 className="text-xl md:text-2xl font-heading text-luxury-accent font-bold mb-4 flex items-center gap-3">
                    <span className="text-primary">07.</span> Contact Us
                </h2>
                <p className="mb-6">
                    If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <div className="p-8 bg-secondary/30 rounded-xl border border-primary/10 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="font-heading font-bold text-luxury-accent text-xl mb-6 flex items-center gap-2">
                        <Building2 className="text-primary" size={24} />
                        Trust Bridge Group
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3 group">
                            <span className="mt-1 p-2 bg-white rounded-full text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <MapPin size={20} />
                            </span>
                            <p className="text-luxury-textMuted group-hover:text-luxury-accent transition-colors pt-1">
                                2216-17, Tower B, Bhutani Alphathum, <br/>Sector 90, Noida, Uttar Pradesh 201305
                            </p>
                        </div>
                        <div className="flex items-center gap-3 group">
                            <span className="p-2 bg-white rounded-full text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <Mail size={20} />
                            </span>
                            <a href="mailto:info@trustbridgegroup.in" className="text-luxury-textMuted hover:text-primary transition-colors font-medium">info@trustbridgegroup.in</a>
                        </div>
                        <div className="flex items-center gap-3 group">
                            <span className="p-2 bg-white rounded-full text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <Phone size={20} />
                            </span>
                            <a href="tel:+917303975006" className="text-luxury-textMuted hover:text-primary transition-colors font-medium">+91 730 397 5006</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>
    </div>
  );
}