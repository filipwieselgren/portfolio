import me from "../assets/me-one-real-eay-back.png";
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
}

export const HamburgerNav = (props: IActive) => {
  // useSelector
  const languageArray = useSelector(
    (state: IState) => state.changeLanguage.languages
  );
  let language = useSelector((state: IState) => state.changeLanguage.value);

  //useState
  const [switchLangBtn, setSwitchLangBtn] = useState<boolean>(false);

  const dispatch = useDispatch();

  const triggerNavToggle = () => {
    props.navToggle();
    setSwitchLangBtn(!switchLangBtn);
  };

  languageArray.map((l) => {
    return l.language;
  });

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

  useEffect(() => {
    localStorage.setItem("activeLanguage", JSON.stringify(language));
  }, [language]);

  return (
    <>
      <ul className={props.active}>
        {props.active !== "nav-menu" ? meInActiveNav : <></>}

        {languageArray.map((lang) => {
          return lang.language === language ? (
            lang.btntext.map((btn) => {
              return (
                <li className="li-nav" key={btn.btnid}>
                  <BsCaretRight /> {btn.text}
                </li>
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
