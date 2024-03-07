
import React, { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { ImBlog } from 'react-icons/im';
import './MobileFooter.css'; // Your CSS file
import { Link } from "react-router-dom";

function MobileFooter() {
  const [active, setActive] = useState("Home"); // Default active button

  // Function to handle button click
  const handleButtonClick = (name) => {
    setActive(name);
  };

  // Function to determine button style
  

  return (
    <section className="mobile-footer d-block d-lg-none">
      <Container fluid>
        <Row>
        <Col xs={3} onClick={() => handleButtonClick("Home")}>
  <Button as={Link} to="/" className={`icon-button ${active === 'Home' ? 'active' : ''}`}>
    <AiOutlineHome />
    <div className="icon-text">Home</div>
  </Button>
</Col>
<Col xs={3} onClick={() => handleButtonClick("About")}>
  <Button as={Link} to="/about" className={`icon-button ${active === 'About' ? 'active' : ''}`}>
  <AiOutlineUser />
    <div className="icon-text">About</div>
  </Button>
</Col>
<Col xs={3} onClick={() => handleButtonClick("Projects")}>
  <Button as={Link} to="/services" className={`icon-button ${active === 'Projects' ? 'active' : ''}`}>
  <AiOutlineFundProjectionScreen />
    <div className="icon-text">Services</div>
  </Button>
</Col>
<Col xs={3} onClick={() => handleButtonClick("Blogs")}>
  <Button as={Link} to="/blogs" className={`icon-button ${active === 'Blogs' ? 'active' : ''}`}>
  <ImBlog />
    <div className="icon-text">Appointment</div>
  </Button>
</Col>

        </Row>
      </Container>
    </section>
  );
}

export default MobileFooter;

