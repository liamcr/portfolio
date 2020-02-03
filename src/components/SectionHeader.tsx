import React from "react";
import "../styles/SectionHeader.css";

type SectionHeaderProps = {
  content: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ content }) => {
  return <div className="section-header">{content}</div>;
};

export default SectionHeader;
