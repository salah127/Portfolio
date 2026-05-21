import React from "react";
import {
  SiSalesforce,
  SiNextdotjs,
  SiSolidity,
  SiHtml5,
  SiCss3,
  SiLinux,
  SiNginx,
  SiPhp,
} from "react-icons/si";
import {
  FaRust,
  FaGithub,
  FaCode,
  FaLayerGroup,
  FaDatabase,
  FaBrain,
  FaRobot,
  FaUsers,
  FaCloud,
  FaChartLine,
  FaHeadset,
  FaGraduationCap,
  FaCog,
  FaBolt,
  FaFileCode,
  FaLink,
  FaExchangeAlt,
  FaChartBar,
} from "react-icons/fa";
import { MdAltRoute } from "react-icons/md";
import Go from "../../Assets/TechIcons/go.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import HaskellIcon from "../../Assets/TechIcons/Haskell.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";

// ─── Single merged hourglass: 9+7+5+3+1+3+5+7+9 = 49 skills ─────────────────
const hourglassRows = [
  // ─── Row 1 – 9 (Languages) ───────────────────────────────────────
  [
    { icon: <img src={Javascript} alt="JavaScript" className="tech-icon-images" />, label: "JavaScript" },
    { icon: <img src={Typescript} alt="TypeScript" className="tech-icon-images" />, label: "TypeScript" },
    { icon: <img src={Python} alt="Python" className="tech-icon-images" />, label: "Python" },
    { icon: <img src={Java} alt="Java" className="tech-icon-images" />, label: "Java" },
    { icon: <img src={C} alt="C++" className="tech-icon-images" />, label: "C++" },
    { icon: <img src={Go} alt="Go" className="tech-icon-images" />, label: "Go" },
    { icon: <FaRust fontSize="1.6rem" />, label: "Rust" },
    { icon: <SiPhp fontSize="1.6rem" />, label: "PHP" },
    { icon: <img src={HaskellIcon} alt="Haskell" className="tech-icon-images" />, label: "Haskell" },
  ],
  // ─── Row 2 – 7 (Frontend + Salesforce Core) ──────────────────────
  [
    { icon: <SiHtml5 fontSize="1.6rem" />, label: "HTML5" },
    { icon: <SiCss3 fontSize="1.6rem" />, label: "CSS3" },
    { icon: <img src={ReactIcon} alt="React" className="tech-icon-images" />, label: "React.js" },
    { icon: <SiNextdotjs fontSize="1.6rem" />, label: "Next.js" },
    { icon: <img src={Node} alt="Node.js" className="tech-icon-images" />, label: "Node.js" },
    { icon: <SiSalesforce fontSize="1.6rem" />, label: "Salesforce" },
    { icon: <FaCode fontSize="1.6rem" />, label: "Apex" },
  ],
  // ─── Row 3 – 5 (Salesforce Dev + AI) ─────────────────────────────
  [
    { icon: <FaLayerGroup fontSize="1.6rem" />, label: "LWC" },
    { icon: <MdAltRoute fontSize="1.6rem" />, label: "Flows" },
    { icon: <FaDatabase fontSize="1.6rem" />, label: "SOQL" },
    { icon: <FaBrain fontSize="1.6rem" />, label: "Einstein AI" },
    { icon: <FaRobot fontSize="1.6rem" />, label: "Agentforce" },
  ],
  // ─── Row 4 – 3 (Databases) ───────────────────────────────────────
  [
    { icon: <img src={Mongo} alt="MongoDB" className="tech-icon-images" />, label: "MongoDB" },
    { icon: <img src={SQL} alt="PostgreSQL" className="tech-icon-images" />, label: "PostgreSQL" },
    { icon: <img src={Redis} alt="Redis" className="tech-icon-images" />, label: "Redis" },
  ],
  // ─── Row 5 – 1 (Waist / Centre) ──────────────────────────────────
  [
    { icon: <img src={Docker} alt="Docker" className="tech-icon-images" />, label: "Docker" },
  ],
  // ─── Row 6 – 3 (Cloud / Infra) ───────────────────────────────────
  [
    { icon: <img src={Kubernates} alt="Kubernetes" className="tech-icon-images" />, label: "Kubernetes" },
    { icon: <img src={AWS} alt="AWS" className="tech-icon-images" />, label: "AWS" },
    { icon: <img src={Firebase} alt="Firebase" className="tech-icon-images" />, label: "Firebase" },
  ],
  // ─── Row 7 – 5 (CRM + Data / AI) ─────────────────────────────────
  [
    { icon: <FaUsers fontSize="1.6rem" />, label: "CRM" },
    { icon: <FaCloud fontSize="1.6rem" />, label: "Data Cloud" },
    { icon: <FaChartBar fontSize="1.6rem" />, label: "Data Analytics" },
    { icon: <FaBrain fontSize="1.6rem" />, label: "Machine Learning" },
    { icon: <img src={Git} alt="Git" className="tech-icon-images" />, label: "Git" },
  ],
  // ─── Row 8 – 7 (Tooling / UI) ────────────────────────────────────
  [
    { icon: <img src={Redux} alt="Redux" className="tech-icon-images" />, label: "Redux" },
    { icon: <img src={Tailwind} alt="Tailwind" className="tech-icon-images" />, label: "Tailwind CSS" },
    { icon: <img src={MUI} alt="MUI" className="tech-icon-images" />, label: "Material UI" },
    { icon: <img src={Kafka} alt="Kafka" className="tech-icon-images" />, label: "Kafka" },
    { icon: <SiLinux fontSize="1.6rem" />, label: "Linux" },
    { icon: <SiNginx fontSize="1.6rem" />, label: "Nginx" },
    { icon: <img src={Postman} alt="Postman" className="tech-icon-images" />, label: "Postman" },
  ],
  // ─── Row 9 – 9 (Salesforce Ecosystem + Other) ────────────────────
  [
    { icon: <FaGithub fontSize="1.6rem" />, label: "GitHub" },
    { icon: <SiSolidity fontSize="1.6rem" />, label: "Solidity" },
    { icon: <FaChartLine fontSize="1.6rem" />, label: "Sales Cloud" },
    { icon: <FaHeadset fontSize="1.6rem" />, label: "Service Cloud" },
    { icon: <FaBolt fontSize="1.6rem" />, label: "Triggers" },
    { icon: <FaFileCode fontSize="1.6rem" />, label: "Visualforce" },
    { icon: <FaLink fontSize="1.6rem" />, label: "Integration" },
    { icon: <FaExchangeAlt fontSize="1.6rem" />, label: "APIs" },
    { icon: <FaCog fontSize="1.6rem" />, label: "SF Admin" },
  ],
];

function Techstack() {
  let delay = 0;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "50px" }}>
      {hourglassRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          {row.map((skill, skillIndex) => {
            const animDelay = `${delay * 0.045}s`;
            delay++;
            return (
              <div
                key={skillIndex}
                className="tech-icons skill-fade-in"
                style={{ animationDelay: animDelay }}
              >
                {skill.icon}
                <div className="tech-icons-text">{skill.label}</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Techstack;
