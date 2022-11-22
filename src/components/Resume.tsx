import { useSelector } from "react-redux";
import cvEn from "../assets/cv.en.png";
import cvSv from "../assets/cv.sv.png";
import { IState } from "../redux/reducers/reducer";
import { NavBtnsHero } from "./NavBtnsHero";
interface IScroll {
  toProjects(): void;
}

export const Resume = (props: IScroll) => {
  const languageArray = useSelector(
    (state: IState) => state.changeLanguage.languages
  );

  let language = useSelector((state: IState) => state.changeLanguage.value);

  return (
    <div className="resume-container">
      {language === "english" ? (
        <img src={cvEn} alt="Image of my resume" className="resume" />
      ) : (
        <img src={cvSv} alt="Image of my resume" className="resume" />
      )}

      <NavBtnsHero toProjects={props.toProjects} />
    </div>
  );
};
