import { useLocation } from "react-router-dom";
import { About } from "./About";
import { HeroContent } from "./HeroContent";

interface IScroll {
  toProjects(): void;
}

const Hero = (props: IScroll) => {
  let location = useLocation();

  console.log(location);

  return (
    <section className="hero-container">
      <div className="hero-flex-container">
        {location.pathname === "/" ? (
          <HeroContent toProjects={props.toProjects} />
        ) : location.pathname === "/about" ? (
          <About toProjects={props.toProjects} />
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Hero;
