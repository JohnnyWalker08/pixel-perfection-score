import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Events from '@/components/Events';
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
        <Events />
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
                  <h3 className="font-display font-bold text-2xl">BCM</h3>
                  <p className="text-sm text-white/80 -mt-1">Chapel of Redemption</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed font-light">
                Christ Beulah Christian Ministry - A Bible-believing church where the Holy Spirit moves, 
                souls are saved, and lives transformed for God's glory.
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
                    <p>Adedeji Estate Phase 1</p>
                    <p>Off Ado Road, Akure, Ondo State</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 mt-1 text-secondary" />
                  <div>
                    <p>08034693725</p>
                    <p>08032314796 • 08061696838</p>
                  </div>
                </div>
              </div>
              
              {/* Premium Action Buttons */}
              <div className="flex flex-col space-y-3 mt-8">
                <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-premium shadow-gold hover:shadow-glow transition-all duration-700">
                  <a href="tel:+2348061696838">Request Prayer</a>
                </Button>
                <Button className="glass border border-white/20 hover:bg-white/10 text-white rounded-premium transition-all duration-500">
                  <a href="https://wa.me/2348061696838" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Premium Footer Bottom */}
          <div className="border-t border-white/20 pt-12 text-center">
            <div className="glass rounded-full px-8 py-4 inline-block border border-white/10 mb-6">
              <p className="text-white/80 font-light">
                © 2024 Christ Beulah Christian Ministry. All rights reserved.
              </p>
            </div>
            <p className="text-secondary font-medium">
              Winning souls for Christ's Kingdom
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;