import { BsCaretUp, BsCaretDown } from "react-icons/bs/";

import { Link, useLocation } from "react-router-dom";

const homepageBtns = (
  <Link to={"/about"} className="hero-link to-aboutme-link">
    <div className="hero-btn-container to-about">
      Read more about me
      <BsCaretUp className="arrow arrow-up" />
    </div>
  </Link>
);

export const NavBtnsHero = () => {
  let location = useLocation();
  return (
    <div className="navbts-hero-container">
      {location.pathname === "/" ? (
        homepageBtns
      ) : location.pathname === "/about" ? (
        <Link to={"/resume"} className="hero-link to-aboutme-link">
          <div className="hero-btn-container to-about">
            See my resume
            <BsCaretUp className="arrow arrow-up" />
          </div>
        </Link>
      ) : (
        homepageBtns
      )}

      {/* <Link to={"#projects"} className="hero-link to-project-link"> */}
      <a href="#projects" className="hero-link to-project-link">
        <div className="hero-btn-container to-projects">
          See my projects
          <BsCaretDown className="arrow arrow-down" />
        </div>
      </a>
      {/* </Link> */}
    </div>
  );
};
