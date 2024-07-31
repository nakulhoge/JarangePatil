import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';



const Patil = () => {
  return (
    <Container fluid className="home-page">
      {/* Main content area */}
      <Row className="justify-content-center">
        <Col md={12} lg={8} className="text-center mb-4">
         
          <h1 className="mt-4">
            “मी जगलो तर तुमचा, अन् मेलो तर…”, मनोज जरांगे पाटलांचा मराठा आंदोलकांना संदेश
          </h1>
          <Image
            src="/assets/indexpatil2.png"
            alt="Attractive Image"
            fluid
            className="main-image"
          />
          <h3 className="mt-4">
            {/* Content goes here */}
            {/* Similar content as provided */}
          </h3>
        </Col>
      </Row>

      <Row className="justify-content-center mb-4">
        <Col md={12} lg={6}>
          <Image
            src="/assets/home1maharaj2.png"
            alt="Another Image"
            fluid
            className="additional-image"
          />
        </Col>
        <Col md={12} lg={6}>
       
        </Col>
      </Row>

     
    </Container>
  );
};

export default Patil;
