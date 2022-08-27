import axios from "axios";
import { useEffect, useState } from "react";
import { ILangSymbols } from "../models/ILangSymbols";
import { langImages } from "../models/Ilanguages";

const api: string = "https://api.github.com/users/filipwieselgren/repos";

const Main = () => {
  // const [projects, setProjects] = useState<IProjects[]>([]);

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

  // useEffect(() => {
  //   axios.get<IProjects[]>(api).then((response) => {
  //     setProjects(response.data);
  //   });
  // }, []);

  // const showProject = projects.map((project) => {
  //   return (
  //     <div key={project.id}>
  //       <>
  //         <h2>{project.name}</h2>
  //         <div>{project.description}</div>
  //         {project.topics.map((pt) => {
  //           <div>{pt}</div>;
  //         })}
  //       </>
  //     </div>
  //   );
  // });

  // const t = projects.map((project) => {
  //   <div> {project.topics}</div>;
  // });

  console.log(langImages);

  return (
    <div className="main-wrapper">
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <>
              <h2>{project.name}</h2>
              <div>{project.description}</div>
              <a className="link-to-p" href={project.html_url} target="_blank">
                Test it
              </a>
              <h3>Build with</h3>
              {project.topics.map((pt) => {
                return <img className="project-img" src={pt} />;
              })}
            </>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
