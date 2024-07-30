import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to a server)
  };

  return (
    <Container className="login-container ">
      <Row className="justify-content-center align-items-center min-vh-100 ">
        <Col md={6} lg={4} className="p-4 rounded shadow">
          <h1 className="text-center mb-4">Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                name="username"
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Login
            </Button>
          </Form>
          <div className="text-center mt-3">
            <Link to="/register">New Registration</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
