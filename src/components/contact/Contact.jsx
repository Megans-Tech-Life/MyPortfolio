import "./Contact.css";
import { Mail, Linkedin, Github, Download, ArrowRight } from "lucide-react";

export default function Contact() {
  const email = "meganjakims1@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/MegansTechLife";
  const githubUrl = "https://github.com/Megans-Tech-Life";

  const resumeUrl = "/Megan_Jakims_Resume.pdf";

  return (
    <div className="contact">
      <div className="contact__head">
        <h2 className="contact__title">Let’s talk</h2>
        <p className="contact__subtitle">
          I’m open to backend and full-stack opportunities. Email is the fastest
          way to reach me or connect on LinkedIn.
        </p>
      </div>

      <div className="contactCard contactCard--single">
        <div className="contactCard__top">
          <div>
            <h3 className="contactCard__title">Get in touch</h3>
            <p className="contactCard__desc">
              Want to chat about a role, project, or collaboration? Send a quick
              message and I’ll get back to you.
            </p>
          </div>

          <div className="contactCard__icons" aria-label="Social links">
            <a
              className="iconBtn"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub"
              title="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              className="iconBtn"
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="contactCard__actions">
          <a className="btn btn--primary" href={`mailto:${email}`}>
            <Mail size={18} />
            Email me
            <ArrowRight size={18} className="btn__arrow" />
            <p className="contact_email">
              <a href="mailto:meganjakims1@gmail.com">meganjakims1@gmail.com</a>
            </p>
          </a>

          <a className="btn btn--ghost" href={resumeUrl} download>
            <Download size={18} />
            Download resume
          </a>
        </div>
      </div>
    </div>
  );
}
