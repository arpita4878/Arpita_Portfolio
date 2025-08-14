'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const certificates = [
  {
    title: 'Full Stack MERN Development',
    organization: 'Universal Informatics',
    date: 'July 2025',
    description: 'Completed a comprehensive MERN stack course covering React, Node.js, Express, MongoDB, and deployment.'
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    organization: 'freeCodeCamp',
    date: 'March 2024',
    description: 'Covered ES6, regular expressions, debugging, and algorithm scripting challenges.'
  },
  {
    title: 'React Developer Certification',
    organization: 'Udemy',
    date: 'January 2024',
    description: 'In-depth understanding of React hooks, state management, routing, and component lifecycle.'
  }
];

const Certificate = () => {
  return (
    <section id="certificate" className="py-20 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of professional certifications I’ve earned along my development journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-fade-in">
          {certificates.map((cert, index) => (
            <Card key={index} className="bg-background border border-border shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{cert.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{cert.organization} — {cert.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 📷 Image Placeholder — You will replace this with your image later */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-4">Certificate Showcase</h3>
          <div className="max-w-2xl mx-auto">
            {/* Example placeholder — replace `certificate.jpg` with your image when ready */}
            <Image
              src="/certificate.jpg"
              alt="Certificate "
              width={800}
              height={600}
              className="rounded-lg border border-border shadow-lg mx-auto"
              unoptimized // remove this if you're using next/image optimization properly
            />
            <p className="text-muted-foreground mt-2 text-sm">You can add your certificate image here later.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
