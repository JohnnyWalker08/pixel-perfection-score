import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Baby, 
  GraduationCap, 
  Heart, 
  Music, 
  HandHeart,
  BookOpen,
  Coffee
} from 'lucide-react';

const Ministries = () => {
  const ministries = [
    {
      icon: Baby,
      title: "Children's Ministry",
      description: "Nurturing young hearts with age-appropriate Bible lessons, games, and activities that make faith fun and memorable.",
      ages: "Birth - 12 years",
      schedule: "Sundays during service",
      features: ["Safe, secure environment", "Trained volunteers", "Fun Bible lessons", "Age-appropriate activities"]
    },
    {
      icon: GraduationCap,
      title: "Youth Ministry",
      description: "Empowering teenagers to grow in faith while building lasting friendships through engaging programs and community service.",
      ages: "13 - 18 years",
      schedule: "Wednesdays 7-9 PM",
      features: ["Weekly youth nights", "Summer camps", "Mission trips", "Mentorship programs"]
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Building deeper relationships and spiritual growth through intimate Bible study groups that meet throughout the week.",
      ages: "All adults",
      schedule: "Various times",
      features: ["Home-based meetings", "Study guides provided", "Prayer support", "Community building"]
    },
    {
      icon: Music,
      title: "Worship Team",
      description: "Leading our congregation in praise through contemporary music, traditional hymns, and special performances.",
      ages: "All skill levels",
      schedule: "Rehearsals Thursdays",
      features: ["Vocal ministry", "Instrumental ministry", "Sound tech team", "Regular training"]
    },
    {
      icon: HandHeart,
      title: "Community Outreach",
      description: "Serving our neighbors through food drives, community events, and partnerships with local organizations.",
      ages: "All ages welcome",
      schedule: "Monthly projects",
      features: ["Food pantry", "Community events", "Volunteer opportunities", "Local partnerships"]
    },
    {
      icon: Heart,
      title: "Senior Ministry",
      description: "Honoring our elders with programs designed for fellowship, spiritual growth, and community connection.",
      ages: "55+ years",
      schedule: "2nd Tuesday monthly",
      features: ["Monthly gatherings", "Special trips", "Prayer ministry", "Life experience sharing"]
    }
  ];

  const ministryLeadership = [
    {
      title: "Join a Ministry Team",
      description: "God has given each of us unique gifts and talents. Discover how you can use yours to serve others and grow in your faith.",
      icon: BookOpen
    },
    {
      title: "Lead & Serve",
      description: "Ready to take the next step? We're always looking for passionate individuals to help lead our various ministries.",
      icon: Users
    },
    {
      title: "Fellowship & Connect",
      description: "Ministry isn't just about serving—it's about building meaningful relationships and growing together in community.",
      icon: Coffee
    }
  ];

  return (
    <section id="ministries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Our <span className="text-secondary">Ministries</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From our youngest members to our seasoned saints, we have ministries designed to help everyone 
            grow in faith, build relationships, and serve our community with love.
          </p>
        </div>

        {/* Ministry Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {ministries.map((ministry, index) => (
            <Card key={index} className="hover:shadow-gentle transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <ministry.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">{ministry.title}</CardTitle>
                <div className="space-y-1 text-sm">
                  <p className="text-secondary font-medium">{ministry.ages}</p>
                  <p className="text-muted-foreground">{ministry.schedule}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">{ministry.description}</p>
                <div className="space-y-2">
                  {ministry.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-hero-gradient" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Get Involved Section */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold text-primary mb-4">
              Get <span className="text-secondary">Involved</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ministry is about more than just volunteering—it's about finding your place in God's family 
              and using your gifts to make a difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {ministryLeadership.map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-warm-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-3 text-primary">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-hero-gradient shadow-gentle hover:shadow-warm mr-4">
              Find Your Ministry
            </Button>
            <Button size="lg" variant="outline">
              Volunteer Today
            </Button>
          </div>
        </div>

        {/* Ministry Spotlight */}
        <div className="mt-20 bg-hero-gradient rounded-2xl p-8 md:p-12 text-white text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h3 className="font-serif text-3xl font-bold mb-4">Ministry Spotlight</h3>
          <h4 className="text-xl font-semibold mb-4 text-secondary">Community Food Pantry</h4>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            This month, our Community Outreach ministry served over 200 families through our food pantry program. 
            Join us every third Saturday to help pack and distribute food to those in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Volunteer with Us
            </Button>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Donate Items
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ministries;