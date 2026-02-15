import React from "react";
import "./Footer.css";
import logo from "../../assets/icons/logo.svg";
import git from "../../assets/icons/gitIcon.svg";
import linked from "../../assets/icons/linkedIcon.svg";
import xlogo from "../../assets/icons/xlogo.svg"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="Footer">
      <div className="logoIcon">
        <img src={logo} alt="error"></img>
      </div>
      <p>© Copyright {year}. All rights reserved</p>
      <div className="icons">
        <a href="https://github.com/TomasH60" target="_blank" rel="noreferrer">
          <img src={git} alt="error"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-hori%C4%8Dka-2b8a55229/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linked} alt="error"></img>
        </a>
        <a href="https://twitter.com/TomasH70" target="_blank" rel="noreferrer">
          <img src={xlogo} alt="error"></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
