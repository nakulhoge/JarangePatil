import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://marathapatilkunbi-com.onrender.com/contactform", contactForm);
      toast.success('धन्यवाद,संपर्क साधल्या बद्दल आम्ही लवकरच यावर आपल्याशी संपर्क करू');
      setContactForm({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      toast.error('Failed to submit the form.');
    }
  };

  return (
    <Container className="contact-container" style={{'marginTop':'-30px'}}>
      
      <Row className="justify-content-center align-items-center min-vh-100">
      <ToastContainer />
        <Col md={8} lg={6} className="p-4 rounded shadow">
          <h1 className="text-center mb-4">Contact Us</h1>
          <marquee behavior="scroll" direction="left">
          जय शिवराय ,ज्या आपल्या समाज बांधवांनी एवढी मेहनत घेऊन जे स्वतः च मीडिया बनवला त्या सर्वांना  सोबत घेऊन त्यांच्या साठी आम्ही मोफत जाहिरात करणार आहेत,नक्की संपर्क साधा धन्यवाद...
          </marquee>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={contactForm.name}
                onChange={handleInputChange}
                aria-label="Name"
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={contactForm.email}
                onChange={handleInputChange}
                aria-label="Email"
                required
              />
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={contactForm.phoneNumber}
                onChange={handleInputChange}
                aria-label="Phone Number"
                required
              />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="message"
                value={contactForm.message}
                onChange={handleInputChange}
                aria-label="Message"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
