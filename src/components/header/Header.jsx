import { Github, Linkedin, Mail } from "lucide-react";
import "./Header.css";

export default function Header() {
  return (
    <header className="hero">
      <div className="hero__container">
        <div className="hero__grid">
          {/* Left */}
          <div className="hero__content">
            <div className="hero__badge">
              <span>Backend • Full-Stack Engineer</span>
            </div>

            <h1 className="hero__title">
              Building reliable
              <br />
              <span className="hero__titleAccent">backend systems</span>
            </h1>

            <p className="hero__subtitle">
              I’m Megan Jakims, a backend-focused full-stack developer who
              builds secure, data-driven APIs and workflow systems. I love
              turning messy real-world requirements into clean, maintainable
              code.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="#contact">
                Let’s Talk
              </a>
              <a className="btn btn--secondary" href="#projects">
                View Projects
              </a>
            </div>

            <div className="hero__social">
              <a
                className="iconLink"
                href="https://github.com/Megans-Tech-Life"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github size={22} />
              </a>

              <a
                className="iconLink"
                href="https://www.linkedin.com/in/Meganstechlife/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin size={22} />
              </a>

              <a
                className="iconLink"
                href="mailto:MeganJakims1@gmail.com"
                aria-label="Email"
                title="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="hero__visual">
            <div className="hero__glow" aria-hidden="true" />
            <img
              src="/Portfolio-img.png"
              alt="Megan Jakims"
              className="hero__image"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
