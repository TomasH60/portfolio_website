import React from "react";
import "../Section3/MainDiv3.css";
import ContainerItem from "../Section3/ContainerItem";

function ProjectCardGrid({ projects }) {
  return (
    <div className="Container">
      {projects.map((project) => (
        <ContainerItem
          key={project.title}
          title={project.title}
          subtitle={project.subtitle}
          text={project.text}
          imgsrc={project.imgsrc}
          fitHeight={project.fitHeight}
          link={project.link}
          buttonText={project.buttonText}
          previewClassName={project.previewClassName}
        />
      ))}
    </div>
  );
}

export default ProjectCardGrid;
