import React from "react";
import { technologies } from "../custom/technologies";
import { hasKey } from "../custom/functions";
import "../styles/TechnologyPreview.css";

type TechnologyPreviewProps = {
  technologyID: string;
};

const TechnologyPreview: React.FC<TechnologyPreviewProps> = ({
  technologyID
}) => {
  return (
    <div className="technology-preview">
      <div className="icon-background">
        <img
          src={
            hasKey(technologies, technologyID)
              ? technologies[technologyID].imageReference
              : "#"
          }
          className="technology-icon"
          alt={
            hasKey(technologies, technologyID)
              ? `${technologies[technologyID].displayName} Icon`
              : "Broken"
          }
        />
      </div>
      <div className="technology-name">
        {hasKey(technologies, technologyID)
          ? technologies[technologyID].displayName
          : ""}
      </div>
    </div>
  );
};

export default TechnologyPreview;
