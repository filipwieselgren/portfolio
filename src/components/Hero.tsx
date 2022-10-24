import { useLocation } from "react-router-dom";
import { About } from "./About";
import { HeroContent } from "./HeroContent";

const Hero = () => {
  let location = useLocation();

  console.log(location);

  return (
    <section className="hero-container">
      <div className="hero-flex-container">
        {location.pathname === "/" ? (
          <HeroContent />
        ) : location.pathname === "/about" ? (
          <About />
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Hero;
