import { useEffect, useState } from "react";
import { langImages } from "../models/Ilanguages";
import { heroText } from "../models/IHeroText";
import me from "../assets/me.png";

export const HeroContent = () => {
  const [languageText, setLanguageText] = useState(heroText.heroEnglishText);

  const languageHtml = langImages.map((lang) => {
    return (
      <img
        key={lang.id}
        src={lang.photo}
        alt="Images of programming languages"
        className="pg-lang"
      />
    );
  });

  const changeLanguage = () => {
    if (languageText === heroText.heroEnglishText) {
      setLanguageText(heroText.heroSwedishText);
    } else {
      setLanguageText(heroText.heroEnglishText);
    }
  };
  return (
    <>
      {languageText.map((text) => {
        return (
          <>
            <div key={text.id} className="hero-intro-container">
              <div className="hero-intro-txt">{text.maintext}</div>
              <div className="pg-lang-container">{languageHtml}</div>
            </div>

            <button className="change-lang-btn" onClick={changeLanguage}>
              {text.changeLanguageText}
            </button>
            <div className="box-con">
              <div className="green-box"></div>
              <div className="content-green-box-con">
                <img className="me" src={me} alt="Image of me" />
                <span className="nav-text-btn">{text.askvisitor}</span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
