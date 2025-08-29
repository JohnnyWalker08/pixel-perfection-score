import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Heart, Send, Crown, Sparkles } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Sanctuary",
      details: ["123 Faith Street", "Hope City, HC 12345"],
      action: "Get Directions",
      gradient: "bg-hero-gradient"
    },
    {
      icon: Phone,
      title: "Connect With Us",
      details: ["(555) 123-HOPE", "Monday - Friday: 9 AM - 5 PM"],
      action: "Call Now",
      gradient: "bg-rose-gold-gradient"
    },
    {
      icon: Mail,
      title: "Send a Message",
      details: ["info@gracecc.org", "pastor@gracecc.org"],
      action: "Email Us",
      gradient: "bg-luxury-gradient"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Thursday: 9 AM - 5 PM", "Friday: 9 AM - 2 PM"],
      action: "Plan Visit",
      gradient: "bg-hero-gradient"
    }
  ];

  return (
    <section id="contact" className="py-luxury bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Ultra-Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-8 py-4 mb-10 border border-secondary/20 shadow-gold">
            <Send className="h-6 w-6 text-secondary animate-pulse" />
            <span className="font-medium text-primary">Connect With Excellence</span>
          </div>

          <h2 className="font-display text-display-xl md:text-display-2xl font-bold mb-8 leading-tight">
            Get in
            <span className="block text-gradient bg-rose-gold-gradient bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              Touch
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            We'd be honored to hear from you. Whether you seek spiritual guidance, community connection, 
            or simply wish to learn more about our 
            <span className="font-semibold text-secondary"> exceptional ministry</span>.
          </p>
        </div>

        <div className="grid xl:grid-cols-2 gap-16 mb-luxury">
          {/* Ultra-Premium Contact Form */}
          <div className="animate-luxury-fade-in">
            <Card className="shadow-luxury border-0 glass rounded-luxury overflow-hidden">
              <CardHeader className="pb-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-gold-gradient/10 rounded-full blur-2xl"></div>
                
                <CardTitle className="text-3xl text-primary flex items-center relative z-10 font-display">
                  <Heart className="h-8 w-8 mr-3 text-secondary" />
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground text-lg font-light leading-relaxed mt-4">
                  We typically respond within 24 hours. For urgent prayer requests or pastoral care, 
                  please call us directly for immediate assistance.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6 p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-primary mb-3 block">First Name</label>
                    <Input 
                      placeholder="Your first name" 
                      className="glass border-secondary/20 rounded-premium h-14 text-lg focus:border-secondary focus:ring-secondary/20"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-primary mb-3 block">Last Name</label>
                    <Input 
                      placeholder="Your last name" 
                      className="glass border-secondary/20 rounded-premium h-14 text-lg focus:border-secondary focus:ring-secondary/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-primary mb-3 block">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="glass border-secondary/20 rounded-premium h-14 text-lg focus:border-secondary focus:ring-secondary/20"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-primary mb-3 block">Phone (Optional)</label>
                  <Input 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    className="glass border-secondary/20 rounded-premium h-14 text-lg focus:border-secondary focus:ring-secondary/20"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-primary mb-3 block">How can we help you?</label>
                  <select className="w-full p-4 border border-secondary/20 rounded-premium glass text-lg focus:border-secondary focus:ring-secondary/20 h-14 bg-background">
                    <option>General Question</option>
                    <option>Prayer Request</option>
                    <option>Visit Information</option>
                    <option>Ministry Involvement</option>
                    <option>Pastoral Care</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-primary mb-3 block">Your Message</label>
                  <Textarea 
                    placeholder="Share your thoughts, questions, or prayer requests with us..."
                    rows={6}
                    className="glass border-secondary/20 rounded-premium text-lg focus:border-secondary focus:ring-secondary/20 resize-none"
                  />
                </div>
                
                <Button 
                  className="w-full btn-luxury text-white text-xl py-6 rounded-premium shadow-luxury hover:shadow-gold transition-all duration-700 magnetic"
                >
                  <Send className="mr-3 h-6 w-6" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Premium Contact Information */}
          <div className="space-y-8 animate-premium-slide-up">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="hover:shadow-luxury transition-all duration-700 border-0 glass rounded-luxury magnetic group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 relative">
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-secondary/5 rounded-full blur-xl group-hover:bg-secondary/10 transition-all duration-700"></div>
                  
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 ${info.gradient} rounded-luxury flex items-center justify-center flex-shrink-0 shadow-elegant group-hover:shadow-glow transition-all duration-700`}>
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-2xl mb-4 text-primary group-hover:text-secondary transition-colors duration-500">
                        {info.title}
                      </h3>
                      
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-lg mb-2 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                      
                      <Button 
                        className="mt-6 glass border border-secondary/20 hover:bg-secondary/10 text-primary hover:text-secondary rounded-premium transition-all duration-500 magnetic"
                      >
                        {info.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium Map Section */}
        <div className="glass rounded-luxury p-12 shadow-premium mb-luxury border border-secondary/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          
          <h3 className="font-display text-display-lg font-bold text-center mb-12 relative z-10">
            Find Our <span className="text-gradient">Sanctuary</span>
          </h3>
          
          <div className="glass rounded-luxury h-80 flex items-center justify-center border border-secondary/10 relative z-10 group magnetic">
            <div className="text-center">
              <div className="w-24 h-24 bg-hero-gradient rounded-luxury flex items-center justify-center mx-auto mb-6 shadow-luxury group-hover:shadow-glow transition-all duration-700">
                <MapPin className="h-12 w-12 text-white" />
              </div>
              
              <p className="text-2xl font-display font-bold text-primary mb-2">123 Faith Street</p>
              <p className="text-xl text-muted-foreground mb-8">Hope City, HC 12345</p>
              
              <Button 
                className="btn-luxury text-white px-12 py-4 text-lg rounded-premium shadow-gold hover:shadow-glow transition-all duration-700"
              >
                <MapPin className="mr-3 h-5 w-5" />
                Open in Maps
              </Button>
            </div>
          </div>
        </div>

        {/* Ultra-Premium Prayer Request Section */}
        <div className="text-center bg-hero-gradient rounded-luxury p-16 text-white relative overflow-hidden shadow-luxury">
          <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-white/20">
              <Crown className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-white/90">Sacred Prayers</span>
            </div>
            
            <Heart className="h-20 w-20 mx-auto mb-8 animate-pulse opacity-90" />
            
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">Need Prayer?</h3>
            
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto font-light leading-relaxed">
              Our dedicated prayer ministry stands ready to intercede for you. Share your heart with us, 
              and experience the power of our community lifting you up in prayer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="glass border-2 border-white/30 text-white hover:bg-white/10 px-12 py-6 text-xl rounded-premium magnetic backdrop-blur-luxury transition-all duration-700"
              >
                <Heart className="mr-3 h-6 w-6" />
                Submit Prayer Request
              </Button>
              
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white px-12 py-6 text-xl rounded-premium magnetic shadow-gold hover:shadow-glow transition-all duration-700"
              >
                <Phone className="mr-3 h-6 w-6" />
                Call for Prayer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;