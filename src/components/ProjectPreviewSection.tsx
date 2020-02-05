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
      <div className="project-preview-header">{projectObj.title}</div>
    </div>
  );
};

export default ProjectPreviewSection;
