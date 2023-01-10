import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';

function NavbarComponent() {
  return (
    <Navbar variant="light" expand="lg" className="mw-100">
      <Container className="mw-100">
        <Navbar.Brand to="/"><h3><strong>BODIMAJI</strong></h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link to="/"><strong>Home</strong></Nav.Link>
            <Nav.Link to="/About"><strong>About</strong></Nav.Link>
            <Nav.Link to="/Article"><strong>Article</strong></Nav.Link>
            <Nav.Link to="/Register"><strong>Register/Login</strong></Nav.Link>
            <Nav.Link to="/Cart"><strong><i className="bi bi-basket3"></i></strong></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;