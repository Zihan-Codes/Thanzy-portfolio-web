import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";


function Header() {

  return (
    <Navbar fixed="top" expand="md" className="d-none d-lg-block" >
      <Container className="d-flex justify-content-center">

        <Navbar.Collapse children="navbar-collapse" id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
              >
                {/* <AiOutlineUser style={{ marginBottom: "2px", color: "#27ff" }} />  */}
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="#"
              >
                Appointments
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/services"
              >
                Services
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://medium.com/@mohamed-zihan"
                target="_blank"
                rel="noreferrer"
              >
                {/* <ImBlog style={{ marginBottom: "2px", color: "#27ff" }} />  */}
                Blogs
              </Nav.Link>
            </Nav.Item>

            
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
