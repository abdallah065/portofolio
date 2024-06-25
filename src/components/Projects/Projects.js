import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import chart from "../../Assets/Projects/chart.png";
import twitterCard from "../../Assets/Projects/twitterCard.png";

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
              imgPath={chart}
              isBlog={false}
              title="Chart Drawer"
              description="The Chart Drawer is an interactive web application that allows users to generate custom 'Spoke Charts' based on input data points. Built with JavaScript, Bootstrap, and HTML5 Canvas, this application provides a user-friendly interface for creating and downloading these charts."
              ghLink="https://github.com/abdallah065/chart-drawer"
              demoLink="https://chart-drawer.vercel.app/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitterCard}
              isBlog={false}
              title="Twitter Card Generator"
              description="I made a Flask-based web application that allows users to create Twitter cards with custom titles, descriptions, and images. These cards can then be shared on Twitter to enhance social media posts."
              // ghLink="https://github.com/abdallah065/Twitter-Card-Generator"
              demoLink="https://twitter-card-generator-sigma.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              // ghLink="https://github.com/abdallah065/PAND_SYSTEM"
              demoLink="https://abdallah065-pand-system.streamlit.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
