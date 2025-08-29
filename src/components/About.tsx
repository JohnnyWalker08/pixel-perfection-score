import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BookOpen, Handshake, Award, Crown, Sparkles } from 'lucide-react';
import luxuryCommunityImage from '@/assets/luxury-community.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Divine Love",
      description: "Experiencing and sharing the transformative power of unconditional love in every interaction."
    },
    {
      icon: Users,
      title: "Sacred Community", 
      description: "Building profound connections that transcend the ordinary and create lasting spiritual bonds."
    },
    {
      icon: BookOpen,
      title: "Timeless Wisdom",
      description: "Discovering ancient truths that illuminate modern life with purpose and meaning."
    },
    {
      icon: Handshake,
      title: "Purposeful Service",
      description: "Channeling our gifts into meaningful action that creates positive change in the world."
    }
  ];

  const leadership = [
    {
      name: "Pastor Sarah Johnson",
      role: "Senior Pastor",
      initials: "SJ",
      description: "Visionary leader with 15+ years of transformational ministry",
      gradient: "bg-rose-gold-gradient"
    },
    {
      name: "Michael Davis", 
      role: "Worship Pastor",
      initials: "MD",
      description: "Master of musical excellence and spiritual inspiration",
      gradient: "bg-luxury-gradient"
    },
    {
      name: "Lisa Martinez",
      role: "Children's Pastor", 
      initials: "LM",
      description: "Nurturing young hearts with creativity and boundless love",
      gradient: "bg-hero-gradient"
    }
  ];

  return (
    <section id="about" className="py-luxury bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Luxury Hero Section */}
        <div className="grid xl:grid-cols-2 gap-16 items-center mb-luxury">
          <div className="animate-luxury-fade-in">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-secondary/20">
              <Award className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-primary">Excellence in Ministry Since 1990</span>
            </div>

            <h2 className="font-display text-display-xl md:text-display-2xl font-bold mb-8 leading-tight">
              About Our
              <span className="block text-gradient bg-rose-gold-gradient bg-clip-text text-transparent">
                Sanctuary
              </span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                For over three decades, Grace Community Church has stood as a 
                <span className="font-semibold text-secondary"> beacon of excellence</span> in spiritual 
                leadership, creating an atmosphere where the divine meets the extraordinary.
              </p>
              
              <p className="text-muted-foreground">
                We are more than a congregation—we are a curated community of souls united by our pursuit of 
                <span className="font-semibold text-accent"> spiritual excellence</span> and our commitment 
                to creating transformational experiences that elevate every aspect of life.
              </p>
            </div>

            {/* Luxury Quote Card */}
            <div className="relative mt-8 p-8 glass rounded-luxury border border-secondary/20 shadow-gold">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-rose-gold-gradient rounded-full flex items-center justify-center">
                <Crown className="h-4 w-4 text-white" />
              </div>
              <blockquote className="text-xl italic text-primary font-light mb-4 leading-relaxed">
                "Where faith transcends the ordinary and souls discover their extraordinary purpose."
              </blockquote>
              <cite className="text-secondary font-semibold">Pastor Sarah Johnson</cite>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-rose-gold-gradient/10 rounded-full blur-2xl"></div>
            </div>
          </div>
          
          <div className="animate-premium-slide-up">
            <div className="relative group">
              <img 
                src={luxuryCommunityImage}
                alt="Elegant community gathering in luxury church interior"
                className="rounded-luxury shadow-luxury w-full h-[600px] object-cover magnetic group-hover:shadow-premium transition-all duration-700"
              />
              <div className="absolute inset-0 bg-hero-gradient/20 rounded-luxury group-hover:bg-transparent transition-all duration-700"></div>
              <div className="absolute -inset-4 bg-rose-gold-gradient/20 rounded-luxury blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>

        {/* Premium Values Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-accent/20">
            <Sparkles className="h-5 w-5 text-accent animate-pulse" />
            <span className="text-sm font-medium text-primary">Our Core Values</span>
          </div>
          
          <h3 className="font-display text-display-lg font-bold mb-6">
            Principles of <span className="text-gradient">Excellence</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            These sacred principles guide our community and shape every interaction, 
            creating an environment where souls flourish and purpose is discovered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-luxury">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-luxury transition-all duration-700 hover:-translate-y-2 animate-elegant-scale border-0 glass rounded-luxury magnetic" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-hero-gradient rounded-luxury flex items-center justify-center mx-auto mb-6 shadow-elegant group-hover:shadow-glow transition-all duration-700">
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="font-display font-bold text-xl mb-4 text-primary group-hover:text-secondary transition-colors duration-500">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-secondary/5 rounded-full blur-xl group-hover:bg-secondary/10 transition-all duration-700"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ultra-Premium Leadership Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-luxury-gold/30">
            <Crown className="h-5 w-5 text-luxury-gold" />
            <span className="text-sm font-medium text-primary">Spiritual Leadership</span>
          </div>
          
          <h3 className="font-display text-display-lg font-bold mb-6">
            Shepherds of <span className="text-gradient">Excellence</span>
          </h3>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {leadership.map((leader, index) => (
            <div 
              key={index}
              className="text-center group animate-luxury-fade-in magnetic"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-8">
                <div className={`w-40 h-40 ${leader.gradient} rounded-luxury mx-auto flex items-center justify-center shadow-luxury group-hover:shadow-glow transition-all duration-700 text-white text-4xl font-bold`}>
                  {leader.initials}
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-secondary via-accent to-secondary opacity-0 group-hover:opacity-20 rounded-luxury blur transition-opacity duration-700"></div>
              </div>
              
              <h4 className="font-display text-2xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors duration-500">
                {leader.name}
              </h4>
              <p className="text-secondary font-semibold text-lg mb-4">{leader.role}</p>
              <p className="text-muted-foreground leading-relaxed">{leader.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;