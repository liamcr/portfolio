import React from "react";
import { technologies } from "../custom/technologies";
import { hasKey } from "../custom/functions";
import "../styles/SkillCard.css";

type SkillCardProps = {
  skillID: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ skillID }) => {
  return (
    <div className="skill-card-container">
      <div className="skill-icon-container">
        <img
          src={
            hasKey(technologies, skillID)
              ? technologies[skillID].imageReference
              : "#"
          }
          alt="Skill icon"
          className="skill-card-icon"
        />
      </div>
      <div className="skill-card-header">
        {hasKey(technologies, skillID) ? technologies[skillID].displayName : ""}
      </div>
      <div className="skill-card-experience">
        {hasKey(technologies, skillID)
          ? technologies[skillID].timeExperienced
          : ""}
      </div>
      <div className="skill-card-type-experience">
        {hasKey(technologies, skillID)
          ? technologies[skillID].experienceType
          : ""}
      </div>
      {/* <div className="skill-card-description">
        {hasKey(technologies, skillID) ? technologies[skillID].description : ""}
      </div> */}
    </div>
  );
};

export default SkillCard;
