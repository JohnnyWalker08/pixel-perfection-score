import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ArrowRight, Sparkles, Heart } from 'lucide-react';
import luxuryHeroImage from '@/assets/luxury-church-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-mesh-gradient"></div>
        <img 
          src={luxuryHeroImage} 
          alt="Architectural masterpiece church exterior"
          className="w-full h-full object-cover animate-parallax"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-rose-gold-gradient rounded-full opacity-20 animate-float-gentle blur-sm"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-luxury-gradient rounded-full opacity-25 animate-float-gentle blur-sm" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-accent/30 rounded-full animate-float-gentle blur-sm" style={{ animationDelay: '4s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-6xl mx-auto">
          {/* Luxury Badge */}
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 animate-luxury-fade-in">
            <Sparkles className="h-5 w-5 text-secondary animate-pulse" />
            <span className="text-sm font-medium text-white/90">Winning Souls for Christ's Kingdom</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-display-2xl md:text-[8rem] font-bold mb-8 leading-[0.9] animate-luxury-fade-in" style={{ animationDelay: '0.2s' }}>
            Christ Beulah
            <span className="block text-gradient animate-shimmer bg-gradient-to-r from-secondary via-luxury-gold to-secondary bg-[length:200%_100%]">
              Christian Ministry
            </span>
          </h1>

          {/* Sophisticated Subtitle */}
          <p className="text-xl md:text-3xl mb-12 text-white/85 font-light leading-relaxed max-w-4xl mx-auto animate-premium-slide-up" style={{ animationDelay: '0.4s' }}>
            <span className="font-semibold text-secondary italic">Chapel of Redemption</span> - Where the Holy Spirit moves powerfully, transforming lives and preparing vessels for the great revival. Every soul matters to God.
          </p>
          
          {/* Ultra-Premium CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center mb-16 animate-elegant-scale" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="btn-luxury text-white font-semibold px-12 py-6 text-xl rounded-luxury h-auto magnetic group shadow-luxury hover:shadow-gold transition-all duration-700"
            >
              <span className="flex items-center">
                Begin Your Journey 
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button 
              size="lg" 
              className="glass text-white hover:bg-white/20 border-2 border-white/30 px-12 py-6 text-xl rounded-luxury h-auto magnetic backdrop-blur-luxury transition-all duration-700"
            >
              <span className="flex items-center">
                <Heart className="mr-3 h-6 w-6" />
                Experience Worship
              </span>
            </Button>
          </div>

          {/* Luxury Service Cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto animate-luxury-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="glass rounded-luxury p-8 hover:bg-white/15 transition-all duration-700 magnetic group border border-white/20">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-rose-gold-gradient rounded-luxury flex items-center justify-center shadow-gold group-hover:shadow-glow transition-all duration-700">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Sunday Worship</h3>
              <div className="text-white/80 mb-4 text-lg space-y-2 font-light">
                <p>Sunday School: <span className="font-semibold text-secondary">8:00 AM - 9:00 AM</span></p>
                <p>Main Service: <span className="font-semibold text-secondary">9:00 AM - 11:30 AM</span></p>
              </div>
              <p className="text-white/75 mb-6 leading-relaxed">
                Experience powerful worship, anointed teaching, and the manifestation of the Holy Spirit every Sunday.
              </p>
              <Button className="w-full glass border border-white/30 hover:bg-white/20 text-white rounded-premium font-semibold">
                Learn More
              </Button>
            </div>
            
            <div className="glass rounded-luxury p-8 hover:bg-white/15 transition-all duration-700 magnetic group border border-white/20">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-luxury-gradient rounded-luxury flex items-center justify-center shadow-gold group-hover:shadow-glow transition-all duration-700">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Visit Us</h3>
              <p className="text-white/80 mb-4 text-lg leading-relaxed font-light">
                <strong>Main Assembly:</strong><br />
                Adedeji Estate Phase 1<br />
                Off Ado Road, Akure, Ondo State
              </p>
              <p className="text-white/75 mb-6 leading-relaxed">
                Come and experience the power of God in our Spirit-filled gatherings. All are welcome!
              </p>
              <Button className="w-full glass border border-white/30 hover:bg-white/20 text-white rounded-premium font-semibold">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="glass rounded-full p-4 animate-bounce">
          <div className="w-1 h-8 bg-rose-gold-gradient rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Premium Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-luxury-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-luxury-glow" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;