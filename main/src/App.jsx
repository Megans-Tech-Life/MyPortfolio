import Navigation from "./components/navigation/Navigation.jsx";
import Header from "./components/header/Header.jsx";
import Skills from "./components/skills/Skills.jsx";
import Projects from "./components/projects/Projects.jsx";
import Experience from "./components/experience/Experience.jsx";
import Certificates from "./components/certificates/Certificates.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <Navigation />

      <main className="page">
        <section id="home" className="section">
          <Header />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="experience" className="section">
          <Experience />
        </section>

        <section id="certificates" className="section">
          <Certificates />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>

        <Footer />
      </main>
    </>
  );
}
