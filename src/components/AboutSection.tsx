import { useScrollFade } from "@/hooks/useScrollFade";

const AboutSection = () => {
  const ref = useScrollFade();

  return (
    <section id="about" className="py-24 relative z-10">
      <div ref={ref} className="container mx-auto px-4 max-w-3xl fade-in-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">About Me</h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />
        <div className="glass rounded-2xl p-8 neon-border space-y-4">
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a passionate <span className="text-foreground font-medium">AI/ML enthusiast</span> dedicated to building
            intelligent systems that solve real-world problems. From deep learning models to full-stack AI applications,
            I love turning complex data into meaningful insights.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently exploring the intersection of machine learning and software engineering, with a focus on
            building scalable, production-ready AI solutions. I believe in the power of technology to transform
            industries and improve lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
