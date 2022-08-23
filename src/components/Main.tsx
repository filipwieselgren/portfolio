import axios from "axios";
import { useEffect, useState } from "react";
import { IProjects } from "../models/IProjects";

const api = "https://api.github.com/users/filipwieselgren/repos";
const apiLang = "https://api.github.com/repos/filipwieselgren/Agile/languages";
const Main = () => {
  const [projects, setProjects] = useState<IProjects[]>([]);
  const [lang, setLang] = useState<string>("");
  useEffect(() => {
    axios.get<IProjects[]>(api).then((response) => {
      setProjects(response.data);
    });
    axios.get(apiLang).then((response) => {
      setLang(response.data);
    });
  }, []);

  const showProject = projects.map((project) => {
    return (
      <div key={project.id}>
        <div>{project.name}</div>
      </div>
    );
  });

  return <>{showProject}</>;
};

export default Main;
