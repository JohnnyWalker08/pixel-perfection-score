import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Ministries from '@/components/Ministries';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Ministries />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                  G
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg">Grace Community</h3>
                  <p className="text-sm text-white/80 -mt-1">Church</p>
                </div>
              </div>
              <p className="text-white/80 text-sm">
                A welcoming community where faith grows and everyone belongs.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">Service Times</a></li>
                <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Give Online</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ministries</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-secondary transition-colors">Children's Ministry</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Youth Ministry</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Small Groups</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Community Outreach</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>123 Faith Street<br />Hope City, HC 12345</p>
                <p>(555) 123-HOPE</p>
                <p>info@gracecc.org</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2024 Grace Community Church. All rights reserved. | 
              <span className="text-secondary"> Built with love for our community</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;