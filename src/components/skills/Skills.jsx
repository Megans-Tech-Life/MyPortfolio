import "./Skills.css";

const skillCategories = [
  {
    category: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express",
      "KeystoneJS",
      "GraphQL",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "GitHub", "Postman", "Jira"],
  },
  {
    category: "Concepts",
    skills: ["REST APIs", "Auth (JWT)", "Migrations (Alembic)", "Testing"],
  },
];

// Flatten skills with category for easy mapping
const allSkills = skillCategories.flatMap((cat) =>
  cat.skills.map((skill) => ({ skill, category: cat.category })),
);

// Duplicate for seamless loop
const rowA = [...allSkills, ...allSkills];
const rowB = [...allSkills.slice().reverse(), ...allSkills.slice().reverse()];

export default function Skills() {
  return (
    <div className="skillsMarquee">
      <div className="skillsMarquee__head">
        <h2 className="skillsMarquee__title">Technical Skills</h2>
        <p className="skillsMarquee__subtitle">
          Technologies I build with most often
        </p>
      </div>

      {/* Row 1 */}
      <div className="marquee">
        <div className="marquee__track marquee__track--left" aria-hidden="true">
          {rowA.map((item, idx) => (
            <div className="pill" key={`${item.skill}-${idx}`}>
              <span className="pill__skill">{item.skill}</span>
              <span className="pill__cat">{item.category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="marquee marquee--spaced">
        <div
          className="marquee__track marquee__track--right"
          aria-hidden="true"
        >
          {rowB.map((item, idx) => (
            <div className="pill" key={`${item.skill}-${idx}`}>
              <span className="pill__skill">{item.skill}</span>
              <span className="pill__cat">{item.category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* small static “adaptable” line */}
      <div className="skillsMarquee__foot">
        <span className="skillsMarquee__note">
          Easily adaptable to new tools and languages as needed for each project
        </span>
      </div>
    </div>
  );
}
