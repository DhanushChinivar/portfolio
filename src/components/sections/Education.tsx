import { RevealOnScroll } from "../RevealOnScroll";
import { GraduationCap, Briefcase } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Education & Work Experience
            </span>
          </h2>
        </RevealOnScroll>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <RevealOnScroll delay={200}>
            <div className="bg-experience-card border border-experience-border rounded-xl p-6">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="pb-6 border-b border-experience-border last:border-b-0 last:pb-0">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    M.S. in Information Technology
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    Deakin University (2016-2020)
                  </p>
                  <p className="text-foreground/80 text-sm">
                    Pursuing Master's in Information Technology with a focus on Software 
                    Development and CyberSecurity, gaining expertise in new trends and technologies.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Work Experience Summary */}
          <RevealOnScroll delay={400}>
            <div className="bg-experience-card border border-experience-border rounded-xl p-6">
              <div className="flex items-center mb-6">
                <Briefcase className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">Work Experience</h3>
              </div>
              
              <div className="space-y-4">
                <div className="pb-4 border-b border-experience-border last:border-b-0 last:pb-0">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Application Developer Intern at Nubevest
                  </h4>
                  <p className="text-primary text-sm mb-2">(January 2025 - Present)</p>
                  <ul className="text-foreground/80 text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Developed custom CRM solutions, e-commerce app, and payment platform 
                      for small businesses to accommodate growing user bases.
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Contributed to designing and optimizing user interfaces for web 
                      applications using .NET, Laravel, and PHP ensuring a seamless user experience.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};