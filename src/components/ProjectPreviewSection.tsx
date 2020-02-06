import React from "react";
import { ProjectObj } from "../custom/types";
import "../styles/ProjectPreviewSection.css";

type ProjectPreviewProps = {
  projectObj: ProjectObj;
  imageOnLeft: boolean;
};

const ProjectPreviewSection: React.FC<ProjectPreviewProps> = ({
  projectObj,
  imageOnLeft
}) => {
  return (
    <div className="project-preview-container">
      {imageOnLeft && (
        <img
          className="project-preview-image"
          src={projectObj.imageReference}
          alt={projectObj.title}
        />
      )}
      <div
        className="project-preview-content"
        style={{
          padding: `0 ${imageOnLeft ? "0" : "36px"} 0 ${
            imageOnLeft ? "36px" : "0"
          }`
        }}
      >
        <div className="project-preview-header">{projectObj.title}</div>
        <div className="project-preview-date">{projectObj.date}</div>
        <div className="project-preview-technologies-container"></div>
        <div className="project-preview-description">
          {projectObj.description}
        </div>
      </div>
      {!imageOnLeft && (
        <img
          className="project-preview-image"
          src={projectObj.imageReference}
          alt={projectObj.title}
        />
      )}
    </div>
  );
};

export default ProjectPreviewSection;
