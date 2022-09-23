import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs/";
import { Link } from "react-router-dom";

export const NavBtnsHero = () => {
  return (
    <div className="navbts-hero-container">
      <div className="hero-btn-container to-about">
        <BsChevronCompactUp className="arrow arrow-up" />
        <Link to={"/about"} className="hero-link to-aboutme-link">
          Read more about me
        </Link>
      </div>

      <div className="hero-btn-container to-projects">
        <Link to={"/about"} className="hero-link to-project-link">
          Click or scroll to see my projects
        </Link>
        <BsChevronCompactDown className="arrow arrow-down" />
      </div>
    </div>
  );
};
