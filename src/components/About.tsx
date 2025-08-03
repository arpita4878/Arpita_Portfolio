import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Code,
  Users,
  Lightbulb,
  Target,
  Mail,
  Download,
  MessageCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const cardColors = [
  "from-blue-500 to-cyan-400 dark:from-blue-700 dark:to-cyan-600",
  "from-green-500 to-emerald-400 dark:from-green-700 dark:to-emerald-600",
  "from-yellow-400 to-orange-400 dark:from-yellow-600 dark:to-orange-500",
  "from-pink-500 to-purple-500 dark:from-pink-700 dark:to-purple-700",
];

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Maintainable, readable code built on best practices."
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Strong communicator and collaborator in cross-functional teams."
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Creative thinker with a passion for debugging and optimization."
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Focused on delivering impactful, timely solutions."
  }
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-background dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-foreground dark:text-white mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-muted-foreground dark:text-gray-300 text-lg leading-relaxed"
          >
            <h3 className="text-2xl font-semibold text-foreground dark:text-white">
              MERN Stack Developer with Passion for Crafting Interfaces
            </h3>
            <p>
             Hello! I'm a web development enthusiast with a background in Computer Science and a strong passion for the MERN stack.
My programming journey began in college, where I found joy in building impactful digital solutions.
            </p>
            <p>
              Through personal projects and hands-on learning, I’ve built responsive UIs, APIs, and scalable
              applications with attention to performance and usability.
            </p>
            <p>
              My interests lie in bringing design to life with clean, reusable code, while continuously
              learning and contributing to meaningful products.
            </p>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card
                  className={`bg-gradient-to-tr ${cardColors[index]} rounded-xl text-white shadow-md hover:shadow-xl transition-shadow duration-300`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-lg bg-white/20 backdrop-blur-md mx-auto mb-4 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-semibold text-foreground dark:text-white mb-8">
            Let’s Connect
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg group dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white"
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
           
            <Button
              variant="secondary"
              className="bg-accent hover:bg-accent/90 text-accent-foreground group dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:text-white"
              onClick={() => window.open('mailto:arpitaseth192@gmail.com', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Email Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
