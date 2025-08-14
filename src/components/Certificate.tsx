'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const certificates = [
  {
    title: 'Full Stack MERN Developer',
    organization: 'Universal Informatics',
    date: 'April 2025',
    description:
      'Completed a comprehensive MERN stack course covering React, Node.js, Express, MongoDB, and deployment.',
    image: '/certificates/mern.jpg',
  },
  {
    title: 'Trainee Software Developer',
    organization: 'Ypsilon IT Solutions Pvt.Ltd.,',
    date: 'July 2025',
   description: "Gained hands-on experience in software development, collaborating on real-world projects, improving coding skills, and learning industry best practices.",
    image: '/certificates/internship.jpg',
  },
  {
    title: 'Learn HTML and CSS from Beginning to Advanced',
    organization: 'Udemy',
    date: 'January 2025',
    description:
      'In-depth understanding of HTML and CSS',
    image: '/certificates/udemy.png',
  },
  
];

const Certificate = () => {
  const [openImage, setOpenImage] = useState<string | null>(null);

  return (
    <section
      id="certificate"
      className="py-20 bg-background text-foreground transition-colors duration-300"
    >
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
            <Card
              key={index}
              className="bg-background border border-border shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{cert.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {cert.organization} — {cert.date}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{cert.description}</p>

                {/* 📷 Thumbnail with click-to-view */}
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  onClick={() => setOpenImage(cert.image)}
                  className="rounded-md border border-border w-full object-cover max-h-64 cursor-pointer hover:scale-105 transition-transform duration-200"
                />

                {/* ⬇️ Download button */}
                <div className="text-right">
                  <a href={cert.image} download>
                    <Button size="sm" variant="outline">
                      Download
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      {openImage && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-sm"
    onClick={() => setOpenImage(null)}
  >
    <div
      className="relative bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-xl max-w-3xl w-full mx-4 border border-border"
      onClick={(e) => e.stopPropagation()}
    >
      {/* ❌ Close Button */}
      <button
        className="absolute top-2 right-2 text-zinc-500 hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-400 transition-colors"
        onClick={() => setOpenImage(null)}
      >
        <X className="w-5 h-5" />
      </button>

      {/* 🖼️ Modal Image */}
      <img
        src={openImage}
        alt="Full certificate"
        className="w-full h-auto rounded-md border border-border"
      />
    </div>
  </div>
)}

      </div>
    </section>
  );
};

export default Certificate;
