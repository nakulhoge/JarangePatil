import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3">
        <Container>
          <Row>
            <Col className="text-center">
              <h3><mark>About Us</mark></h3>
              <h2>जय शिवराय मावळ्यांनो</h2>
              <p>आपल एकच ध्येय महाराष्ट्रातील तमाम मराठा बांधवांना एकत्रित करणे</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p>&copy; 2024 Your Website. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer> 
    );
};

export default Footer;