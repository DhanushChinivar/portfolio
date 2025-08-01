import { RevealOnScroll } from "../RevealOnScroll";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string | string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Cloud Support Associate Intern",
    company: "Amazon Web Services Inc",
    period: "May 2024 — Aug 2024",
    description: "Worked on designing and implementing AWS-based solutions using services like S3, IAM, Load Balancers, Rekognition, and CloudFront.",
    skills: ["AWS", "Python", "Terraform", "Azure DevOps", "Postman"]
  },
  {
    title: "IT Technical Support (Student Lead)",
    company: "University of North Carolina Charlotte",
    period: "Aug 2023 — April 2024",
    description: "Provided technical support for networking, software, and AV equipment.",
    skills: ["Networking", "Technical Support", "Team Leadership"]
  },
  {
    title: "Software Test Automation Engineer",
    company: "Siemens Technology and Services Pvt Ltd",
    period: "Apr 2022 — Jul 2023",
    description: "Developed automation scripts using Ranorex and worked on digital twin technologies for manufacturing solutions.",
    skills: ["Ranorex", "C#", "Digital Twin", "Data Analysis"]
  },
  {
    title: "Application Developer Intern",
    company: "Nubevest",
    period: "Jan 2025 — Present",
    description: [
      "Developed custom CRM solutions, e-commerce app, and payment platform for small businesses.",
      "Designed and optimized UIs using .NET, Laravel, and PHP for seamless experiences."
    ],
    skills: [".NET", "Laravel", "PHP", "CRM", "E-commerce"]
  },
  {
    title: "Software Engineer",
    company: "Microchip Technology",
    period: "2022 — 2024",
    description: [
      "Developed software libraries for 16-bit dsPIC devices using Evolutionary Prototyping SDLC.",
      "Collaborated with engineers to implement plugin features, JSON manipulation, and full-stack integration.",
      "Delivered a complete ADC module including UI, communication, backend, and Jenkins deployment in 6 weeks.",
      "Automated batch scripts to cut development time by 85%.",
      "Revamped UI for ADC, Pin Manager, and PTG modules with a 200% usage increase."
    ],
    skills: ["C", "Embedded Systems", "Jenkins", "Full-stack", "UI/UX"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            My work experience as a software engineer and working on different companies and projects.
          </p>
        </RevealOnScroll>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-timeline-line hidden md:block" />

          {experiences.map((experience, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className={`relative flex items-center mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-timeline-node rounded-full border-4 border-background shadow-lg shadow-timeline-node-glow/50 z-10 hidden md:block">
                  <div className="absolute inset-0 rounded-full bg-timeline-node animate-pulse" />
                </div>

                {/* Date */}
                <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 ${
                  index % 2 === 0 ? '-translate-y-12' : 'translate-y-12'
                } text-sm font-medium text-muted-foreground whitespace-nowrap z-20`}>
                  {experience.period}
                </div>

                {/* Experience Card */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="group bg-experience-card border border-experience-border rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:bg-experience-hover transition-all duration-300 hover:-translate-y-1">
                    
                    {/* Mobile Date */}
                    <div className="md:hidden text-sm font-medium text-primary mb-2">
                      {experience.period}
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {experience.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-medium mb-3">
                      {experience.company}
                    </p>

                    <div className="text-foreground/90 mb-4 leading-relaxed">
                      {Array.isArray(experience.description) ? (
                        <ul className="space-y-2">
                          {experience.description.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{experience.description}</p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm font-medium text-muted-foreground mr-2">Skills:</span>
                      {experience.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};