import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";
import Particle from "../Particle";
import googleDataAnalytics from "../../Assets/Certifications/google-data-analytics.jpg";
import googleITAutomation from "../../Assets/Certifications/google-it-automation.jpg";
import salesforceAgentforce from "../../Assets/Certifications/Cert6674083_AgentforceSpecialist_20250816_page-0001.jpg";
import salesforceAI from "../../Assets/Certifications/Cert5305570_AIAssociate_20241124_page-0001.jpg";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some certifications I've earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={googleDataAnalytics}
              title="Google Advanced Data Analytics"
              issuer="Google / Coursera"
              date="Mar 8, 2026"
              description="7-course professional certificate covering data analysis, statistics, regression, machine learning, and predictive modeling to prepare for advanced data analytics roles."
              certLink="https://www.coursera.org/account/accomplishments/professional-cert/ENWWPJR7HUED"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={googleITAutomation}
              title="Google IT Automation with Python"
              issuer="Google / Coursera"
              date="Jan 25, 2026"
              description="7-course professional certificate covering Python, Git, IT automation, troubleshooting, configuration management, and cloud-based automation for IT support roles."
              certLink="https://www.coursera.org/account/accomplishments/professional-cert/RXTB5044AZN2"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={salesforceAgentforce}
              title="Salesforce Certified Agentforce Specialist"
              issuer="Salesforce"
              date="Aug 16, 2025"
              description="Validates expertise in designing, building, and deploying AI agents using Salesforce Agentforce platform."
              certLink="https://trailhead.salesforce.com/en/credentials/verification/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={salesforceAI}
              title="Salesforce Certified AI Associate"
              issuer="Salesforce"
              date="Nov 24, 2024"
              description="Validates foundational knowledge of AI concepts, ethical considerations, and Salesforce's AI capabilities including Einstein."
              certLink="https://trailhead.salesforce.com/en/credentials/verification/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
