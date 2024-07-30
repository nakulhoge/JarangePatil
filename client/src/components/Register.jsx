import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';


const Register = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <div className="registerform p-4  rounded shadow">
            <h1 className="text-center mb-4">
              " परिस्थिती जेवढी बिकट मराठा तेवढाच तिखट..."
            </h1>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group controlId="mobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Enter your mobile number" required />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" required />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Submit
              </Button>
            </Form>
            <a href="login" className="d-block text-center mt-3 text-primary">
              Back to Login
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
