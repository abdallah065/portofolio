import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  Sipostman,
  SiSlack,
  SiVercel,
  SiWindows,
  SiPostman,
  SiGithub,
  SiAmazon,
  SiAmazonaws,
  SiDigitalocean,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={{ color: "white", fontSize: "1.5rem" }}> Github</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ color: "white", fontSize: "1.5rem" }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ color: "white", fontSize: "1.5rem" }}>postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDigitalocean />
        <p style={{ color: "white", fontSize: "1.5rem" }}>Digital Ocean</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p style={{ color: "white", fontSize: "1.5rem" }}>Vercel</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
