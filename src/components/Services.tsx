import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Music, Baby, Coffee, Calendar, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      time: "9:00 AM - 9:45 AM",
      title: "Sunday School",
      description: "Bible study classes for all ages, from children to adults",
      icon: Clock,
      features: ["Adult Classes", "Youth Groups", "Children's Programs"]
    },
    {
      time: "10:00 AM - 11:30 AM",
      title: "Sunday Worship",
      description: "Our main worship service with inspiring music and biblical teaching",
      icon: Music,
      features: ["Contemporary Worship", "Biblical Teaching", "Community Prayer"]
    },
    {
      time: "11:30 AM - 12:00 PM",
      title: "Fellowship Time",
      description: "Connect with others over coffee and light refreshments",
      icon: Coffee,
      features: ["Community Connection", "Welcome Center", "Light Refreshments"]
    }
  ];

  const specialServices = [
    {
      title: "Children's Ministry",
      description: "Safe, fun, and faith-building programs for kids of all ages",
      icon: Baby,
      age: "Birth - 12 years"
    },
    {
      title: "Youth Ministry",
      description: "Engaging programs for teens focused on faith and friendship",
      icon: Users,
      age: "13 - 18 years"
    },
    {
      title: "Special Events",
      description: "Holiday services, baptisms, and community celebrations",
      icon: Calendar,
      age: "All ages welcome"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Join Us for <span className="text-secondary">Worship</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every Sunday, we gather to worship God, learn from His Word, and fellowship with one another. 
            Come as you are and experience the warmth of our church family.
          </p>
        </div>

        {/* Main Services Schedule */}
        <div className="mb-20">
          <h3 className="font-serif text-3xl font-bold text-center text-primary mb-12">
            Sunday <span className="text-secondary">Schedule</span>
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-gentle transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-secondary mb-2">{service.time}</div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center text-sm">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What to Expect */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold text-primary mb-4">
              What to <span className="text-secondary">Expect</span>
            </h3>
            <p className="text-lg text-muted-foreground">Your first visit made easy</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">1</div>
              <h4 className="font-semibold mb-2">Warm Welcome</h4>
              <p className="text-sm text-muted-foreground">Our greeting team will welcome you and help you find your way</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">2</div>
              <h4 className="font-semibold mb-2">Comfortable Seating</h4>
              <p className="text-sm text-muted-foreground">Find a seat anywhere - we're casual and welcoming</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">3</div>
              <h4 className="font-semibold mb-2">Inspiring Worship</h4>
              <p className="text-sm text-muted-foreground">Enjoy contemporary music and practical biblical teaching</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">4</div>
              <h4 className="font-semibold mb-2">Connect & Stay</h4>
              <p className="text-sm text-muted-foreground">Join us for fellowship time and meet new friends</p>
            </div>
          </div>
        </div>

        {/* Special Ministries */}
        <div>
          <h3 className="font-serif text-3xl font-bold text-center text-primary mb-12">
            Special <span className="text-secondary">Ministries</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {specialServices.map((service, index) => (
              <Card key={index} className="hover:shadow-gentle transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-warm-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-primary">{service.title}</h4>
                  <p className="text-secondary font-medium text-sm mb-3">{service.age}</p>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-hero-gradient shadow-gentle hover:shadow-warm">
              Plan Your First Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;