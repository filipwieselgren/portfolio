import { useEffect, useState } from "react";
import { langImages } from "../models/Ilanguages";
import { heroText } from "../models/IHeroText";
import me from "../assets/me.png";
import IHeroTextInterface from "../models/IHeroTextInterface";
import { useDispatch, useSelector } from "react-redux";
import { languageAction } from "../redux/actions/action";
import { changeLanguageSlice } from "../redux/reducers/reducer";

export const HeroContent = () => {
  const [languageText, setLanguageText] = useState<IHeroTextInterface[]>([
    {
      id: 0,
      using: true,
      welcome: "",
      maintext: "",
      askvisitor: "",
      changeLanguageText: "",
      btntext: [
        {
          btnid: 0,
          text: "",
        },
        {
          btnid: 0,
          text: "",
        },
        {
          btnid: 0,
          text: "",
        },
        {
          btnid: 0,
          text: "",
        },
      ],
    },
  ]);
  const [english, setEnglish] = useState<boolean>(true);

  // Set state to change language
  const switchLanguage = () => {
    setEnglish(!english);
  };

  // Get language from localStorage
  useEffect(() => {
    let lang = localStorage.getItem("language") || "";
    if (lang === null) {
      setLanguageText(heroText.heroEnglishText);
    } else {
      setLanguageText(JSON.parse(lang));
    }
  }, []);

  // Change language
  useEffect(() => {
    if (english) {
      setLanguageText(heroText.heroEnglishText);
      toLocalStorage(heroText.heroEnglishText);
    } else {
      setLanguageText(heroText.heroSwedishText);
      toLocalStorage(heroText.heroSwedishText);
    }
  }, [english]);

  // LocalStorage

  const toLocalStorage = (changedLanguage: IHeroTextInterface[]) => {
    localStorage.setItem("language", JSON.stringify(changedLanguage));
  };

  // Show programming languages
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

  return (
    <>
      {languageText.map((text, index) => {
        return (
          <>
            <div key={text.id}>
              <div className="hero-intro-container">
                <div className="hero-intro-txt">{text.maintext}</div>
                <div className="pg-lang-container">{languageHtml}</div>
              </div>

              <button
                className="change-lang-btn"
                onClick={() => switchLanguage()}
              >
                {text.changeLanguageText}
              </button>
              <div className="box-con">
                <div className="green-box"></div>
                <div className="content-green-box-con">
                  <img className="me" src={me} alt="Image of me" />
                  <span className="nav-text-btn">{text.askvisitor}</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
