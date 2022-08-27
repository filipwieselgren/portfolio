import axios from "axios";
import { useEffect, useState } from "react";
import { ILangSymbols } from "../models/ILangSymbols";
import { IProjects } from "../models/IProjects";
import { langImages } from "../models/Ilanguages";

const api: string = "https://api.github.com/users/filipwieselgren/repos";

const Main = () => {
  const [projects, setProjects] = useState<IProjects[]>([]);

  useEffect(() => {
    axios.get<IProjects[]>(api).then((response) => {
      setProjects(response.data);
    });
  }, []);

  const showProject = projects.map((project) => {
    return (
      <div key={project.id}>
        <>
          <div>{project.name}</div>
          {project.topics.map((pt) => {
            <div>{pt}</div>;
          })}
        </>
      </div>
    );
  });

  return <>{showProject}</>;
};

export default Main;
