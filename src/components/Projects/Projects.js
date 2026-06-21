import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import insead from "../../Assets/Projects/insead.png";
import intake from "../../Assets/Projects/intake.png";
import AlMaimouni from "../../Assets/Projects/AlMaimouni.svg";
import boostfy from "../../Assets/Projects/boostify.png";
import autoApply from "../../Assets/Projects/auto_apply.png";
import globalExam from "../../Assets/Projects/global_exame.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insead}
              isBlog={false}
              title="INSEAD E-Portal"
              description="INSEAD Executive Education eCommerce platform is a digital portal to explore and enroll in leadership and management programmes, offering tailored learning solutions for professionals and organizations."
              ghLink="https://github.com/salah127"
              demoLink="https://eportal-uat.insead.edu/EDP_CommunityLoginPage"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={intake}
              isBlog={false}
              title="INTAKE Support"
              description="INSEAD IT Support Hub is a comprehensive rewrite of the campus assistance workflow. It introduces a seamless, location-aware experience for users seeking technical support, while providing technicians with real-time tools to manage assistance queues efficiently."
              ghLink="https://github.com/youcisla/inseadassistance"
              demoLink="https://it-assistance-jj.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AlMaimouni}
              isBlog={false}
              title="Al MAIMOUNI Restaurant"
              description="Al MAIMOUNI Restaurant is a fine dining establishment offering a diverse menu of gourmet dishes, focusing on high-quality ingredients and exceptional service to provide a memorable culinary experience."
              ghLink="https://github.com/salah127/Al-Maimouni"
              demoLink="https://al-maimouni.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={boostfy}
              isBlog={false}
              title="Boostfy"
              description="Marketing/automation tool designed to enhance online growth and engagement, typically focusing on traffic optimization, performance boosting, and streamlining digital promotion processes across platforms."
              ghLink="https://github.com/salah127/boostfy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autoApply}
              isBlog={false}
              title="Auto-Apply"
              description="Automation tool that streamlines the job search process by automatically finding relevant listings and submitting applications across multiple platforms, helping users save time and increase application efficiency."
              ghLink="https://github.com/salah127/Auto-Apply"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={globalExam}
              isBlog={false}
              title="GlobalExam-Solver"
              description="Tool that automates solving exercises and test questions from the GlobalExam platform, helping users quickly generate answers and improve efficiency in language exam practice."
              ghLink="https://github.com/salah127/GlobalExam-Solver"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
