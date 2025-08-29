import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MapPin, Phone, Clock, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'glass backdrop-blur-luxury border-b border-white/10 shadow-luxury' 
        : 'bg-transparent'
    }`}>
      {/* Premium Top Bar */}
      <div className={`border-b border-white/10 transition-all duration-700 ${
        isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
      }`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-center lg:justify-between items-center text-sm text-white/80">
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-2 hover:text-secondary transition-colors">
                <MapPin className="h-4 w-4" />
                <span>123 Faith Street, Hope City</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" />
                <span>(555) 123-HOPE</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-secondary font-medium">
              <Clock className="h-4 w-4" />
              <span>Sunday Service: 10:00 AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Main Navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Premium Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-rose-gold-gradient rounded-luxury flex items-center justify-center shadow-gold group-hover:shadow-glow transition-all duration-700 magnetic">
                <Sparkles className="h-6 w-6 text-white animate-pulse" />
              </div>
              <div className="absolute -inset-1 bg-rose-gold-gradient rounded-luxury opacity-20 blur animate-luxury-glow"></div>
            </div>
            <div>
              <h1 className="font-display font-bold text-2xl text-white group-hover:text-secondary transition-colors duration-500">
                Grace Community
              </h1>
              <p className="text-sm text-white/70 -mt-1 group-hover:text-secondary/80 transition-colors duration-500">
                Church of Excellence
              </p>
            </div>
          </div>

          {/* Ultra-Premium Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {['Home', 'About', 'Services', 'Ministries', 'Events', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative text-white/90 hover:text-white font-medium text-lg transition-all duration-500 group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-gold-gradient group-hover:w-full transition-all duration-700 ease-luxury"></span>
                <span className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </a>
            ))}
          </nav>

          {/* Premium Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              className="glass text-white border border-white/20 hover:bg-white/10 px-6 py-3 rounded-premium magnetic transition-all duration-500"
            >
              Give Online
            </Button>
            <Button className="btn-luxury text-white px-8 py-3 rounded-premium magnetic shadow-gold hover:shadow-glow">
              Visit Us
            </Button>
          </div>

          {/* Luxury Mobile Menu Button */}
          <button
            className="lg:hidden glass p-3 rounded-premium magnetic"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 text-white transition-all duration-500 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
              <X className={`absolute inset-0 text-white transition-all duration-500 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
            </div>
          </button>
        </div>

        {/* Premium Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-700 ease-luxury overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 mt-6' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="glass rounded-luxury p-6 border border-white/10">
            <nav className="flex flex-col space-y-4">
              {['Home', 'About', 'Services', 'Ministries', 'Events', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-white/90 hover:text-secondary font-medium text-lg transition-colors duration-500 py-2 border-b border-white/10 last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
                <Button className="glass text-white border border-white/20 hover:bg-white/10 rounded-premium">
                  Give Online
                </Button>
                <Button className="btn-luxury text-white rounded-premium shadow-gold">
                  Visit Us
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;