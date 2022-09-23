import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs/";
import { Link } from "react-router-dom";

export const NavBtnsHero = () => {
  return (
    <div className="navbts-hero-container">
      <BsChevronCompactUp className="arrow arrow-up" />

      <Link to={"/about"} className="hero-link to-aboutme-link">
        Read more about me
      </Link>

      <Link to={"/about"} className="hero-link to-project-link">
        Click or scroll to see my work
      </Link>

      <BsChevronCompactDown className="arrow arrow-down" />
    </div>
  );
};
