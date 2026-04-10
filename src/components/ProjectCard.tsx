import { useState, useRef } from "react";

interface Props {
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({ title, description, tags }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const handleMouse = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    });
  };

  const handleLeave = () => setStyle({ transform: "perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)" });

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ ...style, transition: "transform 0.2s ease, box-shadow 0.3s ease" }}
      className="glass neon-border rounded-2xl p-6 card-3d cursor-default group"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:shadow-[0_0_15px_hsla(199,89%,48%,0.3)] transition-shadow">
        <span className="text-primary text-lg">⚡</span>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
