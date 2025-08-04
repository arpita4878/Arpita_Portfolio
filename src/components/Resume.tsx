import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  const education = [
    {
      degree: "Bachelor of Science - Computer Science",
      institution: "Mata Jija Bai Govt Girls PG College (DAVV)",
      location: "Indore, India",
      duration: "2019 - 2022",
      highlights: [
        "Relevant Coursework: Data Structures, Algorithms, Database Management, Web Development",
        
        "Built solid knowledge in DSA, OS, C/C++, and SQL during COVID-driven virtual learning"
      ]
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      institution: "Adarsh Bal Vinay Mandir, Indore",
      location: "Indore, India", 
      duration: "2017 - 2018",
      highlights: [
        " Strong foundation in Math & Computer Science. Sparked my interest in coding and logic.",
        "Participated in various coding competitions and tech fests"
      ]
    }
  ];

  const experience = [
    {
      title: "MERN Stack Developer Intern",
      company: "Ypsilon IT Solutions",
      location: "Indore, India",
      duration: "6 Months",
      type: "Internship",
      responsibilities: [
        "Developed responsive web applications using React.js and Node.js",
        "Implemented RESTful APIs with Express.js and MongoDB integration",
        "Collaborated with senior developers on feature implementation",
        "Participated in code reviews and agile development processes"
      ]
    },
    {
      title: "App Support",
      company: "Desire To Learn",
      location: "Indore, India",
      duration: "6 Months",
      type: "Internship",
      responsibilities: [
        "Maintained & updated educational platform",
        "Debugged errors and optimized features",
        "Connect with Students and solve their issues, Co-ordinate with team",
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-lg p-1 shadow-card">
            <Button
              variant={activeTab === 'education' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('education')}
              className="mr-1"
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Education
            </Button>
            <Button
              variant={activeTab === 'experience' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('experience')}
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Experience
            </Button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'education' && (
            <div className="space-y-6 animate-fade-in">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 bg-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h3>
                        <h4 className="text-lg text-primary font-medium mb-2">{edu.institution}</h4>
                      </div>
                      <div className="text-right text-muted-foreground">
                        <div className="flex items-center md:justify-end mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center md:justify-end mb-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-6 animate-fade-in">
              {experience.map((exp, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 bg-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
                        <h4 className="text-lg text-primary font-medium mb-2">{exp.company}</h4>
                        <span className="inline-block bg-tech-gradient text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <div className="text-right text-muted-foreground mt-4 md:mt-0">
                        <div className="flex items-center md:justify-end mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center md:justify-end">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;