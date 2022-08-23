import axios from "axios";
import { useEffect, useState } from "react";
import { IProjects } from "../models/IProjects";

const api = "https://api.github.com/users/filipwieselgren/repos";

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
        <div>{project.name}</div>
      </div>
    );
  });

  return <>{showProject}</>;
};

export default Main;
