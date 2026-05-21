import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const pageStyle = {
  borderRadius: "6px",
  boxShadow: "0 8px 40px rgba(0, 0, 0, 0.6)",
  overflow: "hidden",
  margin: "0 16px",
};

const labelStyle = {
  textAlign: "center",
  color: "rgba(255,255,255,0.45)",
  fontSize: "0.82rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginBottom: "10px",
};

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const isMobile = width <= 786;
  const pageScale = isMobile ? 0.6 : 0.95;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Download button — top */}
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "40px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF pages side-by-side on desktop, stacked on mobile */}
        <Row
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: isMobile ? "column" : "row",
            flexWrap: "nowrap",
            gap: isMobile ? "32px" : "0",
            paddingBottom: "50px",
          }}
        >
          <Document file={pdf} className="d-flex justify-content-center" style={{ flexDirection: isMobile ? "column" : "row" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <p style={labelStyle}>Page 1</p>
              <div style={pageStyle}>
                <Page pageNumber={1} scale={pageScale} />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: isMobile ? "32px" : "0" }}>
              <p style={labelStyle}>Page 2</p>
              <div style={pageStyle}>
                <Page pageNumber={2} scale={pageScale} />
              </div>
            </div>
          </Document>
        </Row>

        {/* Download button — bottom */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

