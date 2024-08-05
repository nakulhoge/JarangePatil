import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const HomePage = () => {
  return (
    <div>
      <Container fluid className="text-center  mt-5" >
        <Row className="justify-content-center mt-5">
          <Col md={8} >
            <h1 className="text-warning">जय शिवराय</h1>
            <h2 className="text-light">मराठा साम्राज्यात आपले स्वागत आहे!</h2>
            <h3 >
              मी सर्व मराठा बांधवांना विनंती करतो की त्यांनी आपल्या
              मराठा साम्राज्याचा भाग व्हा... <strong><a href="/register" className="text-warning">click here</a></strong>
            </h3>
            <img src="/assets/homemaharaj.png" alt="maharaj" className="img-fluid mt-3" />
          </Col>
        </Row>
      </Container>
      
    </div>
  );
};

export default HomePage;
