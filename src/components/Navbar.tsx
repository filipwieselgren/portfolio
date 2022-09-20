import { useState } from "react";
import me from "../assets/me.png";
import { HamburgerNav } from "./HamburgerNav";

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
            <HamburgerNav
              navToggle={navToggle}
              active={active}
              toggleIcon={toggleIcon}
            />
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
