import { useRef } from "react";
import { Contact } from "../components/ Contact";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import Projets from "../components/Projets";
import { Resume } from "../components/Resume";
import github from "../assets/github.png";

export const ResumePage = () => {
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
      <Resume toProjects={toProjects} />
      <div id="projects" className="project-wrapper">
        <div className="projectHeader-wrapper" ref={projectSection}>
          <div className="projectHeader left">Projects</div>
          <div className="projectHeader right">
            More projects{" "}
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
