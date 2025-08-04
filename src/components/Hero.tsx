'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import developerPhoto from '@/assets/developer-photo.jpg';
import Resume from '@/assets/Arpita_Seth_Resume.pdf'

// Typewriter Hook
const useTypewriter = (
  words: string[],
  typingSpeed = 100,
  pauseTime = 1500
) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = index % words.length;
    const fullText = words[current];

    let timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => {}, pauseTime);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words]);

  return text;
};

const Hero = () => {
  const roles = ['MERN Stack Developer', 'Full Stack Developer', 'Creative Coder'];
  const typedText = useTypewriter(roles);
  const [isDark, setIsDark] = useState(false);

 const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = Resume; 
  link.download = 'Arpita_Seth_Resume.pdf';
  link.target = '_blank'; 
  link.click();
};


  const toggleDarkMode = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white relative px-6 transition-colors duration-300"
    >
      {/* Dark Mode Toggle */}
      <button
        className="absolute top-11 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
        onClick={toggleDarkMode}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-gray-800" />
        )}
      </button>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 py-20">
        {/* Text Content */}
        <div className="flex-1 text-center sm:px-2 lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Arpita Seth
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium mb-6 h-10">
            <span className="border-r-2 border-black dark:border-white pr-1 animate-blink">
              {typedText}
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            I build clean, scalable, and interactive full-stack apps using MongoDB,
            Express, React, and Node.js. Focused on modern UI and seamless UX.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
            <Button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 shadow-md hover:scale-105 transition"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 hover:scale-105 transition"
              onClick={() =>
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <Mail className="w-4 h-4 mr-2" />
              View projects
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-purple-500 dark:hover:text-pink-400 transition"
              onClick={() => window.open('https://github.com/arpita4878', '_blank')}
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              onClick={() => window.open('https://www.linkedin.com/in/arpita-seth-3ba54a325', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Developer Image */}
        <div
          className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0"
          style={{
            animation: 'float 4s ease-in-out infinite',
            transformOrigin: 'center',
          }}
        >
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full ring-4 ring-purple-500 ring-opacity-60 shadow-lg">
            <img
              src={developerPhoto}
              alt="Arpita Seth"
              className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
              style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
            />
          </div>
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-15px); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Hero;
