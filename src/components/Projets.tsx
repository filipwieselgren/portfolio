import { BsCaretDown, BsCaretRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { IState } from "../redux/reducers/reducer";

export const Projets = () => {
  const languageArray = useSelector(
    (state: IState) => state.changeLanguage.languages
  );

  let language = useSelector((state: IState) => state.changeLanguage.value);

  return (
    <>
      {languageArray.map((lang) => {
        return lang.language === language ? (
          lang.projects.map((project) => {
            return (
              <div key={project.id} className="project-card-container">
                <div className="content-container">
                  <img src={project.img} alt="Image on the project" />
                  <div className="p-header-container">
                    <h3 className="project-header">{project.name}</h3>
                  </div>
                  <div className="p-discription-container">
                    <div className="project-discription">
                      {project.description}
                    </div>
                  </div>
                  <div className="built-with-container">
                    <div className="built-with-txt">{project.buildTxt}</div>
                  </div>
                  <>
                    <div className="lang-img">
                      {project.buildWith.map((lang) => {
                        return (
                          <lang.language key={lang.topicid} className="icon" />
                        );
                      })}
                    </div>
                  </>

                  <div className="project-btns-container">
                    <a
                      href={project.html_url}
                      className="hero-link to-project-link"
                      target="_blank"
                    >
                      <div className="project-btn test-app-btn">
                        <BsCaretRight />
                        {project.testAppBtnText}
                      </div>
                    </a>
                    <a
                      href={project.gitHub_url}
                      className="hero-link to-project-link"
                      target="_blank"
                    >
                      <div className="project-btn see-code-btn">
                        <BsCaretRight />
                        {project.seeCodeBtnText}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        );
      })}
    </>
  );
};

export default Projets;
