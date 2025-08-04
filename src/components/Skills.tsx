import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Code,
  Database,
  Wrench,
  MessageSquare,
  Star,
  TrendingUp,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'React.js', level: 'Intermediate', color: 'bg-blue-500' },
      { name: 'JavaScript', level: 'Intermediate', color: 'bg-yellow-500' },
      { name: 'HTML5', level: 'Advanced', color: 'bg-orange-500' },
      { name: 'CSS3', level: 'Advanced', color: 'bg-blue-600' },
      { name: 'Bootstrap', level: 'Beginner', color: 'bg-red-500' },
    ],
  },
  {
    title: 'Backend Development',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 'Intermediate', color: 'bg-green-600' },
      { name: 'Express.js', level: 'Intermediate', color: 'bg-gray-600' },
      { name: 'MongoDB', level: 'Intermediate', color: 'bg-green-500' },
      { name: 'RESTful APIs', level: 'Intermediate', color: 'bg-indigo-500' },
      { name: 'JWT Authentication', level: 'Beginner', color: 'bg-red-500' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', level: 'Intermediate', color: 'bg-gray-800' },
      { name: 'VS Code', level: 'Advanced', color: 'bg-blue-700' },
      { name: 'Postman', level: 'Intermediate', color: 'bg-orange-600' },
      { name: 'Vercel', level: 'Beginner', color: 'bg-purple-600' },
      { name: 'Render', level: 'Beginner', color: 'bg-teal-600' },
    ],
  },
  {
    title: 'Programming Languages',
    icon: MessageSquare,
    skills: [
      { name: 'JavaScript', level: 'Intermediate', color: 'bg-yellow-500' },
      { name: 'Java', level: 'Beginner', color: 'bg-red-600' },
      { name: 'C/C++', level: 'Beginner', color: 'bg-blue-500' },
    ],
  },
];

const softSkills = [
  'Responsive Design',
  'Problem Solving',
  'Team Collaboration',
  'Communication',
  'Code Review',
  'Debugging',
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Advanced':
      return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-700/20 dark:text-green-300 dark:border-green-500';
    case 'Intermediate':
      return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-700/20 dark:text-blue-300 dark:border-blue-500';
    case 'Beginner':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-700/20 dark:text-yellow-300 dark:border-yellow-500';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700/20 dark:text-gray-300 dark:border-gray-500';
  }
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-background dark:bg-black transition-colors"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded mt-3 animate-slide-in" />
          <p className="text-muted-foreground dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build full-stack web experiences.
          </p>
        </div>

        {/* Grid of skill categories + professional skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg border border-border dark:border-gray-700 animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'both',
              }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground dark:text-white mb-6 flex items-center">
                  <span className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mr-3">
                    <category.icon className="w-5 h-5 text-primary" />
                  </span>
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-md bg-muted/30 dark:bg-white/5 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${skill.color}`} />
                        <span className="font-medium text-foreground dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={`${getLevelColor(skill.level)} px-2 py-0.5 text-xs`}
                        >
                          {skill.level}
                        </Badge>
                        {skill.level === 'Advanced' && (
                          <Star className="w-4 h-4 text-yellow-500 animate-pulse" />
                        )}
                        {skill.level === 'Intermediate' && (
                          <TrendingUp className="w-4 h-4 text-blue-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Professional Skills card spanning 2 columns */}
          <Card
            className="bg-white dark:bg-gray-900 rounded-lg border border-border dark:border-gray-700 animate-fade-in-up md:col-span-2"
            style={{
              animationDelay: `${skillCategories.length * 0.15}s`,
              animationFillMode: 'both',
            }}
          >
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-foreground dark:text-white mb-6">
                Professional Skills
              </h3>
              <p className="text-muted-foreground dark:text-gray-400 mb-8 max-w-xl mx-auto">
                Key interpersonal and workflow abilities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {softSkills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="px-5 py-2 text-sm bg-muted hover:bg-primary hover:text-white dark:bg-white/10 dark:hover:bg-primary dark:hover:text-white transition-all duration-200"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      animationFillMode: 'both',
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
