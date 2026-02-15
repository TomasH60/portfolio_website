import React from "react";
import "./MainDiv2.css";
import { motion } from "framer-motion";

const MainDiv2 = React.forwardRef((props, ref) => {
  return (
    <motion.div
      className="Text1"
      animate={props.onAnimate}
      style={{ y: "10vh", opacity: 0 }}
      ref={ref}
    >
      <div className="content">
        <div className="aboutBlock">
          <div className="aboutCards">
            <div className="aboutCard">
              <h4>Profile</h4>
              <p>
                Web3-focused software developer building blockchain products and
                decentralized application tooling.
              </p>
            </div>
            <div className="aboutCard">
              <h4>Current Focus</h4>
              <p>
                On-chain integrations, smart-contract tooling, indexing
                pipelines, and reliable blockchain data flows.
              </p>
            </div>
            <div className="aboutCard">
              <h4>Freelance Work</h4>
              <p>
                Freelance web developer delivering production-ready company
                websites with clear structure and business-focused UX.
              </p>
            </div>
          </div>
          <p className="aboutEducation">
            I completed my bachelor's degree at FIIT STU and I am currently
            continuing with a master's degree.
          </p>
        </div>

        <div className="experienceBlock">
          <h3>Work Experience</h3>

          <div className="experienceCard">
            <div className="experienceTopRow">
              <h4>Blockchain Developer</h4>
              <span>Jun 2025 - Present</span>
            </div>
            <p className="experienceCompany">
              <a
                href="https://deussblockchain.eu/"
                target="_blank"
                rel="noreferrer"
                className="experienceLink"
              >
                Deuss
              </a>
              , Bratislava
            </p>
            <ul>
              <li>Develop on-chain integrations and smart-contract tooling.</li>
              <li>Build and optimize blockchain indexer infrastructure.</li>
              <li>Automate deployments and runtime operations in DevOps pipelines.</li>
            </ul>
          </div>

          <div className="experienceCard">
            <div className="experienceTopRow">
              <h4>Junior Software Analyst</h4>
              <span>Apr 2025 - Jun 2025</span>
            </div>
            <p className="experienceCompany">
              <a
                href="https://www.ditec.sk/"
                target="_blank"
                rel="noreferrer"
                className="experienceLink"
              >
                DITEC a.s.
              </a>
              , Bratislava
            </p>
            <ul>
              <li>Architected UML-driven software solutions and documentation.</li>
              <li>Translated customer feedback into actionable engineering tasks.</li>
              <li>Delivered information systems for Slovak Railways from concept to production.</li>
            </ul>
          </div>
        </div>

        <div className="skillsBlock">
          <h3>Skills</h3>
          <div className="skillsGrid">
            <div className="skillCard">
              <h4>Blockchain</h4>
              <p>Solidity, Forge, Hardhat, ethers.js, Subsquid, Web3 architecture</p>
            </div>
            <div className="skillCard">
              <h4>Frontend</h4>
              <p>React, JavaScript, TypeScript, HTML, CSS, responsive UI</p>
            </div>
            <div className="skillCard">
              <h4>Backend & Data</h4>
              <p>Node.js, FastAPI, GraphQL, PostgreSQL, indexing pipelines</p>
            </div>
            <div className="skillCard">
              <h4>DevOps</h4>
              <p>Git, GitLab CI, Docker, Docker Compose, deployment automation</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default MainDiv2;
