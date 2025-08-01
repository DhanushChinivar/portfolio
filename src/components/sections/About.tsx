import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

const EnhancedSkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillsData = {
    frontend: {
      title: "Frontend",
      color: "from-blue-500 to-cyan-400",
      headerImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&fit=crop&auto=format&q=80",
      skills: [
        { 
          name: "React", 
          years: "3+", 
          icon: "⚛️", 
          description: "Building dynamic web applications with modern React patterns",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        { 
          name: "Vue.js", 
          years: "2+", 
          icon: "🟢", 
          description: "Progressive web frameworks for scalable applications",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
        },
        { 
          name: "TypeScript", 
          years: "2+", 
          icon: "📘", 
          description: "Type-safe JavaScript development for robust code",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        },
        { 
          name: "JavaScript", 
          years: "4+", 
          icon: "🟨", 
          description: "Core web programming language mastery",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        { 
          name: "TailwindCSS", 
          years: "2+", 
          icon: "🎨", 
          description: "Utility-first CSS framework for rapid UI development",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
        }
      ]
    },
    backend: {
      title: "Backend",
      color: "from-green-500 to-emerald-400",
      headerImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=200&fit=crop&auto=format&q=80",
      skills: [
        { 
          name: "Node.js", 
          years: "3+", 
          icon: "🟢", 
          description: "Server-side JavaScript runtime for scalable applications",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        },
        { 
          name: "Python", 
          years: "3+", 
          icon: "🐍", 
          description: "Versatile programming language for automation and APIs",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        { 
          name: "AWS", 
          years: "2+", 
          icon: "☁️", 
          description: "Cloud computing services and infrastructure",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
        },
        { 
          name: "MongoDB", 
          years: "2+", 
          icon: "🍃", 
          description: "NoSQL database solutions for modern applications",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        },
        { 
          name: "GraphQL", 
          years: "1+", 
          icon: "📊", 
          description: "Query language for APIs with flexible data fetching",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
        }
      ]
    },
    cloudSecurity: {
      title: "Cloud & Security",
      color: "from-red-500 to-pink-400",
      headerImage: "https://images.unsplash.com/photo-1581090464777-f3220bbe18b8?w=200&h=200&fit=crop&auto=format&q=80",
      skills: [
        { 
          name: "CompTIA Security+", 
          years: "Certified", 
          icon: "🛡️", 
          description: "Cybersecurity fundamentals certified professional",
          logo: "https://images.unsplash.com/photo-1581090464777-f3220bbe18b8?w=50&h=50&fit=crop&auto=format"
        },
        { 
          name: "AWS Cloud", 
          years: "2+", 
          icon: "☁️", 
          description: "Cloud architecture and deployment expertise",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
        },
        { 
          name: "Docker", 
          years: "2+", 
          icon: "🐳", 
          description: "Containerization and orchestration technologies",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        }
      ]
    }
  };

  return (
    <div className="mt-24 max-w-7xl mx-auto">
      <RevealOnScroll delay={500}>
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Technical Arsenal
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {Object.entries(skillsData).map(([category, data], categoryIndex) => (
          <RevealOnScroll key={category} delay={600 + categoryIndex * 100}>
            <div className="group">
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-muted hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${data.color} flex items-center justify-center mr-4 shadow-lg overflow-hidden p-2`}>
                    <img 
                      src={data.headerImage} 
                      alt={data.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground">{data.title}</h4>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {data.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="relative group/skill cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(`${category}-${index}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="bg-muted/30 rounded-lg p-4 border border-muted hover:border-primary/50 transition-all duration-200 hover:bg-muted/50">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 mr-4 rounded-md overflow-hidden bg-white p-1.5">
                            <img 
                              src={skill.logo} 
                              alt={skill.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <h5 className="text-foreground font-semibold text-lg">{skill.name}</h5>
                            <p className="text-muted-foreground text-sm">{skill.years} years</p>
                          </div>
                        </div>

                        {/* Description on Hover */}
                        {hoveredSkill === `${category}-${index}` && (
                          <div className="mt-3 p-3 bg-background/80 rounded-lg border border-primary/30 transform transition-all duration-200">
                            <p className="text-muted-foreground text-sm">{skill.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Stats */}
                <div className="mt-6 pt-4 border-t border-muted">
                  <div className="flex justify-center text-sm text-muted-foreground">
                    <span>{data.skills.length} Technologies</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Additional Info Section */}
      <RevealOnScroll delay={900}>
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-4">Always Learning</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. Currently exploring AI/ML integration, 
              advanced cloud architectures, and modern DevOps practices to stay at the forefront of development.
            </p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Interactive Legend */}
      <RevealOnScroll delay={1000}>
        <div className="mt-8 flex justify-center">
          <div className="bg-background/50 rounded-lg p-4 border border-muted backdrop-blur-sm">
            <p className="text-muted-foreground text-sm text-center">
              💡 Hover over skills to see detailed descriptions and proficiency levels
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export const About = () => {
  const roles = [
    "Cloud Engineer",
    "Data Engineer", 
    "Software Engineer",
    "Security Specialist",
    "Full Stack Developer"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-background via-background/95 to-muted/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <RevealOnScroll>
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="block text-foreground">Hi, I am</span>
                  <span className="block bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Dhanush Chinivar
                  </span>
                </h1>
                
                <div className="text-2xl md:text-3xl font-semibold h-12 flex items-center">
                  <span className="text-muted-foreground mr-2">I am a</span>
                  <span 
                    className={`bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent transition-all duration-300 ${
                      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                    }`}
                  >
                    {roles[currentRoleIndex]}
                  </span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                I am a motivated and versatile individual, always eager to take on new challenges. 
                With a passion for learning, I am dedicated to delivering high-quality results. 
                With a positive attitude and a growth mindset, I am ready to make a meaningful 
                contribution and achieve great things.
              </p>

              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Check Resume
                </Button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Content - Profile Image */}
          <RevealOnScroll delay={300}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-pulse"></div>
                
                {/* Profile image container */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary to-cyan-400 p-1 bg-gradient-to-r from-primary to-cyan-400">
                  <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                    <img 
                      src="/lovable-uploads/60e060ff-17ed-43e8-a578-fe0ce41eb1f9.png"
                      alt="Dhanush Chinivar"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                  Available for hire!
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Enhanced Skills Section */}
        <EnhancedSkillsSection />
      </div>
    </section>
  );
};