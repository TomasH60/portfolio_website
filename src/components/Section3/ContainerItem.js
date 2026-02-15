import React from "react";
import "./ContainerItem.css";

const ContainerItem = (props) => {
  const imageClassName = props.fitHeight
    ? "Image ImageFitHeight"
    : "Image";

  return (
    <div className="ContainerItem">
      <div className="TextItem">
        <h3>{props.title}</h3>
        {props.subtitle && <h4>{props.subtitle}</h4>}
        <p>{props.text}</p>
        {props.link ? (
          <a href={props.link} target="_blank" rel="noreferrer">
            {props.buttonText || "Project Page"}
          </a>
        ) : (
          <span className="ButtonDisabled">{props.buttonText || "Project details on request"}</span>
        )}
      </div>
      {props.imgsrc ? (
        <img className={imageClassName} src={props.imgsrc} alt={`${props.title} preview`}></img>
      ) : (
        <div className={`ProjectPreview ${props.previewClassName || ""}`}></div>
      )}
    </div>
  );
};

export default ContainerItem;
