import React, {useState} from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/thanzy_img.jpeg";
import Type from "./Type";
import GitLinkIcons from "./GitLinkIcons";
  


function HomeNamePic() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <section>
      <Container fluid className="home-section" id="home">
        
        <Container className="home-content">
          <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Col md={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ borderRadius: '50%' }}
              />
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <h1 className="heading-name">
                <strong className="main-name"> Thanzeeha Umar </strong>
              </h1>
              </Col>
          </Row>

          <Row>
             <Col className="text-center">
               <div >
                 <Type />
               </div>
             </Col>
          </Row>
        </Container>
        <GitLinkIcons />
      </Container>


      <Modal show={show} onHide={handleClose} className="contact-modal">
        <Modal.Header style={{ backgroundColor: '#d12424' }} className="d-flex justify-content-center text-center" closeButton closeVariant="red" style={{ fontSize: '1.5rem' }}>
          <Modal.Title className="w-100">Contact Options</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#f7f7f7' }}>
          <Row className="mb-2 d-flex justify-content-center">
            <Col xs="auto">
              <Button variant="success" href="whatsapp://send?phone=YOUR_PHONE_NUMBER" block>Contact Me via WhatsApp</Button>
            </Col>
          </Row>

          <Row className="mb-2 d-flex justify-content-center">
            <Col xs="auto">
              <Button variant="primary" href="mailto:your-email@example.com" block>Send an Email</Button>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center">
            <Col xs="auto">
              <Button variant="secondary" href="tel:+123456789" block>Make a Phone Call</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </section>
    
  );
}

export default HomeNamePic;
