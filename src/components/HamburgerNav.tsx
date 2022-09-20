import me from "../assets/me.png";
import github from "../assets/github.png";
import linkedin from "../assets/Linkedin-logo-icon-png.png";
import { heroText } from "../models/IActiveLanguage";
import { useState } from "react";
import IHeroTextInterface from "../models/IHeroTextInterface";

interface IActive {
  navToggle(): void;
  active: string;
  toggleIcon: string;
}
export const HamburgerNav = (props: IActive) => {
  const [language, setLanguage] = useState<IHeroTextInterface[]>(
    heroText.heroEnglishText
  );

  const triggerNavToggle = () => {
    props.navToggle();
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
      <ul className={props.active}>
        {props.active !== "nav-menu" ? meInActiveNav : <></>}
        {language.map((lang) => {
          return lang.btntext.map((btn) => {
            return <li key={btn.btnid}>{btn.text}</li>;
          });
        })}
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
