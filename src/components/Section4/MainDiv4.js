import React from "react";
import "../Section3/MainDiv3.css";
import { motion } from "framer-motion";
import ContainerItem from "../Section3/ContainerItem";
import EnpoImage from "../../assets/images/enpo.png";
import PPTechnikImage from "../../assets/images/pptechnik.png";
import AZImage from "../../assets/images/ady.png";

const MainDiv4 = React.forwardRef((props, ref) => {
  const clientProjects = [
    {
      title: "ENPO",
      subtitle: "Client Website",
      text: "Implemented a production company website with a CMS setup and React JS, focusing on maintainable content editing, clean structure, and a smooth browsing experience across devices.",
      link: "https://enpo.sk/",
      buttonText: "Visit Website",
      imgsrc: EnpoImage,
    },
    {
      title: "PP Technik",
      subtitle: "Client Website",
      text: "Developed and launched the company website in React JS, with reusable page components, responsive layouts, and a straightforward content flow for visitors.",
      link: "https://pptechnik.sk/",
      buttonText: "Visit Website",
      imgsrc: PPTechnikImage,
    },
    {
      title: "AZ Konzervaren",
      subtitle: "Client Website",
      text: "Implemented the full AZ Konzervaren website (except the design layer), including CMS setup and React JS integration, content structure, and production-ready frontend behavior.",
      link: "https://www.azkonzervaren.sk/vegetables",
      buttonText: "Visit Website",
      imgsrc: AZImage,
    },
  ];

  return (
    <motion.div
      className="Container"
      animate={props.onAnimate}
      style={{ y: "10vh", opacity: 0 }}
      ref={ref}
    >
      {clientProjects.map((project) => (
        <ContainerItem
          key={project.title}
          title={project.title}
          subtitle={project.subtitle}
          text={project.text}
          imgsrc={project.imgsrc}
          link={project.link}
          buttonText={project.buttonText}
        />
      ))}
    </motion.div>
  );
});

export default MainDiv4;
