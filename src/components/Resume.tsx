import { useSelector } from "react-redux";
import resumeEn from "../assets/cv.jpg";
import resumeSv from "../assets/CV.SV.png";
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

  console.log("language:", language);

  return (
    <div className="resume-container">
      <img className="resume" src={resumeEn} alt="My resume" />
      {/* <img className="resume" src={resumeSv} alt="My resume" /> */}
      <NavBtnsHero toProjects={props.toProjects} />
    </div>
  );
};
