import React from "react";
import SectionHeader from "./SectionHeader";
import Slider from "react-slick";
import "../styles/SkillsSection.css";
import SkillCard from "./SkillCard";

const SkillsSection: React.FC = () => {
  const skillIDs = [
    "reactjs",
    "firebase",
    "materialUI",
    "javascript",
    "spotifyAPI"
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    focusOnSelect: true
  };

  return (
    <div className="skills-container" id="skills-container">
      <SectionHeader content="My Skills" />
      <div className="skills-content-container">
        <Slider {...settings}>
          {skillIDs.map((skillID, index) => (
            <SkillCard skillID={skillID} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SkillsSection;
