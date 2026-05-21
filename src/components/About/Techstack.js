import React from "react";
import {
  SiNextdotjs,
  SiSolidity,
  SiHtml5,
  SiCss3,
  SiLinux,
  SiNginx,
  SiPhp,
} from "react-icons/si";
import { FaRust, FaGithub } from "react-icons/fa";
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

// Hourglass shape: 7 → 5 → 3 → 1 → 3 → 5 → 7
const hourglassRows = [
  // ─── Row 1 – 7 (Languages) ───────────────────────────────────────
  [
    { icon: <img src={Javascript} alt="JavaScript" className="tech-icon-images" />, label: "JavaScript" },
    { icon: <img src={Typescript} alt="TypeScript" className="tech-icon-images" />, label: "TypeScript" },
    { icon: <img src={Python} alt="Python" className="tech-icon-images" />, label: "Python" },
    { icon: <img src={Java} alt="Java" className="tech-icon-images" />, label: "Java" },
    { icon: <img src={C} alt="C++" className="tech-icon-images" />, label: "C++" },
    { icon: <img src={Go} alt="Go" className="tech-icon-images" />, label: "Go" },
    { icon: <FaRust fontSize="1.6rem" />, label: "Rust" },
  ],
  // ─── Row 2 – 5 (Frontend) ────────────────────────────────────────
  [
    { icon: <SiHtml5 fontSize="1.6rem" />, label: "HTML5" },
    { icon: <SiCss3 fontSize="1.6rem" />, label: "CSS3" },
    { icon: <img src={ReactIcon} alt="React" className="tech-icon-images" />, label: "React.js" },
    { icon: <SiNextdotjs fontSize="1.6rem" />, label: "Next.js" },
    { icon: <img src={Node} alt="Node.js" className="tech-icon-images" />, label: "Node.js" },
  ],
  // ─── Row 3 – 3 (Databases) ───────────────────────────────────────
  [
    { icon: <img src={Mongo} alt="MongoDB" className="tech-icon-images" />, label: "MongoDB" },
    { icon: <img src={SQL} alt="PostgreSQL" className="tech-icon-images" />, label: "PostgreSQL" },
    { icon: <img src={Redis} alt="Redis" className="tech-icon-images" />, label: "Redis" },
  ],
  // ─── Row 4 – 1 (Centre / Waist) ──────────────────────────────────
  [
    { icon: <img src={Docker} alt="Docker" className="tech-icon-images" />, label: "Docker" },
  ],
  // ─── Row 5 – 3 (Cloud / Infra) ───────────────────────────────────
  [
    { icon: <img src={Kubernates} alt="Kubernetes" className="tech-icon-images" />, label: "Kubernetes" },
    { icon: <img src={AWS} alt="AWS" className="tech-icon-images" />, label: "AWS" },
    { icon: <img src={Firebase} alt="Firebase" className="tech-icon-images" />, label: "Firebase" },
  ],
  // ─── Row 6 – 5 (Tooling / UI) ────────────────────────────────────
  [
    { icon: <img src={Git} alt="Git" className="tech-icon-images" />, label: "Git" },
    { icon: <img src={Kafka} alt="Kafka" className="tech-icon-images" />, label: "Kafka" },
    { icon: <img src={Redux} alt="Redux" className="tech-icon-images" />, label: "Redux" },
    { icon: <img src={Tailwind} alt="Tailwind" className="tech-icon-images" />, label: "Tailwind CSS" },
    { icon: <img src={MUI} alt="MUI" className="tech-icon-images" />, label: "Material UI" },
  ],
  // ─── Row 7 – 7 (Misc / Other) ────────────────────────────────────
  [
    { icon: <SiSolidity fontSize="1.6rem" />, label: "Solidity" },
    { icon: <img src={HaskellIcon} alt="Haskell" className="tech-icon-images" />, label: "Haskell" },
    { icon: <SiNginx fontSize="1.6rem" />, label: "Nginx" },
    { icon: <img src={Postman} alt="Postman" className="tech-icon-images" />, label: "Postman" },
    { icon: <SiLinux fontSize="1.6rem" />, label: "Linux" },
    { icon: <SiPhp fontSize="1.6rem" />, label: "PHP" },
    { icon: <FaGithub fontSize="1.6rem" />, label: "GitHub" },
  ],
];

function Techstack() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "50px" }}>
      {hourglassRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          {row.map((skill, skillIndex) => (
            <div key={skillIndex} className="tech-icons">
              {skill.icon}
              <div className="tech-icons-text">{skill.label}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Techstack;
