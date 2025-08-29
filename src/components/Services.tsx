import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Music, Baby, Coffee, Calendar, Users, Sparkles, Crown, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      time: "9:00 AM - 9:45 AM",
      title: "Sacred Study",
      description: "Immersive biblical exploration designed to deepen understanding and spiritual insight",
      icon: Clock,
      features: ["Expert-Led Discussions", "Interactive Learning", "Community Reflection"],
      gradient: "bg-hero-gradient"
    },
    {
      time: "10:00 AM - 11:30 AM",
      title: "Divine Worship",
      description: "An extraordinary spiritual experience featuring inspiring music and transformational teaching",
      icon: Music,
      features: ["Contemporary Excellence", "Biblical Teaching", "Sacred Community"],
      gradient: "bg-rose-gold-gradient"
    },
    {
      time: "11:30 AM - 12:00 PM",
      title: "Fellowship Sanctuary",
      description: "Connect with our curated community over artisanal refreshments and meaningful conversation",
      icon: Coffee,
      features: ["Premium Hospitality", "Welcome Center", "Community Connection"],
      gradient: "bg-luxury-gradient"
    }
  ];

  const specialMinistries = [
    {
      title: "Children's Academy",
      description: "Premium faith-building programs in a safe, inspiring environment for young minds",
      icon: Baby,
      age: "Birth - 12 years",
      gradient: "bg-hero-gradient"
    },
    {
      title: "Youth Excellence",
      description: "Empowering tomorrow's leaders through engaging programs and mentorship",
      icon: Users,
      age: "13 - 18 years", 
      gradient: "bg-luxury-gradient"
    },
    {
      title: "Special Celebrations",
      description: "Exceptional holiday services, baptisms, and milestone celebrations",
      icon: Calendar,
      age: "All welcome",
      gradient: "bg-rose-gold-gradient"
    }
  ];

  const expectations = [
    {
      number: 1,
      title: "Exceptional Welcome",
      description: "Our hospitality team provides a warm, luxurious welcome experience"
    },
    {
      number: 2,
      title: "Premium Comfort",
      description: "Elegant seating and carefully designed spaces for optimal worship experience"
    },
    {
      number: 3,
      title: "Inspiring Excellence", 
      description: "World-class music and profound biblical teaching that transforms lives"
    },
    {
      number: 4,
      title: "Meaningful Connection",
      description: "Join our fellowship time and discover lasting relationships"
    }
  ];

  return (
    <section id="services" className="py-luxury bg-gradient-to-b from-muted/10 via-background to-muted/10 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Ultra-Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-8 py-4 mb-10 border border-secondary/20 shadow-gold">
            <Crown className="h-6 w-6 text-secondary animate-pulse" />
            <span className="font-medium text-primary">Worship Experience</span>
          </div>

          <h2 className="font-display text-display-xl md:text-display-2xl font-bold mb-8 leading-tight">
            Join Our
            <span className="block text-gradient bg-rose-gold-gradient bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              Sacred Gathering
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Every Sunday, we create an atmosphere of 
            <span className="font-semibold text-secondary"> unparalleled spiritual excellence</span>, 
            where worship transcends the ordinary and hearts are transformed.
          </p>
        </div>

        {/* Luxury Service Schedule */}
        <div className="mb-luxury">
          <h3 className="font-display text-display-lg font-bold text-center mb-16">
            Sunday <span className="text-gradient">Experience</span>
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-luxury transition-all duration-700 hover:-translate-y-3 animate-luxury-fade-in border-0 glass rounded-luxury magnetic overflow-hidden" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className={`w-20 h-20 ${service.gradient} rounded-luxury flex items-center justify-center mx-auto mb-6 shadow-gold group-hover:shadow-glow transition-all duration-700 relative z-10`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-secondary mb-3 font-display">
                    {service.time}
                  </div>
                  <CardTitle className="text-2xl text-primary font-display font-bold group-hover:text-secondary transition-colors duration-500">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center px-8 pb-8">
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm font-medium">
                        <div className="w-2 h-2 bg-rose-gold-gradient rounded-full mr-3 shadow-sm"></div>
                        <span className="text-primary">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full btn-luxury text-white rounded-premium shadow-gold hover:shadow-glow transition-all duration-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium "What to Expect" Section */}
        <div className="glass rounded-luxury p-12 md:p-16 mb-luxury border border-secondary/10 shadow-premium relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-gold-gradient/5 rounded-full blur-3xl"></div>
          
          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-accent/20">
              <Sparkles className="h-5 w-5 text-accent animate-pulse" />
              <span className="text-sm font-medium text-primary">First Visit</span>
            </div>
            
            <h3 className="font-display text-display-lg font-bold mb-6">
              What to <span className="text-gradient">Expect</span>
            </h3>
            
            <p className="text-xl text-muted-foreground font-light">
              Your extraordinary spiritual journey begins here
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 relative z-10">
            {expectations.map((item, index) => (
              <div 
                key={index}
                className="text-center group animate-elegant-scale magnetic"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-hero-gradient rounded-luxury flex items-center justify-center mx-auto mb-6 shadow-elegant group-hover:shadow-glow transition-all duration-700 text-white font-bold text-2xl">
                  {item.number}
                </div>
                <h4 className="font-display font-bold text-xl mb-4 text-primary group-hover:text-secondary transition-colors duration-500">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Ministries */}
        <div className="mb-luxury">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-luxury-gold/30">
              <Heart className="h-5 w-5 text-luxury-gold animate-pulse" />
              <span className="text-sm font-medium text-primary">Ministry Excellence</span>
            </div>
            
            <h3 className="font-display text-display-lg font-bold mb-6">
              Specialized <span className="text-gradient">Programs</span>
            </h3>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10 mb-16">
            {specialMinistries.map((ministry, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-luxury transition-all duration-700 animate-premium-slide-up border-0 glass rounded-luxury magnetic overflow-hidden" 
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-10 text-center relative">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-all duration-700"></div>
                  
                  <div className={`w-20 h-20 ${ministry.gradient} rounded-luxury flex items-center justify-center mx-auto mb-6 shadow-gold group-hover:shadow-glow transition-all duration-700 relative z-10`}>
                    <ministry.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <h4 className="font-display font-bold text-2xl mb-3 text-primary group-hover:text-secondary transition-colors duration-500">
                    {ministry.title}
                  </h4>
                  
                  <p className="text-secondary font-semibold text-lg mb-6">{ministry.age}</p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {ministry.description}
                  </p>
                  
                  <Button className="w-full glass border border-secondary/20 hover:bg-secondary/10 text-primary hover:text-secondary rounded-premium transition-all duration-500">
                    Discover More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="btn-luxury text-white px-16 py-6 text-xl rounded-premium magnetic shadow-luxury hover:shadow-gold transition-all duration-700"
            >
              Plan Your First Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;