import { BsCaretUp, BsCaretDown } from "react-icons/bs/";
import { useSelector } from "react-redux";

import { Link, useLocation } from "react-router-dom";
import { IState } from "../redux/reducers/reducer";

interface IScroll {
  toProjects(): void;
}

export const NavBtnsHero = (props: IScroll) => {
  const languageArray = useSelector(
    (state: IState) => state.changeLanguage.languages
  );

  let language = useSelector((state: IState) => state.changeLanguage.value);
  let location = useLocation();

  const aboutMeBtns = (
    <Link to={"/about"} className="hero-link to-aboutme-link desktop">
      <div className="hero-btn-container to-about">
        {languageArray.map((lang) =>
          lang.language === language ? lang.heroReadAboutMe : <></>
        )}
        <BsCaretUp className="arrow arrow-up" />
      </div>
    </Link>
  );
  const aboutMeMobileBtns = (
    <Link to={"/about"} className="hero-link to-aboutme-link mobile">
      <div className="hero-btn-container to-about">
        {languageArray.map((lang) =>
          lang.language === language ? lang.heroMobileReadAboutMe : <></>
        )}
        <BsCaretUp className="arrow arrow-up" />
      </div>
    </Link>
  );

  let navbtsHeroContainer: string = "";

  if (location.pathname === "/resume") {
    navbtsHeroContainer = "navbts-hero-container-resume";
  } else {
    navbtsHeroContainer = "navbts-hero-container";
  }

  return (
    <>
      {languageArray.map((lang) => {
        return lang.language === language ? (
          <div className={navbtsHeroContainer}>
            {location.pathname === "/" ? (
              aboutMeBtns
            ) : location.pathname === "/about" ? (
              <Link
                to={"/resume"}
                className="hero-link to-aboutme-link desktop"
              >
                <div className="hero-btn-container to-about ">
                  {lang.heroResume}
                  <BsCaretUp className="arrow arrow-up" />
                </div>
              </Link>
            ) : (
              aboutMeBtns
            )}

            {aboutMeMobileBtns}

            {/* <Link to={"#projects"} className="hero-link to-project-link"> */}
            <a
              onClick={props.toProjects}
              className="hero-link to-project-link desktop"
            >
              <div className="hero-btn-container to-projects">
                {lang.heroSeeMyProjects}
                <BsCaretDown className="arrow arrow-down" />
              </div>
            </a>
            <a
              onClick={props.toProjects}
              className="hero-link to-project-link mobile"
            >
              <div className="hero-btn-container to-projects">
                {lang.heroMobileSeeMyProjects}
                <BsCaretDown className="arrow arrow-down" />
              </div>
            </a>
            {/* </Link> */}
          </div>
        ) : (
          <></>
        );
      })}
    </>
  );
};
