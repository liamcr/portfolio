import React from "react";
import { WorkObj } from "../custom/types";
import "../styles/ExperienceCard.css";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  makeStyles
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

type ExperienceCardProps = {
  workObj: WorkObj;
};

const useStyles = makeStyles({
  panel: {
    backgroundColor: "#fbfbfb",
    marginBottom: 32
  }
});

const ExperienceCard: React.FC<ExperienceCardProps> = ({ workObj }) => {
  const classes = useStyles();

  return (
    <ExpansionPanel className={classes.panel}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <div className="experience-card-container">
          <div className="logo-container">
            <img
              className="company-logo"
              src={workObj.companyImage}
              alt={`${workObj.company} logo`}
            />
          </div>
          <div className="experience-header-info">
            <div className="job-title">{workObj.jobTitle}</div>
            <div className="company">{workObj.company}</div>
            <div className="location-and-dates">{`${workObj.location} • ${workObj.timeFrame}`}</div>
          </div>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className="experience-card-highlights-container">
          <div className="experience-card-hightlights-header">Highlights</div>
          {workObj.highlights.map((highlight, index) => (
            <div key={index} className="experience-card-highlight">
              {highlight}
            </div>
          ))}
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ExperienceCard;
