import { useState } from "react";
import { useSelector } from "react-redux";
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
      if (index == 0) return a;
    });
    let getIndexOne = skills.filter((a, index) => {
      if (index == 1) return a;
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
        <img
          className="skills "
          src={skills[0]}
          alt=""
          onClick={changeSkillCard}
        />
      </div>
    </>
  );
};
