export interface WorkObj {
  jobTitle: string;
  company: string;
  location: string;
  timeFrame: string;
  companyImage: string;
  highlights: Array<string>;
}

export interface ProjectObj {
  title: string;
  date: string;
  technologies: string[];
  description: string;
  imageReference: string;
  projectPageURL: string;
  url: string;
  repoURL: string;
}

interface Section {
  header: string;
  bodyParagraphs: Array<string>;
}

export interface FullProjectObj {
  name: string;
  date: string;
  technologies: string[];
  sections: Array<Section>;
  colour: string;
  icon: string;
  url: string;
  repoURL: string;
}
