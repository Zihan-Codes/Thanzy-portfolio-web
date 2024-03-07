import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";

function GitLinkIcons() {

    return (
        <section>
            <Container>
                <Row>
                    <Col>
                    <ul>
            {/* <li className="social-icons">
              <a
                href="http://github.com/Zihan-Codes/"
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li> */}
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mohamed-zihan-123257195/"
                // style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.instagram.com/zihan"
                // style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>

          </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default GitLinkIcons;