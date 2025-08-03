import { Button } from '@/components/ui/button';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/yourusername', name: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/yourprofile', name: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/yourusername', name: 'Twitter' },
    { icon: Mail, url: 'mailto:arpitaseth192@gmail.com', name: 'Email' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background relative">
      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary hover:bg-primary/90 shadow-glow animate-float"
        size="sm"
      >
        <ArrowUp className="w-4 h-4" />
      </Button>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-background mb-4">
              Arpita Seth
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed max-w-md">
              MERN Stack Developer passionate about creating innovative web solutions. 
              Always eager to learn new technologies and take on exciting challenges.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(social.url, '_blank')}
                  className="text-background/70 hover:text-background hover:bg-background/10 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-background hover:bg-background/10 justify-start p-0 h-auto font-normal"
                  >
                    {link.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Get In Touch</h4>
            <div className="space-y-3 text-background/80">
              <p>
                <span className="font-medium">Email:</span><br />
                <a 
                  href="mailto:arpitaseth192@gmail.com"
                  className="hover:text-background transition-colors duration-200"
                >
                  arpitaseth192@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">Phone:</span><br />
                <a 
                  href="tel:7999343606"
                  className="hover:text-background transition-colors duration-200"
                >
                 7999343606
                </a>
              </p>
              <p>
                <span className="font-medium">Location:</span><br />
                Indore, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-background/70 mb-4 md:mb-0">
              © {new Date().getFullYear()} Arpita . All rights reserved.
            </p>
            <p className="text-background/70 flex items-center">
              Made using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;