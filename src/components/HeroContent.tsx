import { useState } from "react";
import { useSelector } from "react-redux";
import { parse } from "url";
import { langImages } from "../models/Ilanguages";
import { IState } from "../redux/reducers/reducer";

export const HeroContent = () => {
  const languageArray = useSelector(
    (state: IState) => state.changeLanguage.languages
  );

  let arr: string[] = langImages;

  let language = useSelector((state: IState) => state.changeLanguage.value);

  const [skills, setSkills] = useState(arr);

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
  // console.log("skills:", skills);

  return (
    <>
      {languageArray.map((lang) => {
        return lang.language === language ? (
          <div key={lang.id} className="presentation-text-container">
            <div className="presentation-text">{lang.maintext}</div>
          </div>
        ) : (
          <></>
        );
      })}

      <div className="skill-container">
        <div className="card-container">
          {skills.map((skill, i) => {
            return (
              <img
                key={i}
                className="skills "
                src={skill}
                alt=""
                onClick={changeSkillCard}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
