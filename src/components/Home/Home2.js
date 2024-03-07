import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/programmer-avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em", color: "#27ff" }}>
      GET TO KNOW <span className="purple"> MY APPROACH </span>
    </h1>
    <p className="home-about-body">
      I am Dr. Emily Richardson, a licensed clinical psychologist with a profound dedication to mental well-being.
      <br />
      <br />
      Guided by a compassionate approach, I strive to create a therapeutic environment where individuals can explore their emotions and navigate life's challenges.
      <br />
      <br />
      With a focus on evidence-based practices, I am committed to providing support tailored to the unique needs of each client. Whether addressing anxiety, depression, or life transitions, my goal is to empower individuals on their journey to mental health.
      <br />
      <br />
      Through a blend of cognitive-behavioral techniques, mindfulness, and a client-centered perspective, I work collaboratively with my clients to foster resilience and promote positive change.
      <br />
      <br />
      My passion extends beyond the therapy room as I actively contribute to mental health advocacy and community education.
    </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="psychologist avatar" />
    </Tilt>
  </Col>
</Row>
      </Container>
    </Container>
  );
}
export default Home2;
