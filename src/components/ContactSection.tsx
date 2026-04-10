import { useScrollFade } from "@/hooks/useScrollFade";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useScrollFade();

  return (
    <section id="contact" className="py-24 relative z-10">
      <div ref={ref} className="container mx-auto px-4 max-w-3xl text-center fade-in-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">Get In Touch</h2>
        <div className="w-16 h-1 bg-primary rounded mb-8 mx-auto" />
        <p className="text-muted-foreground mb-10 text-lg">
          Have a project in mind or want to collaborate? Let's connect.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {[
            { icon: Mail, label: "Email", href: "mailto:chandan@example.com" },
            { icon: Github, label: "GitHub", href: "https://github.com/chandan" },
            { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/chandan" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass neon-border rounded-xl px-6 py-4 flex items-center gap-3 hover:shadow-[0_0_25px_hsla(199,89%,48%,0.3)] transition-all duration-300 group"
            >
              <Icon size={20} className="text-primary" />
              <span className="text-foreground font-medium">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
