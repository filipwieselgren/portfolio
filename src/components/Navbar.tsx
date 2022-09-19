import { useState } from "react";
import me from "../assets/me.png";

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

  return (
    <>
      <nav className="navbar">
        <img className="navbar-img" src={me} alt="Navbar image of me" />

        <div className="name-nav-options-container">
          <div className="nav-menu-container">
            <ul className={active}>
              <li className="nav-item">📖 Read more about me</li>
              <li className="nav-item">📄 See my resume</li>
              <li className="nav-item">📩 Contact me</li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
              <div onClick={navToggle} className="line1"></div>
              <div onClick={navToggle} className="line2"></div>
              <div onClick={navToggle} className="line3"></div>
            </div>
          </div>

          <div className="navbar-name-container">
            <div className="navbar-name">Filip Wieselgren</div>
            <div className="navbar-name">Front End Developer</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
