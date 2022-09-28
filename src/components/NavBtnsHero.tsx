import {
  BsChevronCompactDown,
  BsChevronCompactUp,
  BsCaretUp,
  BsCaretDown,
} from "react-icons/bs/";

import { Link } from "react-router-dom";

export const NavBtnsHero = () => {
  return (
    <div className="navbts-hero-container">
      <div className="hero-btn-content-container">
        <div className="hero-btn-container to-about">
          <Link to={"/about"} className="hero-link to-aboutme-link">
            Read more about me
          </Link>
          <BsCaretUp className="arrow arrow-up" />
        </div>

        <div className="hero-btn-container to-projects">
          <Link to={"/projects"} className="hero-link to-project-link">
            See my projects
          </Link>
          <BsCaretDown className="arrow arrow-down" />
        </div>
      </div>
    </div>
  );
};
