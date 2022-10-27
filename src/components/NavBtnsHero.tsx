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

  const homepageBtns = (
    <Link to={"/about"} className="hero-link to-aboutme-link">
      <div className="hero-btn-container to-about">
        {languageArray.map((lang) =>
          lang.language === language ? lang.heroReadAboutMe : <></>
        )}
        <BsCaretUp className="arrow arrow-up" />
      </div>
    </Link>
  );

  return (
    <>
      {languageArray.map((lang) => {
        return lang.language === language ? (
          <div className="navbts-hero-container">
            {location.pathname === "/" ? (
              homepageBtns
            ) : location.pathname === "/about" ? (
              <Link to={"/resume"} className="hero-link to-aboutme-link">
                <div className="hero-btn-container to-about">
                  {lang.heroResume}
                  <BsCaretUp className="arrow arrow-up" />
                </div>
              </Link>
            ) : (
              homepageBtns
            )}

            {/* <Link to={"#projects"} className="hero-link to-project-link"> */}
            <a onClick={props.toProjects} className="hero-link to-project-link">
              <div className="hero-btn-container to-projects">
                {lang.heroSeeMyProjects}
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
