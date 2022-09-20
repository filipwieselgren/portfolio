import me from "../assets/me.png";
import github from "../assets/github.png";
import linkedin from "../assets/Linkedin-logo-icon-png.png";
import { heroText } from "../models/IActiveLanguage";
import { useEffect, useState } from "react";
import IHeroTextInterface from "../models/IHeroTextInterface";
import { useDispatch, useSelector } from "react-redux";
import { IState, toggleLanguage } from "../redux/reducers/reducer";

interface IActive {
  navToggle(): void;
  active: string;
  toggleIcon: string;
}

export const HamburgerNav = (props: IActive) => {
  const [switchLangBtn, setSwitchLangBtn] = useState<boolean>(false);
  const [languages, setLanguage] = useState<IHeroTextInterface[]>([
    heroText.heroEnglishText,
    heroText.heroSwedishText,
  ]); // Flytta detta till min reducer

  let language = useSelector((state: IState) => state.changeLanguage.value);

  const dispatch = useDispatch();

  const triggerNavToggle = () => {
    props.navToggle();
    setSwitchLangBtn(!switchLangBtn);
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

        {languages.map((lang) => {
          return lang.language === language ? (
            lang.btntext.map((btn) => {
              return <li key={btn.btnid}>▷ {btn.text}</li>;
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
