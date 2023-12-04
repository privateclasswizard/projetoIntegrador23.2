import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from "../../icons/navalha.svg";
import "../../css/HeaderLogoOff.css";

const HeaderLogoOff = () => {
  return (
    <Navbar expand="lg" className="navBarHeaderLogoOff">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="logoheader" alt="Logo" />
          </Link>
        </Navbar.Brand>
          <Nav className="mr-auto"> 
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </Nav>
        
      </Container>
    </Navbar>
  );
};

export default HeaderLogoOff;