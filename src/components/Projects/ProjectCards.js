import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && <Card.Img variant="top" src={props.imgPath} alt="card-img" />}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {props.ghLink ? (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub /> &nbsp;GitHub
            </Button>
          ) : (
            <Button variant="secondary" disabled>
              <AiFillGithub /> &nbsp;Private
            </Button>
          )}
          {!props.isBlog && (
            props.demoLink ? (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                rel="noreferrer"
              >
                <CgWebsite /> &nbsp;Demo
              </Button>
            ) : (
              <Button variant="secondary" disabled>
                <CgWebsite /> &nbsp;Coming Soon
              </Button>
            )
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
