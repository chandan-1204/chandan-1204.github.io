import { useEffect, useState } from "react";
import AISphere from "./AISphere";

const roles = ["AI Developer", "ML Engineer", "Innovator", "Problem Solver"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center relative z-10 pt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="text-primary font-mono text-sm tracking-wider uppercase">Welcome to my world</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-gradient">Chandan</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground font-light h-8">
            <span className="font-mono">{text}</span>
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Building intelligent systems and pushing the boundaries of artificial intelligence.
          </p>
          <a
            href="#projects"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsla(199,89%,48%,0.4)] transition-all duration-300"
          >
            View Projects
          </a>
        </div>
        <div className="flex justify-center">
          <AISphere />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
