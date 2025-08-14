import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Certificate';
import Certificate from '@/components/Certificate';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Certificate/>
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
