'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

import ShippingWarImg from '/assets/img/shipping_WAR.png';
import MealBridgeImg from '/assets/img/meal_bridge.png';


const projects = [
  {
    title: "Shipping War",
    description: "A full-stack consignment & bidding system for logistics built with MERN stack, user auth, and bidding features.",
    image: ShippingWarImg,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://tinyurl.com/S16G22",
    codeLink: "https://github.com/yourusername/ecommerce-app"
  },
  {
    title: "MealBridge",
    description: "Food redistribution platform connecting donors and NGOs to reduce food waste and serve communities.",
    image: MealBridgeImg,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://tinyurl.com/G2202A",
    codeLink: "https://github.com/yourusername/task-manager"
  },
  {
    title: "Social Media Dashboard",
    description: "Responsive dashboard with analytics, post scheduling, and engagement insights using Chart.js.",
    image: "",
    technologies: ["React", "Express", "MongoDB", "Chart.js"],
    liveLink: "https://your-dashboard-demo.com", 
    codeLink: "https://github.com/yourusername/social-dashboard"
  },
  {
    title: "Weather App",
    description: "Weather app with clean UI and live forecasts using OpenWeather API.",
    image:"",
    technologies: ["React", "OpenWeather API", "CSS3"],
    liveLink: "https://your-weather-demo.com",
    codeLink: "https://github.com/yourusername/weather-app"
  },
  {
    title: "JavaScript Guide Book",
    description: "Interactive guide for learning JavaScript fundamentals through examples and exercises.",
    image: "", // Fallback will render if missing
    technologies: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://your-jsbook-demo.com",
    codeLink: "https://github.com/yourusername/js-guide-book"
  },
  {
    title: "Granth Magazine",
    description: "Magazine-style content focused on current affairs and education, powered by React and TypeScript.",
    image: "",
    technologies: ["React", "TypeScript", "Interactive Demos"],
    liveLink: "https://your-reactbook-demo.com",
    codeLink: "https://github.com/yourusername/react-handbook"
  }
];


const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30 dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Some featured works that showcase my skills and creativity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group bg-card border border-border/50 overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg animate-fade-in-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-40 bg-muted">
                {project.image ? (
                  <img
                    src={typeof project.image === 'string' ? project.image : (project.image as any).src}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                    No Image
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => window.open(project.liveLink, '_blank')}
                    className="bg-white/90 text-black hover:bg-white"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3 text-sm">
                <p className="text-muted-foreground line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs bg-muted px-2 py-0.5 dark:bg-white/10 dark:text-white/80"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    onClick={() => window.open(project.liveLink, '_blank')}
                    className="flex-1 text-xs h-8"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Live
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.codeLink, '_blank')}
                    className="flex-1 text-xs h-8"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Want to see more or collaborate?
          </p>
          <Button
            onClick={() => window.open('https://github.com/arpita4878', '_blank')}
            variant="outline"
            className="mr-4"
          >
            <Github className="w-4 h-4 mr-2" />
            View GitHub
          </Button>
          <Button
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Projects;