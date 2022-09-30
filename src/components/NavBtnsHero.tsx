import { BsCaretUp, BsCaretDown } from "react-icons/bs/";

import { Link } from "react-router-dom";

export const NavBtnsHero = () => {
  return (
    <div className="navbts-hero-container">
      <Link to={"/about"} className="hero-link to-aboutme-link">
        <div className="hero-btn-container to-about">
          Read more about me
          <BsCaretUp className="arrow arrow-up" />
        </div>
      </Link>

      <Link to={"/projects"} className="hero-link to-project-link">
        <div className="hero-btn-container to-projects">
          See my projects
          <BsCaretDown className="arrow arrow-down" />
        </div>
      </Link>
    </div>
  );
};
