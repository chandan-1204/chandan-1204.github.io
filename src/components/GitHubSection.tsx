import { useScrollFade } from "@/hooks/useScrollFade";
import { Github, Sparkles, Code2, Activity } from "lucide-react";

const stats = [
  { icon: Code2, label: "Top Language", value: "Python" },
  { icon: Sparkles, label: "Open Source Repos", value: "12+" },
  { icon: Activity, label: "Weekly Activity", value: "Consistent" },
];

const GitHubSection = () => {
  const ref = useScrollFade();

  return (
    <section id="github" className="py-24 relative z-10">
      <div ref={ref} className="container mx-auto px-4 max-w-4xl fade-in-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">GitHub Stats</h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />
        <div className="glass neon-border rounded-2xl p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <Github className="text-primary" size={28} />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-primary mb-1">GitHub</p>
                <a href="https://github.com/chandan-1204" target="_blank" rel="noopener noreferrer" className="font-mono text-xl text-foreground hover:text-primary transition-colors">@chandan-1204</a>
              </div>
            </div>
            <a href="https://github.com/chandan-1204" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/5 px-5 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10">Visit GitHub Profile</a>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-3xl border border-primary/10 bg-slate-950/70 p-6 shadow-[0_15px_40px_rgba(14,16,32,0.35)]">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4">
                    <Icon size={20} />
                  </div>
                  <p className="text-sm uppercase tracking-[0.24em] text-primary mb-2">{stat.label}</p>
                  <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                </div>
              );
            })}
          </div>

          <div className="rounded-3xl border border-primary/10 bg-slate-950/80 p-6 text-slate-300">
            <p className="text-sm uppercase tracking-[0.24em] text-primary mb-3">Featured repository</p>
            <a href="https://github.com/chandan-1204/ai-resume-ranker" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-white hover:text-primary transition-colors">AI Resume Ranker</a>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">A polished portfolio-style repo highlight with NLP resume ranking, Flask backend support, and a clean production-ready interface.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
