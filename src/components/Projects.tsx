'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

import ShippingWarImg from '/assets/img/shipping_WAR.png';
import MealBridgeImg from '/assets/img/meal_bridge.png';
import Portfolio from '/assets/img/PORTFOLIO.png';
import Granth from '/assets/img/granth_01.png';
import Granth1 from  '/assets/img/granth_01.png';

const projectWork = [
  {
    title: "Shipping War",
    description: "A full-stack consignment & bidding system for logistics built with MERN stack, user auth, and bidding features.",
    image: ShippingWarImg,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://tinyurl.com/S16G22",
    codeLink: "https://github.com/arpita4878/Shipping-war01"
  },
  {
    title: "MealBridge",
    description: "Food redistribution platform connecting donors and NGOs to reduce food waste and serve communities.",
    image: MealBridgeImg,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://tinyurl.com/G2202A",
    codeLink: "https://github.com/arpita4878/MealBridge"
  },
  {
    title: "My Portfolio",
    description: "My personal portfolio website demonstrating responsive design, clean UI, and MERN stack skills.",
    image: Portfolio,
    technologies: ["React", "Express", "MongoDB", "Node.js"],
    liveLink: "https://arpitaportfolio-ten.vercel.app/",
    codeLink: "https://github.com/arpita4878/portfolio"
  }
];

const bookProjects = [
  {
    title: "Granth Book",
    description: "Educational and current affairs magazine with smooth UI and reader-friendly layout.",
    image: Granth
  },
  {
    title: "Granth Magazine",
    description: "Educational and current affairs magazine with smooth UI and reader-friendly layout.",
    image: Granth1
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30 dark:bg-background">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A showcase of full-stack applications and creative book-based interfaces.
          </p>
        </div>

        {/* 💼 App Projects */}
        <h3 className="text-2xl font-bold mb-6 text-left">💼 App Projects</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectWork.map((project, index) => (
            <Card
              key={index}
              className="group bg-card border border-border/50 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            >
              <div className="relative overflow-hidden h-40 bg-muted">
                {project.image ? (
                  <img
                    src={typeof project.image === 'string' ? project.image : (project.image as any).src}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground text-sm">No Image</div>
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
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs bg-muted px-2 py-0.5 dark:bg-white/10 dark:text-white/80">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" onClick={() => window.open(project.liveLink, '_blank')} className="flex-1 text-xs h-8">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Live
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => window.open(project.codeLink, '_blank')} className="flex-1 text-xs h-8">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 📚 Book Projects */}
        <h3 className="text-2xl font-bold mb-6 text-left">📚 Book Projects</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookProjects.map((book, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-800 border border-border/30 shadow-sm hover:shadow-md transition duration-300 animate-fade-in-up"
            >
              {book.image ? (
                <div className="h-40 overflow-hidden bg-muted">
                  <img
                    src={typeof book.image === 'string' ? book.image : (book.image as any).src}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-40 flex items-center justify-center bg-muted text-gray-400 text-sm">No Image</div>
              )}

              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">{book.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground text-sm">{book.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
