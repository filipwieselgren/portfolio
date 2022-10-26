import { useRef } from "react";
import { Contact } from "../components/ Contact";
import { Footer } from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Projets } from "../components/Projets";

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
      <Hero />
      <div ref={projectSection} id="projects" className="project-wrapper">
        <Projets />
      </div>
      <div ref={contactSection} className="background-container">
        <Contact />
        <Footer />
      </div>
    </>
  );
};
