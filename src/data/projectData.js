import NFTones from "../assets/images/nftones.jpg";
import SemanticGraph from "../assets/images/semantic.png";
import EnpoImage from "../assets/images/enpo.png";
import PPTechnikImage from "../assets/images/pptechnik.png";
import AZImage from "../assets/images/ady.png";

export const personalProjects = [
  {
    title: "Semantic Blockchain",
    subtitle: "Bachelor's Thesis Project",
    text:
      "Developed a full-stack system that indexes and transforms blockchain data into semantically connected datasets for easier querying and analysis. Built with ReactJS, Node.js, PostgreSQL, FastAPI, and Subsquid as part of my bachelor's thesis.",
    link: "https://github.com/TomasH60/semantic_blockchain",
    buttonText: "Project Page",
    imgsrc: SemanticGraph,
    fitHeight: true,
  },
  {
    title: "NFTones",
    subtitle: "3D NFT Collection Website",
    text:
      "Created an interactive 3D web experience for an NFT music collection, including smart-contract integration and wallet-connected flows. Built with React, Hardhat, ethers.js, Solidity, and Three.js.",
    link: "https://tomash60.github.io/NFTones/",
    buttonText: "Project Page",
    imgsrc: NFTones,
  },
];

export const clientProjects = [
  {
    title: "ENPO",
    subtitle: "Client Website",
    text:
      "Implemented a production company website with a CMS setup and React JS, focusing on maintainable content editing, clean structure, and a smooth browsing experience across devices.",
    link: "https://enpo.sk/",
    buttonText: "Visit Website",
    imgsrc: EnpoImage,
  },
  {
    title: "PP Technik",
    subtitle: "Client Website",
    text:
      "Developed and launched the company website in React JS, with reusable page components, responsive layouts, and a straightforward content flow for visitors.",
    link: "https://pptechnik.sk/",
    buttonText: "Visit Website",
    imgsrc: PPTechnikImage,
  },
  {
    title: "AZ Konzervaren",
    subtitle: "Client Website",
    text:
      "Implemented the full AZ Konzervaren website (except the design layer), including CMS setup and React JS integration, content structure, and production-ready frontend behavior.",
    link: "https://www.azkonzervaren.sk/",
    buttonText: "Visit Website",
    imgsrc: AZImage,
  },
];
