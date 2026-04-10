import { useScrollFade } from "@/hooks/useScrollFade";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AI Resume Ranker",
    description: "An intelligent system that ranks resumes based on job descriptions using NLP and ML algorithms for efficient candidate screening.",
    tags: ["Python", "NLP", "ML", "Flask"],
    repoLink: "https://github.com/chandan-1204/ai-resume-ranker",
  },
  {
    title: "Fraud Credit Card Detection",
    description: "Machine learning model to detect fraudulent credit card transactions with high accuracy using anomaly detection techniques.",
    tags: ["Python", "Scikit-learn", "Pandas"],
    repoLink: "https://github.com/chandan-1204/fraud-credit-card-detection",
  },
  {
    title: "Stock Price Prediction",
    description: "LSTM-based deep learning model for predicting stock market trends using historical data and technical indicators.",
    tags: ["Python", "TensorFlow", "LSTM", "Finance"],
    repoLink: "https://github.com/chandan-1204/stock-price-prediction",
  },
];

const ProjectsSection = () => {
  const ref = useScrollFade();

  return (
    <section id="projects" className="py-24 relative z-10">
      <div ref={ref} className="container mx-auto px-4 max-w-5xl fade-in-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">Projects</h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
