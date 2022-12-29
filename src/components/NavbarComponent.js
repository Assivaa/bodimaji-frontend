import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';

function NavbarComponent() {
  return (
    <Navbar variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="me-1"><strong>BODIMAJI</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home"><strong>Home</strong></Nav.Link>
            <Nav.Link href="#about"><strong>About</strong></Nav.Link>
            <Nav.Link href="#article"><strong>Article</strong></Nav.Link>
            <Nav.Link href="#register"><strong>Register/Login</strong></Nav.Link>
            <Nav.Link href="#register"><strong><i className="bi bi-basket3"></i></strong></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;