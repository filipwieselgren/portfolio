import { useSelector } from "react-redux";

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
      <NavBtnsHero toProjects={props.toProjects} />
    </div>
  );
};
