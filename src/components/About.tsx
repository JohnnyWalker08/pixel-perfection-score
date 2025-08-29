import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BookOpen, Handshake } from 'lucide-react';
import communityImage from '@/assets/community.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "We believe in showing God's love through acts of kindness and compassion to all people."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building meaningful relationships and supporting one another through life's journey."
    },
    {
      icon: BookOpen,
      title: "Biblical Truth",
      description: "Grounded in Scripture, we seek to understand and live by God's Word in everything we do."
    },
    {
      icon: Handshake,
      title: "Service",
      description: "Called to serve our community and make a positive impact in the world around us."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              About Our <span className="text-secondary">Church</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over 30 years, Grace Community Church has been a beacon of hope and love 
              in our neighborhood. We are a diverse, welcoming community united by our faith 
              in Jesus Christ and our commitment to serving others.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're seeking spiritual growth, meaningful community, or simply a place 
              to belong, we invite you to discover what makes Grace Community Church special. 
              Here, every person is valued, every story matters, and everyone is welcome.
            </p>
            <div className="bg-hero-gradient text-white p-6 rounded-lg shadow-gentle">
              <blockquote className="text-lg italic mb-2">
                "Come as you are, grow in faith, and discover the love that transforms lives."
              </blockquote>
              <cite className="text-sm font-semibold">Pastor Sarah Johnson</cite>
            </div>
          </div>
          
          <div className="animate-fade-in-up">
            <img 
              src={communityImage} 
              alt="Diverse community members gathering in fellowship"
              className="rounded-lg shadow-gentle w-full h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Our <span className="text-secondary">Values</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These core values guide everything we do as a church community and shape how we interact with one another and our neighbors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="hover:shadow-gentle transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-3 text-primary">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Section */}
        <div className="mt-20 text-center">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12">
            Our <span className="text-secondary">Leadership</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                SJ
              </div>
              <h4 className="font-semibold text-xl mb-2">Pastor Sarah Johnson</h4>
              <p className="text-secondary font-medium mb-2">Senior Pastor</p>
              <p className="text-sm text-muted-foreground">
                Leading our congregation with wisdom and compassion for over 15 years.
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                MD
              </div>
              <h4 className="font-semibold text-xl mb-2">Michael Davis</h4>
              <p className="text-secondary font-medium mb-2">Worship Pastor</p>
              <p className="text-sm text-muted-foreground">
                Inspiring hearts through music and leading our worship ministry.
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                LM
              </div>
              <h4 className="font-semibold text-xl mb-2">Lisa Martinez</h4>
              <p className="text-secondary font-medium mb-2">Children's Pastor</p>
              <p className="text-sm text-muted-foreground">
                Nurturing the faith of our youngest members with love and creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;