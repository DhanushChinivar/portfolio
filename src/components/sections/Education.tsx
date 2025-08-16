import { RevealOnScroll } from "../RevealOnScroll";
import { GraduationCap, Briefcase } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </RevealOnScroll>
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
  {/* Master's Education - Left */}
  <RevealOnScroll delay={200}>
    <div className="bg-experience-card border border-experience-border rounded-xl p-6">
      <div className="flex items-center mb-6">
        <GraduationCap className="w-8 h-8 text-primary mr-3" />
        <h3 className="text-2xl font-semibold text-foreground">Master's Education</h3>
      </div>

      <div className="space-y-6">
        <div className="pb-6 border-b border-experience-border last:border-b-0 last:pb-0">
          <h4 className="text-lg font-semibold text-foreground mb-2">
            M.S. in Information Technology
          </h4>
          <p className="text-muted-foreground mb-3">
            Deakin University (Jul 2024 - May 2026)
          </p>
          <p className="text-foreground/80 text-sm">
            Pursuing Master's in Information Technology with a focus on Software 
            Development and CyberSecurity, gaining expertise in new trends and technologies.
          </p>
        </div>
      </div>
    </div>
  </RevealOnScroll>

  {/* Bachelor's Education - Right */}
  <RevealOnScroll delay={400}>
    <div className="bg-experience-card border border-experience-border rounded-xl p-6">
      <div className="flex items-center mb-6">
        <GraduationCap className="w-8 h-8 text-primary mr-3" />
        <h3 className="text-2xl font-semibold text-foreground">Bachelor's Education</h3>
      </div>

      <div className="space-y-6">
        <div className="pb-6 border-b border-experience-border last:border-b-0 last:pb-0">
          <h4 className="text-lg font-semibold text-foreground mb-2">
            B.E. in Engineering
          </h4>
          <p className="text-muted-foreground mb-3">
            Bangalore Institute of Technology (Aug 2018 - Jul 2022)
          </p>
          <p className="text-foreground/80 text-sm">
            Completed Bachelor of Engineering, building a solid foundation in core engineering concepts and problem-solving skills.
          </p>
        </div>
      </div>
    </div>
  </RevealOnScroll>
</div>


      </div>
    </section>
  );
};