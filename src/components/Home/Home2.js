import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Salah Eddine, a Software Engineer and AI-focused developer
              passionate about transforming ideas into scalable, high-performance
              products. Over time, I've explored different technologies and
              discovered a strong interest in building intelligent systems,
              automation tools, and modern web experiences.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Python, Node.js, React.js, and MongoDB{" "}
                </b>
              </i>
              and I enjoy working across both backend and frontend development.
              <br />
              <br />
              My main areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  AI-powered Applications, Full-Stack Web Development,{" "}
                </b>
              </i>
              Automation Systems, Real-Time Applications, and Interactive Digital
              Experiences.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>
              </i>
              , focusing on clean architecture, performance, and intuitive user
              experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
