import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import HomeImg from "../../Assets/thanzy_img.jpeg";

const Home1 = ()  => {
    return(
        <Container className="marginTop1 paddingTop">
            <Row>
                <Col className="col-sm-6">
                {/* <div className="text-left">
                      <h4>Hello,</h4>
                      <h1>I'm your personal</h1>
                      <h1>Psychologist</h1>
                    </div> */}
                    <div className="text-left">
                      <h4 className="homeTitle1">Hello,</h4>
                      <h1 className="homeTitle1 archivoBlackFont">Meet your <span className="greenText">Clinical Psychologist</span></h1>
                      {/* <h1 className="homeTitle1 archivoBlackFont greenText">Psychologist</h1> */}
                      <h1 className="homeNameFont">Thanzeeha Umar</h1>
                    </div>
                    {/* <div><h1>I'm your personal</h1></div>
                    <div><h1>Psychologist</h1></div> */}
                </Col>
                <Col className="col-sm-6">
                <Image className="homeImg" src={HomeImg} />
                </Col>
            </Row>
        </Container>
    );
};

export default Home1;