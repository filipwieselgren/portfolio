import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { langImages } from "../models/Ilanguages";
import { IState } from "../redux/reducers/reducer";
import { NavBtnsHero } from "./NavBtnsHero";

export const HeroContent = () => {
  const languageArray = useSelector(
    (state: IState) => state.changeLanguage.languages
  );

  let language = useSelector((state: IState) => state.changeLanguage.value);

  let arr: string[] = langImages;
  const [skills, setSkills] = useState(arr);
  const [clickedSkill, setClickedSkill] = useState<boolean>(false);

  const triggerCard = () => {
    setClickedSkill(true);
    setClickedCardToFalse();
  };

  const setClickedCardToFalse = () => {
    setTimeout(() => {
      setClickedSkill(false);
      changeSkillCard();
    }, 300);
  };

  // Change skill-function
  const changeSkillCard = () => {
    let getIndexZero = skills.filter((a, index) => {
      if (index == 0) return a; // 0 = 7
    });
    let getIndexOne = skills.filter((a, index) => {
      if (index == 1) return a; // 1 = 6
    });

    // Add index 1 to index 0
    skills.splice(0, 0, getIndexOne.toString());

    // Remove index 1
    skills.splice(1, 1);

    // Add index 0 to last getIndex
    skills.splice(6, 0, getIndexZero.toString());

    // Remove index 0
    skills.splice(0, 1);

    setSkills([...skills]);
  };

  let skillCardClass = "skills";
  if (clickedSkill) {
    skillCardClass = "skills skillCardClicked";
  }
  return (
    <>
      {/* Gör presentation-text-container till en komponent */}
      {languageArray.map((lang) => {
        return lang.language === language ? (
          <div key={lang.id} className="presentation-text-container">
            {/* <div className="navbar-name-container"> */}
            {languageArray.map((lang) => {
              return lang.language == language ? (
                <>
                  <div className="navbar-name">{lang.welcome}</div>
                  <div className="navbar-name">{lang.frontEnd}</div>
                </>
              ) : (
                <></>
              );
            })}
            {/* </div> */}
            <div className="presentation-text">
              {lang.maintext}
              <span className="swith-card">{lang.askvisitor}</span>
            </div>
          </div>
        ) : (
          <></>
        );
      })}

      {/* Gör skill-container till en komponent */}
      <div className="skill-container">
        <div className="card-container">
          {skills.map((skill, i) => {
            return (
              <img
                key={i}
                className={skillCardClass}
                src={skill}
                alt="Images of my skills"
                onClick={triggerCard}
              />
            );
          })}
        </div>
      </div>
      <NavBtnsHero />
    </>
  );
};
