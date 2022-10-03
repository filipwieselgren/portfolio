import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { IState } from "../redux/reducers/reducer";

export const Projets = () => {
  const languageArray = useSelector(
    (state: IState) => state.changeLanguage.languages
  );

  let language = useSelector((state: IState) => state.changeLanguage.value);

  return (
    <div id="projects" className="project-wrapper">
      {languageArray.map((lang) => {
        return lang.language === language ? (
          lang.projects.map((p) => {
            return (
              <div key={p.id} className="project-card-container">
                <img src={p.img} alt="Image on the project" />
                <h3 className="project-header">{p.name}</h3>
                <div className="project-discription">{p.description}</div>
                <div className="built-with-txt">{p.buildTxt}</div>
                <>
                  {p.topics.map((t) => {
                    <img
                      key={t.topicid}
                      src={t.language}
                      alt="Logo of programming language"
                    />;
                  })}
                </>
              </div>
            );
          })
        ) : (
          <></>
        );
      })}
    </div>
  );
};

export default Projets;
