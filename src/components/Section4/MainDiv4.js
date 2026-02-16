import React from "react";
import { clientProjects } from "../../data/projectData";
import ProjectCardGrid from "../common/ProjectCardGrid";

const MainDiv4 = () => {
  return <ProjectCardGrid projects={clientProjects} />;
};

export default MainDiv4;
