import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCards from "./ServiceCard";

function AllServices() {
  return (
    <Container fluid className="project-section">
     
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Services </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few services given by me.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ServiceCards
              isBlog={false}
              title="Service 1"
              description="Developed a Secure Authentication System for a hospital, an individual
              project focusing on enhanced security through Role-Based Access
              Control and 2FA validation. This system offers strengthened security
              layers with attribute verification, role-based restrictions, and user
             friendly password management."
            />
          </Col>

          <Col md={4} className="project-card">
            <ServiceCards
              isBlog={false}
              title="Service 2"
              description=" Participated in a group project to create an Online Vehicle Requesting
              System, a versatile web/mobile application designed for companies to
              book vehicles (Bus, Van, Car, TukTuk) for staff transportation. The
              system allows managers to select specific drop locations and facilitates
              cash payments, streamlining the vehicle booking process."
              
              />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default AllServices;
