import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeNamePic from "../components/Home/HomeNamePic";
import Home1 from "../components/Home/Home1";
  


function Home() {

  
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <HomeNamePic /> */}
        <Home1 />
        
      </Container>

      
    </section>
  );
}

export default Home;
