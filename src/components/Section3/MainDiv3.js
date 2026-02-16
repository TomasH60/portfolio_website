import React from "react";
import { personalProjects } from "../../data/projectData";
import ProjectCardGrid from "../common/ProjectCardGrid";

const MainDiv3 = () => {
  return <ProjectCardGrid projects={personalProjects} />;
};

export default MainDiv3;
