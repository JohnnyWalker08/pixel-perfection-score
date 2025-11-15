import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Sparkles, Crown, Star } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Special Outreach Program",
      dates: "November 20-22, 2025",
      location: "Ijapo Estate (2nd Assembly)",
      description: "Join us for a powerful evangelistic outreach as we take the Gospel to the streets of Ijapo Estate. Experience the joy of soul-winning and witness God's power in action.",
      icon: Star,
      gradient: "bg-hero-gradient",
      featured: true
    },
    {
      title: "Annual Conference",
      dates: "December 3-4, 2025",
      location: "Main Assembly, Adedeji Estate",
      description: "Two days of powerful teaching, prophetic ministry, and divine encounters that will transform your walk with God.",
      icon: Crown,
      gradient: "bg-rose-gold-gradient",
      featured: true
    },
    {
      title: "Annual Convention",
      dates: "December 5-7, 2025 (Sat-Sun)",
      location: "Main Assembly, Adedeji Estate",
      description: "The highlight of our year! Experience unprecedented moves of God with healing, miracles, and life-changing testimonies.",
      icon: Sparkles,
      gradient: "bg-luxury-gradient",
      featured: true
    }
  ];

  return (
    <section id="events" className="py-luxury bg-gradient-to-b from-muted/10 via-background to-muted/10 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Ultra-Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-8 py-4 mb-10 border border-secondary/20 shadow-gold">
            <Calendar className="h-6 w-6 text-secondary animate-pulse" />
            <span className="font-medium text-primary">Upcoming Events</span>
          </div>

          <h2 className="font-display text-display-xl md:text-display-2xl font-bold mb-8 leading-tight">
            Special
            <span className="block text-gradient bg-rose-gold-gradient bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              Gatherings
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Mark your calendars for these <span className="font-semibold text-secondary">life-transforming events</span> where 
            heaven touches earth
          </p>
        </div>

        {/* Special Events Grid */}
        <div className="grid lg:grid-cols-3 gap-10 mb-luxury">
          {upcomingEvents.map((event, index) => (
            <Card 
              key={index}
              className="group hover:shadow-luxury transition-all duration-700 hover:-translate-y-3 animate-luxury-fade-in border-0 glass rounded-luxury magnetic overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-10 relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-all duration-700"></div>
                
                <div className={`w-20 h-20 ${event.gradient} rounded-luxury flex items-center justify-center mx-auto mb-6 shadow-gold group-hover:shadow-glow transition-all duration-700 relative z-10`}>
                  <event.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="font-display font-bold text-2xl mb-4 text-primary group-hover:text-secondary transition-colors duration-500 text-center">
                  {event.title}
                </h3>
                
                <div className="space-y-3 mb-6 relative z-10">
                  <div className="flex items-center justify-center text-sm font-medium">
                    <Calendar className="h-4 w-4 text-secondary mr-2" />
                    <span className="text-primary">{event.dates}</span>
                  </div>
                  
                  <div className="flex items-start justify-center text-sm font-medium">
                    <MapPin className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-primary text-center">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-8 text-center relative z-10">
                  {event.description}
                </p>
                
                <Button className="w-full btn-luxury text-white rounded-premium shadow-gold hover:shadow-glow transition-all duration-700 relative z-10">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Assembly Locations */}
        <div className="glass rounded-luxury p-12 md:p-16 border border-secondary/10 shadow-premium relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-gold-gradient/5 rounded-full blur-3xl"></div>
          
          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-accent/20">
              <MapPin className="h-5 w-5 text-accent animate-pulse" />
              <span className="text-sm font-medium text-primary">Our Locations</span>
            </div>
            
            <h3 className="font-display text-display-lg font-bold mb-6">
              Our <span className="text-gradient">Assemblies</span>
            </h3>
            
            <p className="text-xl text-muted-foreground font-light">
              Two locations to serve and reach souls across Akure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto relative z-10">
            <div className="text-center group animate-premium-slide-up magnetic">
              <div className="glass rounded-luxury p-10 border border-secondary/10 hover:border-secondary/30 transition-all duration-700 hover:shadow-gold">
                <div className="w-20 h-20 bg-hero-gradient rounded-luxury mx-auto mb-6 flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-700">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                
                <h4 className="font-display font-bold text-2xl mb-2 text-primary group-hover:text-secondary transition-colors duration-500">
                  Main Assembly
                </h4>
                
                <p className="text-luxury-gold font-semibold text-lg mb-6">Adedeji Estate</p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Adedeji Estate Phase 1<br />
                  Off Ado Road<br />
                  Akure, Ondo State, Nigeria
                </p>
                
                <Button className="glass border border-secondary/20 hover:bg-secondary/10 text-primary hover:text-secondary rounded-premium transition-all duration-500">
                  Get Directions
                </Button>
              </div>
            </div>
            
            <div className="text-center group animate-premium-slide-up magnetic" style={{ animationDelay: '0.15s' }}>
              <div className="glass rounded-luxury p-10 border border-secondary/10 hover:border-secondary/30 transition-all duration-700 hover:shadow-gold">
                <div className="w-20 h-20 bg-luxury-gradient rounded-luxury mx-auto mb-6 flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-700">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                
                <h4 className="font-display font-bold text-2xl mb-2 text-primary group-hover:text-secondary transition-colors duration-500">
                  Second Assembly
                </h4>
                
                <p className="text-luxury-gold font-semibold text-lg mb-6">Ijapo Estate</p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ijapo Estate<br />
                  Akure, Ondo State, Nigeria<br />
                  <span className="text-sm italic text-muted-foreground/80">Special programs and outreaches</span>
                </p>
                
                <Button className="glass border border-secondary/20 hover:bg-secondary/10 text-primary hover:text-secondary rounded-premium transition-all duration-500">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;