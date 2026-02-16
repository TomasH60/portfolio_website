import React from "react";
import "./MainDiv2.css";
import {
  aboutCards,
  aboutEducationText,
  experienceItems,
  skills,
} from "../../data/aboutData";

const MainDiv2 = () => {
  return (
    <div className="Text1">
      <div className="content">
        <div className="aboutBlock">
          <div className="aboutCards">
            {aboutCards.map((card) => (
              <div className="aboutCard" key={card.title}>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
          <p className="aboutEducation">{aboutEducationText}</p>
        </div>

        <div className="experienceBlock">
          <h3>Work Experience</h3>

          {experienceItems.map((item) => (
            <div className="experienceCard" key={`${item.role}-${item.period}`}>
              <div className="experienceTopRow">
                <h4>{item.role}</h4>
                <span>{item.period}</span>
              </div>
              <p className="experienceCompany">
                <a
                  href={item.company.href}
                  target="_blank"
                  rel="noreferrer"
                  className="experienceLink"
                >
                  {item.company.name}
                </a>
                , {item.company.location}
              </p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skillsBlock">
          <h3>Skills</h3>
          <div className="skillsGrid">
            {skills.map((skill) => (
              <div className="skillCard" key={skill.title}>
                <h4>{skill.title}</h4>
                <p>{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDiv2;
