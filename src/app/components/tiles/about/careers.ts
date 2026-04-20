export type CareerProject = {
  name: string;
  image: string;
  link?: string;
};

export type CareerSkill = {
  name: string;
  icon: string;
};

export type CareerEntry = {
  id: string;
  role: string;
  company: string;
  period: string;
  badge: string;
  current: boolean;
  logo: string;
  overview: string;
  myRole: string;
  projects: CareerProject[];
  skills: CareerSkill[];
};

export const careersData: CareerEntry[] = [
  {
    id: "iit-ropar",
    role: "Software Engineer Intern – Full Stack (Virtual)",
    company: "IIT Ropar",
    period: "Jan 2025 – Present",
    badge: "Current",
    current: true,
    logo: "/company/iit-ropar.jpg",
    overview:
      "Developing scalable backend services using Node.js and Express.js with a focus on reliable data flow and clean API design. Working with MongoDB for schema design and CRUD operations alongside MySQL for structured data.",
    myRole:
      "Operating in a Linux (Ubuntu) environment using CLI tools and Git for version control and collaborative workflows. Building modular React.js frontend components integrated with backend APIs to surface real-time data performantly.",
    projects: [],
    skills: [
      { name: "Node.js", icon: "/tech/nodejs.svg" },
      { name: "Express.js", icon: "/tech/express.svg" },
      { name: "MongoDB", icon: "/tech/mongodb.svg" },
      { name: "MySQL", icon: "/tech/mysql.svg" },
      { name: "React.js", icon: "/tech/react.svg" },
      { name: "Linux", icon: "/tech/linux.svg" },
      { name: "Git", icon: "/tech/github.svg" },
    ],
  }
];
