import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Faith Street", "Hope City, HC 12345"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-HOPE", "Monday - Friday: 9 AM - 5 PM"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@gracecc.org", "pastor@gracecc.org"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Thursday: 9 AM - 5 PM", "Friday: 9 AM - 2 PM"],
      action: "Plan Visit"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Get in <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you! Whether you have questions, need prayer, or want to get involved, 
            our church family is here for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="shadow-gentle">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Heart className="h-6 w-6 mr-2 text-secondary" />
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  We typically respond within 24 hours. For urgent prayer requests, please call us directly.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone (Optional)</label>
                  <Input type="tel" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">How can we help you?</label>
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option>General Question</option>
                    <option>Prayer Request</option>
                    <option>Visit Information</option>
                    <option>Ministry Involvement</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us how we can help you or what you'd like to know about our church..."
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-hero-gradient shadow-gentle hover:shadow-warm" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in-up">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-gentle transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 text-primary">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground mb-1">{detail}</p>
                      ))}
                      <Button variant="outline" size="sm" className="mt-3">
                        {info.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-card rounded-2xl p-8 shadow-gentle">
          <h3 className="font-serif text-3xl font-bold text-center text-primary mb-8">
            Find <span className="text-secondary">Us</span>
          </h3>
          <div className="bg-muted/50 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-lg font-semibold text-primary">123 Faith Street</p>
              <p className="text-muted-foreground mb-4">Hope City, HC 12345</p>
              <Button className="bg-hero-gradient">
                Open in Maps
              </Button>
            </div>
          </div>
        </div>

        {/* Prayer Request Call-out */}
        <div className="mt-16 text-center bg-hero-gradient rounded-2xl p-8 text-white">
          <Heart className="h-12 w-12 mx-auto mb-4" />
          <h3 className="font-serif text-2xl font-bold mb-4">Need Prayer?</h3>
          <p className="text-lg mb-6 opacity-90">
            Our prayer team is here for you. Share your prayer request with us, and we'll lift you up in prayer.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            Submit Prayer Request
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;