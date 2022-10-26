import { useRef } from "react";
import { Contact } from "../components/ Contact";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import Projets from "../components/Projets";

export const AboutPage = () => {
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
      top: contactSection.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar scrollDown={scrollDown} toProjects={toProjects} />
      <About toProjects={toProjects} />
      <div ref={projectSection} id="projects" className="project-wrapper">
        <Projets />
      </div>
      <div className="background-container">
        <Contact />
        <Footer toProjects={toProjects} />
      </div>
    </>
  );
};
