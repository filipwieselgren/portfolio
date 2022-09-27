import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { IState } from "../redux/reducers/reducer";
import { HamburgerNav } from "./HamburgerNav";

const Navbar = () => {
  const [active, setActive] = useState<string>("nav-menu");
  const [toggleIcon, setToggleIcon] = useState<string>("nav-toggler");
  const navigate = useNavigate();

  const languageArray = useSelector(
    (state: IState) => state.changeLanguage.languages
  );
  let language = useSelector((state: IState) => state.changeLanguage.value);

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
        {/* <img
          className="navbar-img"
          src={me}
          alt="Navbar image of me"
          onClick={() => navigate("/")}
        /> */}

        <div className="name-nav-options-container">
          <div className="nav-menu-container">
            <div className="logo-cirkle">
              <img
                className="navbar-img"
                src={logo}
                alt="Navbar image of me"
                onClick={() => navigate("/")}
              />
            </div>
            <HamburgerNav
              navToggle={navToggle}
              active={active}
              toggleIcon={toggleIcon}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
