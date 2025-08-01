import { RevealOnScroll } from "../RevealOnScroll";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

export const Contact = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const navigationLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          {/* Contact Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Contact Dhanush Chinivar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Feel free to reach out to me for any questions or opportunities! I'm 
              based in Charlotte, NC, and would love to relocate and explore.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <a 
                href="mailto:dhanushchinivar.com" 
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email: dhanushchinivar.com</span>
              </a>
              <a 
                href="tel:+17049303847" 
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Phone: +1 (704) 930-3847</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* Footer */}
        <RevealOnScroll delay={200}>
          <div className="border-t border-border pt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Dhanush Desai</h3>
              
              {/* Navigation Links */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {navigationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6 mb-8">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-muted-foreground hover:text-primary transition-colors p-2"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>

              {/* Copyright */}
              <p className="text-sm text-muted-foreground">
                © 2025 Dhanush Chinivar. All rights reserved.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};