import resume from "../assets/CV.jpg";
import { NavBtnsHero } from "./NavBtnsHero";
interface IScroll {
  toProjects(): void;
}

export const Resume = (props: IScroll) => {
  return (
    <div className="resume-container">
      <img className="resume" src={resume} alt="My resume" />
      <NavBtnsHero toProjects={props.toProjects} />
    </div>
  );
};
