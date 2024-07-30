import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';


import ModalDonation from './ModalDonation';

function NavbarComp() {
  
  const [showDonationModal, setShowDonationModal] = useState(false);

  const handleShowDonation = () => setShowDonationModal(true);
  const handleCloseDonation = () => setShowDonationModal(false);

  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-navbar">
        <Container>
          <Navbar.Brand href="home">
            <h1 className="logo">MARATHA</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="maratha" className="nav-link">Home</Nav.Link>
              <Nav.Link href="contact" className="nav-link">Contact</Nav.Link>
              <Nav.Link href="patil" className="nav-link">About Us</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Button variant="outline-primary"  onClick={handleShowDonation}>
                Donation
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ModalDonation show={showDonationModal} handleClose={handleCloseDonation} />
    </>
  );
}

export default NavbarComp;
