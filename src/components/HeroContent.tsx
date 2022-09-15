import { useEffect, useState } from "react";
import { langImages } from "../models/Ilanguages";
import { heroText } from "../models/IHeroText";
import me from "../assets/me.png";
import IHeroTextInterface from "../models/IHeroTextInterface";
import { useDispatch, useSelector } from "react-redux";

export const HeroContent = () => {
  const [languageText, setLanguageText] = useState<IHeroTextInterface[]>(
    heroText.heroEnglishText
  );

  const test = useSelector((state) => state);

  // const [chooseLang, setChooseLang] = useState("EN");

  useEffect(() => {
    if (localStorage.getItem("heroTextLocalStorage") != null) {
      setLanguageText(
        JSON.parse(localStorage.getItem("heroTextLocalStorage") || "")
      );
    } else {
      return;
    }
  }, []);

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

  // const dispatch = useDispatch();

  const changeLanguage = (value: string) => {};

  const setLocalStorage = (text: IHeroTextInterface[]) => {
    localStorage.setItem("heroTextLocalStorage", JSON.stringify(text));
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

            <button
              className="change-lang-btn"
              // onClick={() => changeLanguage()}
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
          </>
        );
      })}
    </>
  );
};
