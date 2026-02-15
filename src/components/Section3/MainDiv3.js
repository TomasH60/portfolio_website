import React from "react";
import "./MainDiv3.css";
import ContainerItem from "./ContainerItem";
import NFTones from "../../assets/images/nftones.jpg";
import SemanticGraph from "../../assets/images/semantic.png";

const MainDiv3 = () => {
  const projects = [
    {
      title: "Semantic Blockchain",
      subtitle: "Bachelor's Thesis Project",
      text: "Developed a full-stack system that indexes and transforms blockchain data into semantically connected datasets for easier querying and analysis. Built with ReactJS, Node.js, PostgreSQL, FastAPI, and Subsquid as part of my bachelor's thesis.",
      link: "https://github.com/TomasH60/semantic_blockchain",
      buttonText: "Project Page",
      imgsrc: SemanticGraph,
      fitHeight: true,
    },
    {
      title: "NFTones",
      subtitle: "3D NFT Collection Website",
      text: "Created an interactive 3D web experience for an NFT music collection, including smart-contract integration and wallet-connected flows. Built with React, Hardhat, ethers.js, Solidity, and Three.js.",
      link: "https://tomash60.github.io/NFTones/",
      buttonText: "Project Page",
      imgsrc: NFTones,
    },
  ];

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
};

export default MainDiv3;
