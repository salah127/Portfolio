import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { MdOutlineZoomOutMap } from "react-icons/md";
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

const zoomBtnStyle = {
  background: "rgba(200, 137, 230, 0.15)",
  border: "1px solid rgba(200, 137, 230, 0.4)",
  color: "white",
  borderRadius: "8px",
  padding: "6px 14px",
  cursor: "pointer",
  fontSize: "1.1rem",
  transition: "background 0.2s",
  display: "flex",
  alignItems: "center",
  gap: "4px",
};

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const isMobile = width <= 786;
  const baseScale = isMobile ? 0.6 : 0.95;
  const pageScale = baseScale * zoom;

  const zoomIn  = () => setZoom(z => Math.min(z + 0.2, 2.5));
  const zoomOut = () => setZoom(z => Math.max(z - 0.2, 0.4));
  const reset   = () => setZoom(1);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Download + Zoom controls */}
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "30px", gap: "12px", flexWrap: "wrap" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "200px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button style={zoomBtnStyle} onClick={zoomOut} title="Zoom out">
              <AiOutlineZoomOut /> &minus;
            </button>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", minWidth: "46px", textAlign: "center" }}>
              {Math.round(zoom * 100)}%
            </span>
            <button style={zoomBtnStyle} onClick={zoomIn} title="Zoom in">
              <AiOutlineZoomIn /> +
            </button>
            <button style={zoomBtnStyle} onClick={reset} title="Reset zoom">
              <MdOutlineZoomOutMap />
            </button>
          </div>
        </Row>

        {/* PDF pages */}
        <Row
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: isMobile ? "column" : "row",
            flexWrap: zoom > 1.4 ? "wrap" : "nowrap",
            gap: isMobile ? "32px" : "0",
            paddingBottom: "50px",
            overflowX: "auto",
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
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "200px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

