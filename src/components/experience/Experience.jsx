import "./Experience.css";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Backend / Full-Stack Contributor",
    company: "TripleTen Nexus Externship (Partner-Pipeline)",
    period: "Jan 2026 – Present",
    description:
      "Contributing to an internal operations dashboard supporting partner coordination and cohort management. Working in a Keystone + GraphQL + MySQL codebase with React + TypeScript.",
    achievements: [
      "Built REST endpoints and controllers; validated relational data and integration workflows",
      "Collaborated via Jira planning, PR reviews, and CI checks with a senior-led team",
      "Focused on clean implementations, edge cases, and maintainable patterns",
    ],
  },
  {
    role: "Backend Engineer Intern",
    company: "XIRCLS (Affiliate Marketing Platform)",
    period: "Sep 2025 – Dec 2025",
    description:
      "Built and refactored backend features for an affiliate marketing CRM pipeline. Focused on scalable API patterns, data integrity, and production-style workflows.",
    achievements: [
      "Implemented pipeline stages and backend services for lead and customer workflows",
      "Improved maintainability through refactors, clearer service boundaries, and consistent API contracts",
      "Delivered features through GitHub PRs, code reviews, and iterative feedback",
    ],
  },
];

export default function Experience() {
  return (
    <div className="experience">
      <div className="experience__head">
        <h2 className="experience__title">Experience</h2>
        <p className="experience__subtitle">
          A timeline of the work that shaped my engineering focus.
        </p>
      </div>

      <div className="timeline">
        <div className="timeline__line" aria-hidden="true" />

        {experiences.map((exp) => (
          <article
            key={`${exp.company}-${exp.period}`}
            className="timelineItem"
          >
            <div className="timelineItem__dot" aria-hidden="true" />

            <div className="card">
              <div className="card__top">
                <div className="card__left">
                  <h3 className="card__role">{exp.role}</h3>
                  <div className="card__company">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="card__period">{exp.period}</div>
              </div>

              <p className="card__desc">{exp.description}</p>

              <ul className="card__list">
                {exp.achievements.map((a) => (
                  <li key={a} className="card__item">
                    <span className="card__bullet" aria-hidden="true">
                      ▸
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
