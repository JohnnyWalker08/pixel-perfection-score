import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Heart, Users, Flame, Crown, Sparkles, Cross } from 'lucide-react';
import luxuryCommunityImage from '@/assets/luxury-community.jpg';

const About = () => {
  const coreValues = [
    {
      icon: Cross,
      title: "Bible-Centered Teaching",
      description: "Strictly founded on God's Word, we hold fast to biblical truth and sound doctrine in all things.",
      gradient: "bg-hero-gradient"
    },
    {
      icon: Flame,
      title: "Holy Spirit Manifestation",
      description: "We embrace the power and gifts of the Holy Spirit, experiencing signs, wonders, and divine encounters.",
      gradient: "bg-rose-gold-gradient"
    },
    {
      icon: Heart,
      title: "Soul-Winning Mission",
      description: "Passionate about evangelism, we are committed to bringing the Gospel to every soul and seeing lives transformed.",
      gradient: "bg-luxury-gradient"
    },
    {
      icon: Users,
      title: "Spiritual Growth",
      description: "Deepening our relationship with God and establishing ourselves firmly in His presence and purpose.",
      gradient: "bg-hero-gradient"
    }
  ];

  const leadership = [
    {
      name: "Pastor (Mrs) Faith Olateju Ajayi",
      title: "Presiding Pastor",
      description: "Leading the ministry with wisdom, grace, and an unwavering commitment to God's purpose for His people."
    },
    {
      name: "Pastor Femi Orunmole",
      title: "Pastor",
      description: "Serving with dedication to nurture believers and spread the Gospel with boldness and compassion."
    }
  ];

  return (
    <section id="about" className="py-luxury bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Ultra-Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-8 py-4 mb-10 border border-secondary/20 shadow-gold">
            <Crown className="h-6 w-6 text-secondary animate-pulse" />
            <span className="font-medium text-primary">Our Story</span>
          </div>

          <h2 className="font-display text-display-xl md:text-display-2xl font-bold mb-8 leading-tight">
            A Ministry
            <span className="block text-gradient bg-rose-gold-gradient bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              Born of Vision
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Preparing vessels for the <span className="font-semibold text-secondary">great revival</span> promised by God, 
            one transformed life at a time.
          </p>
        </div>

        {/* Luxury Story Section with Image */}
        <div className="grid lg:grid-cols-2 gap-16 mb-luxury items-center">
          <div className="animate-luxury-fade-in">
            <div className="glass rounded-luxury p-12 border border-secondary/10 shadow-luxury relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-rose-gold-gradient/5 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-luxury-gold/20">
                  <Book className="h-5 w-5 text-luxury-gold animate-pulse" />
                  <span className="text-sm font-medium text-primary">Founded 2009</span>
                </div>

                <h3 className="font-display text-display-lg font-bold mb-8 text-primary">
                  The <span className="text-gradient">Beginning</span>
                </h3>
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    In 2009, <span className="font-semibold text-secondary">Pastor Emmanuel Olabisi Ajayi</span> answered 
                    God's divine call to establish a ministry that would stand firmly on biblical truth while powerfully 
                    manifesting the gifts of the Holy Spirit.
                  </p>
                  
                  <p>
                    Though he has gone to glory, Pastor Ajayi's vision lives on—a vision not of building a personal legacy, 
                    but of establishing <span className="font-semibold text-primary">Christ's Kingdom</span> on earth. As he 
                    often proclaimed, "Jesus is the true Founder; we are merely His instruments."
                  </p>
                  
                  <p>
                    Today, under the anointed leadership of <span className="font-semibold text-secondary">Pastor (Mrs) Faith 
                    Olateju Ajayi</span>, the ministry continues to flourish, touching lives across Akure and beyond with 
                    the transforming power of the Gospel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-premium-slide-up">
            <div className="relative rounded-luxury overflow-hidden shadow-luxury group">
              <img 
                src={luxuryCommunityImage}
                alt="BCM community gathering in worship"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                <p className="text-2xl font-display font-bold mb-3">Christ Beulah Christian Ministry</p>
                <p className="text-lg font-light text-white/90 italic">Where every soul finds redemption and purpose</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-luxury">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-accent/20">
              <Sparkles className="h-5 w-5 text-accent animate-pulse" />
              <span className="text-sm font-medium text-primary">Our Foundation</span>
            </div>
            
            <h3 className="font-display text-display-lg font-bold mb-6">
              Core <span className="text-gradient">Values</span>
            </h3>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              These biblical principles guide everything we do as a ministry
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card 
                key={index}
                className="group hover:shadow-luxury transition-all duration-700 hover:-translate-y-2 animate-elegant-scale border-0 glass rounded-luxury magnetic overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center relative">
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-secondary/5 rounded-full blur-xl group-hover:bg-secondary/10 transition-all duration-700"></div>
                  
                  <div className={`w-20 h-20 ${value.gradient} rounded-luxury flex items-center justify-center mx-auto mb-6 shadow-gold group-hover:shadow-glow transition-all duration-700 relative z-10`}>
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <h4 className="font-display font-bold text-xl mb-4 text-primary group-hover:text-secondary transition-colors duration-500">
                    {value.title}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="glass rounded-luxury p-12 md:p-16 border border-secondary/10 shadow-premium relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-rose-gold-gradient/5 rounded-full blur-3xl"></div>
          
          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-luxury-gold/30">
              <Users className="h-5 w-5 text-luxury-gold animate-pulse" />
              <span className="text-sm font-medium text-primary">Spiritual Leadership</span>
            </div>
            
            <h3 className="font-display text-display-lg font-bold mb-6">
              Our <span className="text-gradient">Pastors</span>
            </h3>
            
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Anointed shepherds called by God to guide, teach, and care for His flock
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto relative z-10">
            {leadership.map((leader, index) => (
              <div 
                key={index}
                className="text-center group animate-premium-slide-up magnetic"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="glass rounded-luxury p-10 border border-secondary/10 hover:border-secondary/30 transition-all duration-700 hover:shadow-gold">
                  <div className="w-24 h-24 bg-hero-gradient rounded-full mx-auto mb-6 flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-700">
                    <Crown className="h-12 w-12 text-white" />
                  </div>
                  
                  <h4 className="font-display font-bold text-2xl mb-2 text-primary group-hover:text-secondary transition-colors duration-500">
                    {leader.name}
                  </h4>
                  
                  <p className="text-luxury-gold font-semibold text-lg mb-6">{leader.title}</p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 relative z-10">
            <Button 
              size="lg" 
              className="btn-luxury text-white px-16 py-6 text-xl rounded-premium magnetic shadow-luxury hover:shadow-gold transition-all duration-700"
            >
              Experience Our Ministry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;