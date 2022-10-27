import { useSelector } from "react-redux";
import me from "../assets/me.png";
import { IState } from "../redux/reducers/reducer";

interface IScroll {
  toProjects(): void;
}

export const Footer = (props: IScroll) => {
  const languageArray = useSelector(
    (state: IState) => state.changeLanguage.languages
  );

  let language = useSelector((state: IState) => state.changeLanguage.value);

  return (
    <>
      {languageArray.map((lang) =>
        lang.language === language ? (
          <div className="footer-main-container">
            <div className="img-container">
              <img src={me} alt="" className="footer-img" />
            </div>

            <ul className="text-ul">
              <a href="/">
                <li>{lang.footerHome}</li>
              </a>
              <a href="/resume">
                <li>{lang.footerResume}</li>
              </a>
              <a href="/about">
                <li>{lang.footerAbout}</li>
              </a>
              <a onClick={props.toProjects}>
                <li>{lang.footerProjects}</li>
              </a>
            </ul>
          </div>
        ) : (
          <></>
        )
      )}
    </>
  );
};
