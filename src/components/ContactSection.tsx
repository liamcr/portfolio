import React from "react";
import SectionHeader from "./SectionHeader";
import "../styles/ContactSection.css";

const ContactSection: React.FC = () => {
  return (
    <div className="contact-container" id="contact-container">
      <SectionHeader content="Get in Touch!" />
      <div className="contact-content-container"></div>
    </div>
  );
};

export default ContactSection;
