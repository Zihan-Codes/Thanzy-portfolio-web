import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer d-none d-lg-block">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Mohamed Zihan</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} ZiHaN</h3>
        </Col>
        <Col md="4" className="footer-body d-none d-md-block">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="http://github.com/Zihan-Codes/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mohamed-zihan-123257195/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/zihan"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
