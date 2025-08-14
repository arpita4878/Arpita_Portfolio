'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  Home,
  User,
  FileText,
  Code,
  Briefcase,
  BookCheck,
  Moon,
  Sun
} from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#resume', label: 'Resume', icon: FileText },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#projects', label: 'Projects', icon: Briefcase },
  { href: '#certificate', label: 'Certificate', icon: BookCheck },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDark, setIsDark] = useState(false);

  // Dark mode toggle
  const toggleDarkMode = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
    setIsDark(!isDark);
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  };

  // Set dark mode on load
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  // Active link highlight based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for navbar height
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const { offsetTop, offsetHeight } = section as HTMLElement;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // close mobile menu
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-primary">Arpita Seth</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className={`text-sm flex items-center ${
                  activeSection === item.href
                    ? 'text-primary underline underline-offset-4'
                    : 'text-foreground'
                } hover:text-primary`}
              >
                <item.icon className="w-4 h-4 mr-1" />
                {item.label}
              </Button>
            ))}

            {/* Dark mode toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="ml-2"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <div
                  className={`absolute w-6 h-0.5 bg-current transform transition duration-300 ${
                    isOpen ? 'rotate-45 top-2.5' : 'top-1'
                  }`}
                />
                <div
                  className={`absolute w-6 h-0.5 bg-current transition duration-300 ${
                    isOpen ? 'opacity-0' : 'top-3'
                  }`}
                />
                <div
                  className={`absolute w-6 h-0.5 bg-current transform transition duration-300 ${
                    isOpen ? '-rotate-45 top-2.5' : 'top-5'
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden animate-fade-in px-2 pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className={`justify-start ${
                    activeSection === item.href
                      ? 'text-primary underline underline-offset-4'
                      : 'text-foreground'
                  } hover:text-primary`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
