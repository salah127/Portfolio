import React from "react";
import {
  SiFigma,
  SiJira,
  SiNotion,
  SiSlack,
  SiMicrosoftazure,
  SiLinux,
} from "react-icons/si";
import { FaWindows, FaGithub, FaTerminal } from "react-icons/fa";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

// Hourglass shape: 5 → 3 → 1 → 3 → 5
const hourglassRows = [
  // ─── Row 1 – 5 (OS / IDEs) ───────────────────────────────────────
  [
    { icon: <img src={vsCode} alt="VS Code" className="tech-icon-images" />, label: "VS Code" },
    { icon: <img src={intelliJ} alt="IntelliJ" className="tech-icon-images" />, label: "IntelliJ" },
    { icon: <img src={macOs} alt="macOS" className="tech-icon-images" />, label: "macOS" },
    { icon: <FaWindows fontSize="1.6rem" />, label: "Windows" },
    { icon: <SiLinux fontSize="1.6rem" />, label: "Linux" },
  ],
  // ─── Row 2 – 3 (Browser / API / VCS) ─────────────────────────────
  [
    { icon: <img src={chrome} alt="Chrome" className="tech-icon-images" />, label: "Chrome" },
    { icon: <img src={Postman} alt="Postman" className="tech-icon-images" />, label: "Postman" },
    { icon: <FaGithub fontSize="1.6rem" />, label: "GitHub" },
  ],
  // ─── Row 3 – 1 (Centre / Waist) ──────────────────────────────────
  [
    { icon: <SiFigma fontSize="1.6rem" />, label: "Figma" },
  ],
  // ─── Row 4 – 3 (Collaboration) ───────────────────────────────────
  [
    { icon: <SiJira fontSize="1.6rem" />, label: "Jira" },
    { icon: <SiNotion fontSize="1.6rem" />, label: "Notion" },
    { icon: <SiSlack fontSize="1.6rem" />, label: "Slack" },
  ],
  // ─── Row 5 – 5 (Cloud / DevOps) ──────────────────────────────────
  [
    { icon: <img src={Docker} alt="Docker" className="tech-icon-images" />, label: "Docker" },
    { icon: <img src={AWS} alt="AWS" className="tech-icon-images" />, label: "AWS" },
    { icon: <SiMicrosoftazure fontSize="1.6rem" />, label: "Azure" },
    { icon: <img src={Git} alt="Git" className="tech-icon-images" />, label: "Git" },
    { icon: <FaTerminal fontSize="1.6rem" />, label: "Terminal" },
  ],
];

function Toolstack() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "50px" }}>
      {hourglassRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          {row.map((tool, toolIndex) => (
            <div key={toolIndex} className="tech-icons">
              {tool.icon}
              <div className="tech-icons-text">{tool.label}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Toolstack;

