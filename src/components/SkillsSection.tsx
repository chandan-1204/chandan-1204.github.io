import { useScrollFade } from "@/hooks/useScrollFade";

const skills = [
  { name: "Python", color: "199 89% 48%" },
  { name: "Machine Learning", color: "270 80% 60%" },
  { name: "Deep Learning", color: "199 89% 48%" },
  { name: "JavaScript", color: "270 80% 60%" },
  { name: "TensorFlow", color: "199 89% 48%" },
  { name: "React", color: "270 80% 60%" },
  { name: "HTML/CSS", color: "199 89% 48%" },
  { name: "Data Science", color: "270 80% 60%" },
  { name: "NLP", color: "199 89% 48%" },
  { name: "Computer Vision", color: "270 80% 60%" },
];

const SkillsSection = () => {
  const ref = useScrollFade();

  return (
    <section id="skills" className="py-24 relative z-10">
      <div ref={ref} className="container mx-auto px-4 max-w-4xl fade-in-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">Skills</h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />
        <div className="flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <span
              key={s.name}
              className="px-5 py-2.5 rounded-full glass neon-border font-mono text-sm font-medium text-foreground hover:shadow-[0_0_20px_hsla(199,89%,48%,0.3)] transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
