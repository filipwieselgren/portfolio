import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import me from "../assets/me-one-real-eay-back.png";
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
              <div className="logo-w">w</div>
              <div className="logo-f">f</div>
            </div>
            <HamburgerNav
              navToggle={navToggle}
              active={active}
              toggleIcon={toggleIcon}
            />
          </div>

          {/* <div className="navbar-name-container">
            <div className="navbar-name">Filip Wieselgren</div>
            {languageArray.map((lang) => {
              return lang.language == language ? (
                <div className="navbar-name">{lang.frontEnd}</div>
              ) : (
                <></>
              );
            })}
          </div> */}
        </div>
      </nav>
      {/* <div className="img-underline"></div> */}
    </>
  );
};

export default Navbar;
