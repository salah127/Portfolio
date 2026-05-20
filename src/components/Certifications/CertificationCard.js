import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

function CertificationCard(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card className="project-card-view">
        {props.imgPath && (
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt={props.title}
            onClick={() => setShow(true)}
            style={{ cursor: "zoom-in" }}
          />
        )}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            <strong>Issuer:</strong> {props.issuer}
          </Card.Text>
          {props.date && (
            <Card.Text>
              <strong>Date:</strong> {props.date}
            </Card.Text>
          )}
          {props.description && (
            <Card.Text style={{ textAlign: "justify" }}>
              {props.description}
            </Card.Text>
          )}
          {props.certLink ? (
            <Button
              variant="primary"
              href={props.certLink}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineSafetyCertificate /> &nbsp;View Certificate
            </Button>
          ) : (
            <Button variant="secondary" disabled>
              <CgWebsite /> &nbsp;Coming Soon
            </Button>
          )}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={() => setShow(false)} size="xl" centered>
        <Modal.Header closeButton style={{ background: "#1a1a2e", border: "none" }} />
        <Modal.Body style={{ background: "#1a1a2e", padding: "10px", textAlign: "center" }}>
          <img
            src={props.imgPath}
            alt={props.title}
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CertificationCard;
