import { useScrollFade } from "@/hooks/useScrollFade";
import { Github } from "lucide-react";

const GitHubSection = () => {
  const ref = useScrollFade();

  return (
    <section id="github" className="py-24 relative z-10">
      <div ref={ref} className="container mx-auto px-4 max-w-4xl fade-in-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">GitHub Stats</h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />
        <div className="glass neon-border rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Github className="text-primary" size={24} />
            <a href="https://github.com/chandan-1204" target="_blank" rel="noopener noreferrer" className="font-mono text-foreground hover:text-primary transition-colors">@chandan-1204</a>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <img
              src="https://github-readme-stats.vercel.app/api?username=chandan-1204&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=0ea5e9&icon_color=0ea5e9&text_color=94a3b8"
              alt="GitHub Stats"
              className="w-full rounded-lg"
              loading="lazy"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=chandan-1204&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=0ea5e9&text_color=94a3b8"
              alt="Top Languages"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=chandan-1204&theme=tokyonight&hide_border=true&background=0d1117&ring=0ea5e9&fire=0ea5e9&currStreakLabel=0ea5e9"
            alt="GitHub Streak"
            className="w-full rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
