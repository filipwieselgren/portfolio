import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Projets = () => {
  const navigate = useNavigate();
  // const [projects, setProjects] = useState<IProjects[]>([]);
  const { state } = useLocation();
  const { targetId } = state || {};

  const navigateToPage = (btnText: string) => {
    if (btnText === "See my projects") {
      navigate("/projects", { state: { targetId: "projects" } });
    }
  };

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView();
    }
  }, [targetId]);

  const projects = [
    {
      id: 1,
      name: "webshop",
      html_url: "https://webshop-seven.vercel.app/",
      description: "A webshop for movies build with react and typescript",
      topics: [
        "/static/media/react.svg.dff8c2d70a3a8ec4026e.png",
        "/static/media/Typescript_logo_2020.svg.f11fa7a0c5593ab7cb15.png",
        "/static/media/css-logo.f84f23c3069a2d6dad20.png",
      ],
    },
    {
      id: 2,
      name: "Todo-app",
      html_url: "https://todo-eta-six.vercel.app/",
      description: "My first project in JS. A todo-app",
      topics: [
        "/static/media/js-logo.7bab731c14a3382b0ef3.png",
        "/static/media/sass.logo.b795e8df3332ef356023.png",
      ],
    },
  ];

  const t = projects.map((project) => {
    <div> {project.topics}</div>;
  });

  return (
    <div id="projects" className="main-wrapper">
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <h2>{project.name}</h2>
            <div>{project.description}</div>
            <a className="link-to-p" href={project.html_url} target="_blank">
              Test it
            </a>
            <h5>Build with</h5>
            {project.topics.map((pt) => {
              return (
                <>
                  <img className="project-img" src={pt} />
                </>
              );
            })}
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Projets;
