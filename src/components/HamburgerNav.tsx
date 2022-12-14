import me from "../assets/logga-svart.png";
import github from "../assets/github.png";
import linkedin from "../assets/Linkedin-logo-icon-png.png";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState, toggleLanguage } from "../redux/reducers/reducer";
import { BsCaretRight } from "react-icons/bs/";
import { useNavigate } from "react-router-dom";

interface IActive {
  navToggle(): void;
  active: string;
  toggleIcon: string;
  toContact(): void;
  toProjects(): void;
  closeNav(): void;
}

export const HamburgerNav = (props: IActive) => {
  const languageArray = useSelector(
    (state: IState) => state.changeLanguage.languages
  );
  let language = useSelector((state: IState) => state.changeLanguage.value);

  const [switchLangBtn, setSwitchLangBtn] = useState<boolean>(false);
  const [page, setPage] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const triggerNavToggle = () => {
    props.navToggle();
    setSwitchLangBtn(!switchLangBtn);
  };

  const toLink = (pageSection: number) => {
    if (pageSection === 1) {
      props.closeNav();
      props.toProjects();
    } else if (pageSection === 2) {
      props.closeNav();
      setPage("/resume");
    } else if (pageSection === 3) {
      props.closeNav();
      setPage("/about");
    } else if (pageSection === 4) {
      props.closeNav();
      props.toContact();
    }
  };

  languageArray.map((l) => {
    return l.language;
  });

  const meInActiveNav = (
    <>
      <a href="/">
        <img
          className="active-navbar-img logo-navbar"
          src={me}
          alt="Navbar image of me"
          onClick={() => toLink(5)}
        />
      </a>

      <div className="img-underline-active"></div>
    </>
  );
  const gitLinkedActive = (
    <>
      <div className="some-con">
        <a href="https://github.com/filipwieselgren" target="_blank">
          <img className="active-navbar-img" src={github} alt="Github" />
        </a>

        <a href="https://www.linkedin.com/in/filipwieselgren/" target="_blank">
          <img
            className="active-navbar-img"
            src={linkedin}
            alt="Navbar image of me"
          />
        </a>
      </div>
    </>
  );

  let switchLang: string = "";

  if (switchLangBtn) {
    switchLang = "switchLang-btn-active";
  } else {
    switchLang = "switchLang-btn-noshow";
  }

  let switchLangbtnText: string;
  if (language === "english") {
    switchLangbtnText = "Byt till Svenska";
  } else {
    switchLangbtnText = "Switch to English";
  }

  // useEffect(() => {
  //   localStorage.setItem("activeLanguage", JSON.stringify(language));
  // }, [language]);

  return (
    <>
      <ul className={props.active}>
        {props.active !== "nav-menu" ? meInActiveNav : <></>}

        {languageArray.map((lang) => {
          return lang.language === language ? (
            lang.btntext.map((btn) => {
              return (
                <a href={btn.btnid === 4 || btn.btnid === 1 ? undefined : page}>
                  <li
                    onClick={() => toLink(btn.btnid)}
                    className="li-nav"
                    key={btn.btnid}
                  >
                    <BsCaretRight /> {btn.text}
                  </li>
                </a>
              );
            })
          ) : (
            <></>
          );
        })}

        <button
          onClick={() => dispatch(toggleLanguage())}
          className={switchLang}
        >
          {switchLangbtnText}
        </button>
        {props.active !== "nav-menu" ? gitLinkedActive : <></>}
      </ul>

      <div onClick={triggerNavToggle} className={props.toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </>
  );
};
