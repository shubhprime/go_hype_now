import React from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function NavbarComp() {
    return (
      <Navbar expand="lg" className="bg-red-500">
        <Container>
          <Navbar.Brand href="/">Hype</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-[#E0E0E0]">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/eventmanagement">Event Management</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/celebritymanagement">Celebrity Management</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/influencermanagement">Influencer Management</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/publicrelations">Public Relations</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavbarComp;