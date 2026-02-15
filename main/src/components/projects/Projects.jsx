import "./Projects.css";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Affiliate Marketing Demo",
    highlight: "CRM-style SaaS backend",
    description:
      "Backend-focused CRM demo featuring lead stages, role-aware workflows, and structured data management. Built to showcase scalable API patterns and real-world business logic.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Alembic", "JWT/Auth"],
    github: "https://github.com/Megans-Tech-Life/Affiliate_Marketing_Demo",
    demo: "https://affiliate-marketing-demo.onrender.com/docs",
  },
  {
    title: "WTWR (What to Wear?)",
    highlight: "API-driven MERN app",
    description:
      "Weather-based outfit recommendation app with responsive UI and clean component structure. Demonstrates full-stack thinking, state-driven UI, and API integration patterns.",
    tech: ["React", "JavaScript", "Node.js", "Express", "CSS"],
    github: "https://github.com/Megans-Tech-Life/WTWR-What_to_Wear",
    demo: "https://wtwr-what-to-wear.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects__head">
        <h2 className="projects__title">Featured Projects</h2>
        <p className="projects__subtitle">
          A couple of projects that best represent my backend + full-stack work.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((p) => (
          <article key={p.title} className="projectCard">
            <div className="projectCard__top">
              <h3 className="projectCard__title">{p.title}</h3>
              <span className="projectCard__pill">{p.highlight}</span>
            </div>

            <p className="projectCard__desc">{p.description}</p>

            <div className="projectCard__tags">
              {p.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="projectCard__links">
              <a
                className="link"
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
                Code
              </a>

              {p.demo ? (
                <a
                  className="link"
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} />
                  Demo
                </a>
              ) : (
                <span className="link link--muted" title="Demo coming soon">
                  <ExternalLink size={18} />
                  Demo (soon)
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="projects__footer">
        <a
          className="projects__more"
          href="https://github.com/Megans-Tech-Life"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={18} />
          View more projects on GitHub
        </a>
      </div>
    </div>
  );
}
