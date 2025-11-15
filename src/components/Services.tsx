import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Music, Baby, Coffee, Calendar, Users, Sparkles, Crown, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      time: "8:00 AM - 9:00 AM",
      title: "Sunday School",
      description: "Interactive Bible study with freedom to ask questions, deepening your understanding of God's Word",
      icon: Clock,
      features: ["Open Discussion", "Biblical Teaching", "Question & Answer"],
      gradient: "bg-hero-gradient"
    },
    {
      time: "9:00 AM - 9:45 AM",
      title: "Worship & Praise",
      description: "Powerful worship, anointed praise, and hymns that usher in the presence of the Holy Spirit",
      icon: Music,
      features: ["Spirit-Led Worship", "Hymns & Songs", "Divine Atmosphere"],
      gradient: "bg-rose-gold-gradient"
    },
    {
      time: "9:45 AM - 11:30 AM",
      title: "Main Service",
      description: "Anointed preaching of God's Word with manifestation of the Holy Spirit, signs and wonders",
      icon: Sparkles,
      features: ["Biblical Preaching", "Holy Spirit Manifestation", "Altar Ministry"],
      gradient: "bg-luxury-gradient"
    }
  ];

  const weeklyPrograms = [
    {
      title: "Bible Study",
      description: "Deep diving into Scripture with practical application for victorious Christian living",
      icon: Baby,
      day: "Every Tuesday",
      gradient: "bg-hero-gradient"
    },
    {
      title: "Holy Ghost Service",
      description: "Powerful encounters with God through prayer, worship, and the manifestation of spiritual gifts",
      icon: Users,
      day: "Every Thursday", 
      gradient: "bg-luxury-gradient"
    },
    {
      title: "Night of Encounter",
      description: "A night set apart for divine breakthroughs, miracles, and intimate communion with God",
      icon: Calendar,
      day: "3rd Wednesday Monthly",
      gradient: "bg-rose-gold-gradient"
    }
  ];

  const expectations = [
    {
      number: 1,
      title: "Warm Welcome",
      description: "Experience genuine love and hospitality as you enter our sanctuary"
    },
    {
      number: 2,
      title: "Powerful Worship",
      description: "Encounter God's presence through Spirit-led worship and praise"
    },
    {
      number: 3,
      title: "Anointed Teaching", 
      description: "Receive life-transforming biblical teaching that builds your faith"
    },
    {
      number: 4,
      title: "Holy Spirit Presence",
      description: "Experience the manifestation of God's power through signs and wonders"
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
            Join Us for
            <span className="block text-gradient bg-rose-gold-gradient bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              Sunday Worship
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Every Sunday at <span className="font-semibold text-secondary">8:00 AM</span>, 
            we gather to experience God's transforming power through worship, teaching, and the 
            <span className="font-semibold text-secondary"> manifestation of the Holy Spirit</span>.
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
              <span className="text-sm font-medium text-primary">First Time?</span>
            </div>
            
            <h3 className="font-display text-display-lg font-bold mb-6">
              What to <span className="text-gradient">Expect</span>
            </h3>
            
            <p className="text-xl text-muted-foreground font-light">
              This is not just a gathering—it's an encounter with the living God
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

        {/* Weekly Programs */}
        <div className="mb-luxury">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-luxury-gold/30">
              <Heart className="h-5 w-5 text-luxury-gold animate-pulse" />
              <span className="text-sm font-medium text-primary">Weekly Programs</span>
            </div>
            
            <h3 className="font-display text-display-lg font-bold mb-6">
              Midweek <span className="text-gradient">Gatherings</span>
            </h3>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10 mb-16">
            {weeklyPrograms.map((ministry, index) => (
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
                  
                  <p className="text-secondary font-semibold text-lg mb-6">{ministry.day}</p>
                  
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
              <a href="tel:+2348061696838" className="flex items-center">
                Request Prayer
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;