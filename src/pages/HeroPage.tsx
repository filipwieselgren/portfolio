import { useRef } from "react";
import { Contact } from "../components/ Contact";
import { Footer } from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Projets } from "../components/Projets";
import github from "../assets/github.png";

export const HeroPage = () => {
  const contactSection = useRef<any>(null);
  const projectSection = useRef<any>(null);

  const scrollDown = () => {
    window.scrollTo({
      top: contactSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  const toProjects = () => {
    window.scrollTo({
      top: projectSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar scrollDown={scrollDown} toProjects={toProjects} />
      <Hero toProjects={toProjects} />
      <div id="projects" className="project-wrapper">
        <div className="projectHeader-wrapper" ref={projectSection}>
          <div className="projectHeader left">Projects</div>
          <div className="projectHeader right">
            More projects here
            <img
              src={github}
              alt="github logo"
              className="github-logo-project"
            />
          </div>
        </div>
        <Projets />
      </div>
      <div ref={contactSection} className="background-container">
        <Contact />
        <Footer toProjects={toProjects} />
      </div>
    </>
  );
};
