import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const MyForm = () => {
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
    number: '',
    gender: '',
    city: '',
    taluka: '',
    village: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // Adjust URL if needed
      const response = await axios.post('https://marathapatilkunbi-com.onrender.com/submit-form', user);
      setSuccessMessage('Form submitted successfully!');
      toast.success('Form submitted successfully!');
      handleReset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Failed to submit the form. Please try again.');
      toast.error('Failed to submit the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset=()=>{
    setUser({
      fname: '',
      lname: '',
      email: '',
      number: '',
      gender: '',
      city: '',
      taluka: '',
      village: '',
    });
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8} className="p-4 rounded shadow">
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="name" className="mb-3">
              <Form.Label column sm={4} md={3}>नाव:</Form.Label>
              <Col sm={8} md={9}>
                <Form.Control
                  type="text"
                  name="fname"
                  placeholder="ex:- name\Name\NAME"
                  pattern="[A-Za-z]{1,25}"
                  value={user.fname}
                  onChange={handleInputChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="lname" className="mb-3">
              <Form.Label column sm={4} md={3}>आडनाव:</Form.Label>
              <Col sm={8} md={9}>
                <Form.Control
                  type="text"
                  name="lname"
                  placeholder="ex:- name\Name\NAME"
                  pattern="[A-Za-z]{1,25}"
                  value={user.lname}
                  onChange={handleInputChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="email" className="mb-3">
              <Form.Label column sm={4} md={3}>ईमेल:</Form.Label>
              <Col sm={8} md={9}>
                <Form.Control
                  type="email"
                  name="email"
                   placeholder="ex:- email@gmail.com"
                  value={user.email}
                  onChange={handleInputChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="mob" className="mb-3">
              <Form.Label column sm={4} md={3}>मोबाईल:</Form.Label>
              <Col sm={8} md={9}>
                <Form.Control
                  type="text"
                  name="number"
                  placeholder='Enter correct mobile number'
                  pattern="[6-9]{1}[0-9]{9}"
                  value={user.number}
                  onChange={handleInputChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="gender" className="mb-3">
              <Form.Label column sm={4} md={3}>लिंग:</Form.Label>
              <Col sm={8} md={9} className="d-flex flex-wrap align-items-center">
                <Form.Check
                  type="radio"
                  name="gender"
                  value="पुरुष"
                  label="पुरुष"
                  checked={user.gender === 'पुरुष'}
                  onChange={handleInputChange}
                  id="gender1"
                  className="me-3"
                />
                <Form.Check
                  type="radio"
                  name="gender"
                  value="स्त्री"
                  label="स्त्री"
                  checked={user.gender === 'स्त्री'}
                  onChange={handleInputChange}
                  id="gender2"
                  className="me-3"
                />
                <Form.Check
                  type="radio"
                  name="gender"
                  value="इतर"
                  label="इतर"
                  checked={user.gender === 'इतर'}
                  onChange={handleInputChange}
                  id="gender3"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="city" className="mb-3">
              <Form.Label column sm={4} md={3}>शहर:</Form.Label>
              <Col sm={8} md={9}>
                <Form.Control
                  as="select"
                  name="city"
                  value={user.city}
                  onChange={handleInputChange}
                >
                  <option value="" selected>शहर निवडा</option>
            <option value="Ahmednagar">Ahmednagar</option>
            <option value="Akola">Akola</option>
            <option value="Amravati">Amravati</option>
            <option value="Beed">Beed</option>
            <option value="Bhandara">Bhandara</option>
            <option value="Buldhana">Buldhana</option>
            <option value="chhatrapati sambhaji nagar">Chhatrapati Sambhaji Nagar</option>
            <option value="Chandrapur">Chandrapur</option>
            <option value="Dharashiv">Dharashiv</option>
            <option value="Dhule">Dhule</option>
            <option value="Gadchiroli">Gadchiroli</option>
            <option value="Gondia">Gondia</option>
            <option value="Hingoli">Hingoli</option>
            <option value="Jalgaon">Jalgaon</option>
            <option value="Jalna">Jalna</option>
            <option value="Kolhapur">Kolhapur</option>
            <option value="Latur">Latur</option>
            <option value="Mumbai City">Mumbai City</option>
            <option value="Mumbai Suburban">Mumbai Suburban</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Nanded">Nanded</option>
            <option value="Nandurbar">Nandurbar</option>
            <option value="Nashik">Nashik</option>
            <option value="Palghar">Palghar</option>
            <option value="Parbhani">Parbhani</option>
            <option value="Pune">Pune</option>
            <option value="Raigad">Raigad</option>
            <option value="Ratnagiri">Ratnagiri</option>
            <option value="Sangli">Sangli</option>
            <option value="Satara">Satara</option>
            <option value="Sindhudurg">Sindhudurg</option>
            <option value="Solapur">Solapur</option>
            <option value="Thane">Thane</option>
            <option value="Wardha">Wardha</option>
            <option value="Washim">Washim</option>
            <option value="Yavatmal">Yavatmal</option>
                </Form.Control>
              </Col>
            </Form.Group>

        
            <Form.Group as={Row} controlId="taluka" className="mb-3">
              <Form.Label column sm={4} md={3}>तालुका:</Form.Label>
              <Col sm={8} md={9}>
                <Form.Control
                  type="text"
                  name="taluka"
                  placeholder="Enter your taluka"
                  value={user.taluka}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="village" className="mb-3">
              <Form.Label column sm={4} md={3}>गाव:</Form.Label>
              <Col sm={8} md={9}>
                <Form.Control
                  type="text"
                  name="village"
                  placeholder="Enter your village"
                  value={user.village}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Group>

            <Row className="justify-content-center mt-4">
              <Col xs="auto" className="d-flex justify-content-between">
                <Button variant="secondary" type="reset" className="me-2" onClick={handleReset} >Reset Now</Button>
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Now'}
                </Button>
              </Col>
            </Row>

            {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
            <ToastContainer />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MyForm;
