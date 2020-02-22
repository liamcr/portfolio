import React from "react";
import Navbar from "../components/Navbar";
import LandingImage from "../components/LandingImage";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      <Navbar homePage />
      <LandingImage />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
