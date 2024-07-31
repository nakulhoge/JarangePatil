import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
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
            <Nav className="align-items-center">
              {/* <Button variant="outline-primary" onClick={handleShowDonation}>
                Donation
              </Button> */}
              <Nav.Link href="https://www.facebook.com/manojjarangepatil96k?mibextid=ZbWKwL" target="_blank" className="d-flex align-items-center">
                <FaFacebookF size={20} className="mx-2" />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/manoj_jarange_patil_96k?igsh=YzhsYmx4NWRqMTRs" target="_blank" className="d-flex align-items-center">
                <FaInstagram size={20} className="mx-2" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ModalDonation show={showDonationModal} handleClose={handleCloseDonation} />
    </>
  );
}

export default NavbarComp;
