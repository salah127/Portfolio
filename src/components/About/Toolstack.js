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

// ─── Highway lanes: 2 lanes, alternating direction ────────────────────────────
const lanes = [
  // Lane 1 → (OS / IDEs / Browser)
  {
    speed: "26s", direction: "forward",
    tools: [
      { icon: <img src={vsCode} alt="VS Code" className="tech-icon-images" />, label: "VS Code" },
      { icon: <img src={intelliJ} alt="IntelliJ" className="tech-icon-images" />, label: "IntelliJ" },
      { icon: <img src={macOs} alt="macOS" className="tech-icon-images" />, label: "macOS" },
      { icon: <FaWindows fontSize="1.6rem" style={{ color: "#00A4EF" }} />, label: "Windows" },
      { icon: <SiLinux fontSize="1.6rem" style={{ color: "#FCC624" }} />, label: "Linux" },
      { icon: <img src={chrome} alt="Chrome" className="tech-icon-images" />, label: "Chrome" },
      { icon: <img src={Postman} alt="Postman" className="tech-icon-images" />, label: "Postman" },
      { icon: <FaGithub fontSize="1.6rem" style={{ color: "#ffffff" }} />, label: "GitHub" },
      { icon: <FaTerminal fontSize="1.6rem" style={{ color: "#4ADE80" }} />, label: "Terminal" },
    ],
  },
  // Lane 2 ← (Collaboration / Cloud / Design)
  {
    speed: "32s", direction: "reverse",
    tools: [
      { icon: <SiFigma fontSize="1.6rem" style={{ color: "#F24E1E" }} />, label: "Figma" },
      { icon: <SiJira fontSize="1.6rem" style={{ color: "#0052CC" }} />, label: "Jira" },
      { icon: <SiNotion fontSize="1.6rem" style={{ color: "#ffffff" }} />, label: "Notion" },
      { icon: <SiSlack fontSize="1.6rem" style={{ color: "#4A154B" }} />, label: "Slack" },
      { icon: <img src={Docker} alt="Docker" className="tech-icon-images" />, label: "Docker" },
      { icon: <img src={AWS} alt="AWS" className="tech-icon-images" />, label: "AWS" },
      { icon: <SiMicrosoftazure fontSize="1.6rem" style={{ color: "#0078D4" }} />, label: "Azure" },
      { icon: <img src={Git} alt="Git" className="tech-icon-images" />, label: "Git" },
    ],
  },
];

function Toolstack() {
  return (
    <div className="highway-container">
      {lanes.map((lane, laneIndex) => (
        <div key={laneIndex} className="highway-lane">
          <div
            className={`highway-track highway-track-${lane.direction}`}
            style={{ "--lane-speed": lane.speed }}
          >
            {[...lane.tools, ...lane.tools].map((tool, i) => (
              <div key={i} className="tech-icons">
                {tool.icon}
                <div className="tech-icons-text">{tool.label}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;

