import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MapPin, Phone, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      {/* Top Bar */}
      <div className="border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-center md:justify-between items-center text-sm text-muted-foreground">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Faith Street, Hope City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-HOPE</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Sunday Service: 10:00 AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-hero-gradient rounded-full flex items-center justify-center text-white font-bold text-lg">
              G
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl text-primary">Grace Community</h1>
              <p className="text-sm text-muted-foreground -mt-1">Church</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
            <a href="#ministries" className="text-foreground hover:text-primary transition-colors font-medium">Ministries</a>
            <a href="#events" className="text-foreground hover:text-primary transition-colors font-medium">Events</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">Give Online</Button>
            <Button className="bg-hero-gradient shadow-gentle hover:shadow-warm" size="sm">Visit Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
              <a href="#ministries" className="text-foreground hover:text-primary transition-colors font-medium">Ministries</a>
              <a href="#events" className="text-foreground hover:text-primary transition-colors font-medium">Events</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">Give Online</Button>
                <Button className="bg-hero-gradient" size="sm">Visit Us</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;