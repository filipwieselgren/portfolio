import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs/";
import { Link } from "react-router-dom";

export const NavBtnsHero = () => {
  return (
    <div className="navbts-hero-container">
      <div className="arrow-up-container">
        <div className="arrow-up-content">
          <BsChevronCompactUp className="arrow arrow-up" />

          <Link to={"/about"} className="hero-link to-aboutme-link">
            Read more about me
          </Link>
        </div>
      </div>
      <div className="arrow-down-container">
        <div className="arrow-down-content">
          <Link to={"/about"} className="hero-link to-project-link">
            See my projects
          </Link>

          <BsChevronCompactDown className="arrow arrow-down" />
        </div>
      </div>
    </div>
  );
};
