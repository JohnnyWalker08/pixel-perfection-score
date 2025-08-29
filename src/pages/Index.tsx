import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Ministries from '@/components/Ministries';
import Contact from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { Sparkles, MapPin, Phone, Mail } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Ministries />
        <Contact />
      </main>
      
      {/* Ultra-Premium Footer */}
      <footer className="bg-primary text-white py-20 relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Premium Logo Section */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="w-12 h-12 bg-rose-gold-gradient rounded-luxury flex items-center justify-center shadow-gold group-hover:shadow-glow transition-all duration-700">
                  <Sparkles className="h-6 w-6 text-white animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl">Grace Community</h3>
                  <p className="text-sm text-white/80 -mt-1">Church of Excellence</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed font-light">
                A sanctuary of faith where excellence meets spirituality, 
                creating transformational experiences for every soul.
              </p>
            </div>
            
            {/* Navigation Links */}
            <div>
              <h4 className="font-display font-bold text-xl mb-6 text-secondary">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Service Times', 'Ministries', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase().replace(' ', '')}`} 
                      className="text-white/80 hover:text-secondary transition-colors duration-500 font-medium"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Ministry Links */}
            <div>
              <h4 className="font-display font-bold text-xl mb-6 text-secondary">Ministries</h4>
              <ul className="space-y-3">
                {['Children\'s Academy', 'Youth Excellence', 'Small Groups', 'Community Outreach'].map((ministry) => (
                  <li key={ministry}>
                    <a 
                      href="#ministries" 
                      className="text-white/80 hover:text-secondary transition-colors duration-500 font-medium"
                    >
                      {ministry}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Information */}
            <div>
              <h4 className="font-display font-bold text-xl mb-6 text-secondary">Connect</h4>
              <div className="space-y-4 text-white/80">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-1 text-secondary" />
                  <div>
                    <p>123 Faith Street</p>
                    <p>Hope City, HC 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <p>(555) 123-HOPE</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <p>info@gracecc.org</p>
                </div>
              </div>
              
              {/* Premium Action Buttons */}
              <div className="flex flex-col space-y-3 mt-8">
                <Button className="glass border border-white/20 hover:bg-white/10 text-white rounded-premium transition-all duration-500">
                  Give Online
                </Button>
                <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-premium shadow-gold hover:shadow-glow transition-all duration-700">
                  Visit Us
                </Button>
              </div>
            </div>
          </div>
          
          {/* Premium Footer Bottom */}
          <div className="border-t border-white/20 pt-12 text-center">
            <div className="glass rounded-full px-8 py-4 inline-block border border-white/10 mb-6">
              <p className="text-white/80 font-light">
                © 2024 Grace Community Church. All rights reserved.
              </p>
            </div>
            <p className="text-secondary font-medium">
              Crafted with excellence for our sacred community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;