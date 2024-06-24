import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiPython,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiDjango,
  SiPandas,
  SiSelenium,
  SiFlask,
} from "react-icons/si";

function Techstack() {
  return (
    <div>
      {/* Languages */}
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPhp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPython />
          <p style={{ color: "white", fontSize: "1.5rem" }}>Python</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
          <p style={{ color: "white", fontSize: "1.5rem" }}>JavaScript</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
          <p style={{ color: "white", fontSize: "1.5rem" }}>Java</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus />
        </Col>
      </Row>

      {/* Databases */}
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiMongodb />
          <p style={{ color: "white", fontSize: "1.5rem" }}>MongoDB</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
          <p style={{ color: "white", fontSize: "1.5rem" }}>Database</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
          <p style={{ color: "white", fontSize: "1.5rem" }}>Git</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
          <p style={{ color: "white", fontSize: "1.5rem" }}>Firebase</p>
        </Col>
      </Row>

      {/* Frameworks and Tools */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
          <p style={{ color: "white", fontSize: "1.5rem" }}>Node JS</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDjango />
          <p style={{ color: "white", fontSize: "1.5rem" }}>Django</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPandas />
          <p style={{ color: "white", fontSize: "1.5rem" }}>Pandas</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSelenium />
          <p style={{ color: "white", fontSize: "1.5rem" }}>Selenium</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFlask />
          <p style={{ color: "white", fontSize: "1.5rem" }}>Flask</p>
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
