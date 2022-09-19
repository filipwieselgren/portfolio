import { useState } from "react";
import me from "../assets/me.png";
import github from "../assets/github.png";
import linkedin from "../assets/Linkedin-logo-icon-png.png";

const Navbar = () => {
  const [active, setActive] = useState<string>("nav-menu");
  const [toggleIcon, setToggleIcon] = useState<string>("nav-toggler");

  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");

    toggleIcon === "nav-toggler"
      ? setToggleIcon("nav-toggler toggle")
      : setToggleIcon("nav-toggler");
  };

  const meInActiveNav = (
    <>
      <img className="active-navbar-img" src={me} alt="Navbar image of me" />
      <div className="img-underline-active"></div>
    </>
  );
  const gitLinkedActive = (
    <>
      <div className="some-con">
        <img className="active-navbar-img" src={github} alt="Github" />
        <img
          className="active-navbar-img"
          src={linkedin}
          alt="Navbar image of me"
        />
      </div>
    </>
  );

  return (
    <>
      <nav className="navbar">
        <img className="navbar-img" src={me} alt="Navbar image of me" />
        <div className="name-nav-options-container">
          <div className="nav-menu-container">
            <ul className={active}>
              {active !== "nav-menu" ? meInActiveNav : <></>}
              <li className="nav-item">Read more about me</li>
              <li className="nav-item">See my resume</li>
              <li className="nav-item">Contact me</li>
              {active !== "nav-menu" ? gitLinkedActive : <></>}
            </ul>

            <div onClick={navToggle} className={toggleIcon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>

          <div className="navbar-name-container">
            <div className="navbar-name">Filip Wieselgren</div>
            <div className="navbar-name">Front End Developer</div>
          </div>
        </div>
      </nav>
      <div className="img-underline"></div>
    </>
  );
};

export default Navbar;
