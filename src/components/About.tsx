import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IState } from "../redux/reducers/reducer";
import { BsCaretUp, BsCaretDown } from "react-icons/bs/";
import me from "../assets/jag-SVART.png";
import imgTxt from "../assets/img-text-about.png";
import { NavBtnsHero } from "./NavBtnsHero";

export const About = () => {
  const languageArray = useSelector(
    (state: IState) => state.changeLanguage.languages
  );
  const [isOpen, setIsOpen] = useState<any>(null);

  const toggle = (i: number) => {
    if (isOpen === i) {
      return setIsOpen(null);
    }

    setIsOpen(i);
  };

  let language = useSelector((state: IState) => state.changeLanguage.value);
  return (
    <>
      <div className="aboutme-header-container">
        <div className="about-img-circle">
          <img className="img-txt" src={imgTxt} alt="Logo text" />
          <img className="me" src={me} alt="Image on me" />
        </div>
        <div className="aboutme-header">
          Curiosity is always good! Choose what you want to find out about me
          ...
        </div>
      </div>
      <div className="questions-wrapper">
        {languageArray.map((lang) => {
          return lang.language === language ? (
            lang.aboutMe.map((about, i) => (
              <div
                key={about.id}
                className={isOpen === i ? "item-show" : "item"}
                onClick={() => {
                  toggle(i);
                }}
              >
                <div className="title">
                  <span className="number-about"> {`0${about.id}`}</span>
                  <h2> {about.question}</h2>

                  <span className="arrow-about">
                    {isOpen === i ? <BsCaretUp /> : <BsCaretDown />}
                  </span>
                </div>
                <div className={isOpen === i ? "content show" : "content"}>
                  {about.answer}
                </div>
              </div>
            ))
          ) : (
            <></>
          );
        })}
      </div>
      <NavBtnsHero />
    </>
  );
};
