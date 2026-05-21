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

// ─── Highway lanes: 7 lanes × 7 skills, alternating direction ────────────────
const lanes = [
  // Lane 1 → (Languages)
  {
    speed: "30s", direction: "forward",
    skills: [
      { icon: <img src={Javascript} alt="JS" className="tech-icon-images" />, label: "JavaScript" },
      { icon: <img src={Typescript} alt="TS" className="tech-icon-images" />, label: "TypeScript" },
      { icon: <img src={Python} alt="Python" className="tech-icon-images" />, label: "Python" },
      { icon: <img src={Java} alt="Java" className="tech-icon-images" />, label: "Java" },
      { icon: <img src={C} alt="C++" className="tech-icon-images" />, label: "C++" },
      { icon: <img src={Go} alt="Go" className="tech-icon-images" />, label: "Go" },
      { icon: <FaRust fontSize="1.6rem" style={{ color: "#CE422B" }} />, label: "Rust" },
    ],
  },
  // Lane 2 ← (Frontend)
  {
    speed: "24s", direction: "reverse",
    skills: [
      { icon: <SiHtml5 fontSize="1.6rem" style={{ color: "#E34F26" }} />, label: "HTML5" },
      { icon: <SiCss3 fontSize="1.6rem" style={{ color: "#1572B6" }} />, label: "CSS3" },
      { icon: <img src={ReactIcon} alt="React" className="tech-icon-images" />, label: "React.js" },
      { icon: <SiNextdotjs fontSize="1.6rem" style={{ color: "#ffffff" }} />, label: "Next.js" },
      { icon: <img src={Node} alt="Node" className="tech-icon-images" />, label: "Node.js" },
      { icon: <SiPhp fontSize="1.6rem" style={{ color: "#777BB4" }} />, label: "PHP" },
      { icon: <img src={HaskellIcon} alt="Haskell" className="tech-icon-images" />, label: "Haskell" },
    ],
  },
  // Lane 3 → (Salesforce Dev)
  {
    speed: "36s", direction: "forward",
    skills: [
      { icon: <SiSalesforce fontSize="1.6rem" style={{ color: "#00A1E0" }} />, label: "Salesforce" },
      { icon: <FaCode fontSize="1.6rem" style={{ color: "#1589EE" }} />, label: "Apex" },
      { icon: <FaLayerGroup fontSize="1.6rem" style={{ color: "#61DAFB" }} />, label: "LWC" },
      { icon: <MdAltRoute fontSize="1.6rem" style={{ color: "#FF7F50" }} />, label: "Flows" },
      { icon: <FaDatabase fontSize="1.6rem" style={{ color: "#4DB33D" }} />, label: "SOQL" },
      { icon: <FaBolt fontSize="1.6rem" style={{ color: "#FBBF24" }} />, label: "Triggers" },
      { icon: <FaFileCode fontSize="1.6rem" style={{ color: "#8B5CF6" }} />, label: "Visualforce" },
    ],
  },
  // Lane 4 ← (Salesforce Ecosystem)
  {
    speed: "28s", direction: "reverse",
    skills: [
      { icon: <FaBrain fontSize="1.6rem" style={{ color: "#A855F7" }} />, label: "Einstein AI" },
      { icon: <FaRobot fontSize="1.6rem" style={{ color: "#06B6D4" }} />, label: "Agentforce" },
      { icon: <FaUsers fontSize="1.6rem" style={{ color: "#10B981" }} />, label: "CRM" },
      { icon: <FaCloud fontSize="1.6rem" style={{ color: "#3B82F6" }} />, label: "Data Cloud" },
      { icon: <FaChartLine fontSize="1.6rem" style={{ color: "#F59E0B" }} />, label: "Sales Cloud" },
      { icon: <FaHeadset fontSize="1.6rem" style={{ color: "#EF4444" }} />, label: "Service Cloud" },
      { icon: <FaCog fontSize="1.6rem" style={{ color: "#9CA3AF" }} />, label: "SF Admin" },
    ],
  },
  // Lane 5 → (Databases & Infra)
  {
    speed: "32s", direction: "forward",
    skills: [
      { icon: <img src={Mongo} alt="MongoDB" className="tech-icon-images" />, label: "MongoDB" },
      { icon: <img src={SQL} alt="PostgreSQL" className="tech-icon-images" />, label: "PostgreSQL" },
      { icon: <img src={Redis} alt="Redis" className="tech-icon-images" />, label: "Redis" },
      { icon: <img src={Docker} alt="Docker" className="tech-icon-images" />, label: "Docker" },
      { icon: <img src={Kubernates} alt="Kubernetes" className="tech-icon-images" />, label: "Kubernetes" },
      { icon: <img src={AWS} alt="AWS" className="tech-icon-images" />, label: "AWS" },
      { icon: <img src={Firebase} alt="Firebase" className="tech-icon-images" />, label: "Firebase" },
    ],
  },
  // Lane 6 ← (DevOps / Tooling)
  {
    speed: "22s", direction: "reverse",
    skills: [
      { icon: <img src={Git} alt="Git" className="tech-icon-images" />, label: "Git" },
      { icon: <img src={Kafka} alt="Kafka" className="tech-icon-images" />, label: "Kafka" },
      { icon: <img src={Redux} alt="Redux" className="tech-icon-images" />, label: "Redux" },
      { icon: <img src={Tailwind} alt="Tailwind" className="tech-icon-images" />, label: "Tailwind CSS" },
      { icon: <img src={MUI} alt="MUI" className="tech-icon-images" />, label: "Material UI" },
      { icon: <SiLinux fontSize="1.6rem" style={{ color: "#FCC624" }} />, label: "Linux" },
      { icon: <SiNginx fontSize="1.6rem" style={{ color: "#009900" }} />, label: "Nginx" },
    ],
  },
  // Lane 7 → (Data, AI & Misc)
  {
    speed: "38s", direction: "forward",
    skills: [
      { icon: <img src={Postman} alt="Postman" className="tech-icon-images" />, label: "Postman" },
      { icon: <FaGithub fontSize="1.6rem" style={{ color: "#ffffff" }} />, label: "GitHub" },
      { icon: <SiSolidity fontSize="1.6rem" style={{ color: "#9CA3AF" }} />, label: "Solidity" },
      { icon: <FaChartBar fontSize="1.6rem" style={{ color: "#06D6A0" }} />, label: "Data Analytics" },
      { icon: <FaBrain fontSize="1.6rem" style={{ color: "#A855F7" }} />, label: "Machine Learning" },
      { icon: <FaLink fontSize="1.6rem" style={{ color: "#14B8A6" }} />, label: "Integration" },
      { icon: <FaExchangeAlt fontSize="1.6rem" style={{ color: "#F97316" }} />, label: "APIs" },
    ],
  },
];

function Techstack() {
  return (
    <div className="highway-container">
      {lanes.map((lane, laneIndex) => (
        <div key={laneIndex} className="highway-lane">
          {/* duplicate skills for seamless infinite scroll */}
          <div
            className={`highway-track highway-track-${lane.direction}`}
            style={{ "--lane-speed": lane.speed }}
          >
            {[...lane.skills, ...lane.skills].map((skill, i) => (
              <div key={i} className="tech-icons">
                {skill.icon}
                <div className="tech-icons-text">{skill.label}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Techstack;

