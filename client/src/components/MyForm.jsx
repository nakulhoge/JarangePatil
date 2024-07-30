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
      const response = await axios.post('http://localhost:5000/submit-form', user);
      setSuccessMessage('Form submitted successfully!');
      toast.success('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Failed to submit the form. Please try again.');
      toast.error('Failed to submit the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset=()=>{
    setUser('')
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8} className="bg-light p-4 rounded border">
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
                  as="select"
                  name="taluka"
                  value={user.taluka}
                  onChange={handleInputChange}
                >
                 <option value="" selected>तालुका निवडा</option>
            <option value="जामखेड">जामखेड</option>
            <option value="कर्जत">कर्जत</option>
            <option value="श्रीगोंदा">श्रीगोंदा</option>
            <option value="पारनेर">पारनेर</option>
            <option value="राहुरी">राहुरी</option>
            <option value="नगर">नगर</option>
            <option value="पाथर्डी">पाथर्डी</option>
            <option value="शेवगाव">शेवगाव</option>
            <option value="नेवासाशेवगाव">नेवासाशेवगाव</option>
            <option value="श्रीरामपूर">श्रीरामपूर</option>
            <option value="संगमनेर">संगमनेर</option>
            <option value="अकोले">अकोले</option>
            <option value="बार्शीटाकळी">बार्शीटाकळी</option>
            <option value="पातूर">पातूर</option>
            <option value="मुर्तिजापूर">मुर्तिजापूर</option>
            <option value="अकोला">अकोला</option>
            <option value="बाळापूर">बाळापूर</option>
            <option value="अकोट">अकोट</option>
            <option value="तेल्हारा">तेल्हारा</option>
            <option value="धामणगाव रेल्वे">धामणगाव रेल्वे</option>
            <option value="चांदुर रेल्वे">चांदुर रेल्वे</option>
            <option value="नांदगाव खंडेश्वर">नांदगाव खंडेश्वर</option>
            <option value="दर्यापूर">दर्यापूर</option>
            <option value="भातकुली">भातकुली</option>
            <option value="अमरावती">अमरावती</option>
            <option value="तिवसा">तिवसा</option>
            <option value="वरुड">वरुड</option>
            <option value="मोर्शी">मोर्शी</option>
            <option value="चांदुर बाजार">चांदुर बाजार</option>
            <option value="अचलपूर">अचलपूर</option>
            <option value="अंजनगाव सुर्जी">अंजनगाव सुर्जी</option>
            <option value="चिखलदरा">चिखलदरा</option>
            <option value="धारणी">धारणी</option>
            <option value="अंबेजोगाई">अंबेजोगाई</option>
            <option value="परळी वैजनाथ">परळी वैजनाथ</option>
            <option value="धारूर">धारूर</option>
            <option value="केज">केज</option>
            <option value="बीड">बीड</option>
            <option value="वडवणी">वडवणी</option>
            <option value="माजलगाव">माजलगाव</option>
            <option value="गेवराई">गेवराई</option>
            <option value="शिरूर">शिरूर</option>
            <option value="पाटोदा">पाटोदा</option>
            <option value="आष्टी">आष्टी</option>
            <option value="लाखांदूर">लाखांदूर</option>
            <option value="पवनी">पवनी</option>
            <option value="लाखनी">लाखनी</option>
            <option value="साकोली">साकोली</option>
            <option value="भंडारा">भंडारा</option>
            <option value="मोहाडी">मोहाडी</option>
            <option value="तुमसर">तुमसर</option>
            <option value="लोणार">लोणार</option>
            <option value="सिंदखेड राजा">सिंदखेड राजा</option>
            <option value="देउळगाव राजा">देउळगाव राजा</option>
            <option value="बुलढाणा">बुलढाणा</option>
            <option value="चिखली">चिखली</option>
            <option value="मेहकर">मेहकर</option>
            <option value="खामगाव">खामगाव</option>
            <option value="मोताळा">मोताळा</option>
            <option value="मलकापूर">मलकापूर</option>
            <option value="नांदुरा">नांदुरा</option>
            <option value="शेगाव">शेगाव</option>
            <option value="संग्रामपूर">संग्रामपूर</option>
            <option value="जळगाव जामोद">जळगाव जामोद</option>
            <option value="पैठण">पैठण</option>
            <option value="गंगापूर">गंगापूर</option>
            <option value="वैजापूर">वैजापूर</option>
            <option value="खुलताबाद">खुलताबाद</option>
            <option value="छत्रपती संभाजीनगर">छत्रपती संभाजीनगर</option>
            <option value="फुलंब्री">फुलंब्री</option>
            <option value="सिल्लोड">सिल्लोड</option>
            <option value="सोयगाव">सोयगाव</option>
            <option value="कन्नड">कन्नड</option>
            <option value="गोंडपिपरी">गोंडपिपरी</option>
            <option value="राजुरा">राजुरा</option>
            <option value="जिवती">जिवती</option>
            <option value="कोरपना">कोरपना</option>
            <option value="बल्लारपूर">बल्लारपूर</option>
            <option value="चंद्रपूर">चंद्रपूर</option>
            <option value="भद्रावती">भद्रावती</option>
            <option value="पाटण">पाटण</option>
            <option value="मूळ">मूळ</option>
            <option value="कुंभारी">कुंभारी</option>
            <option value="सोलापूर">सोलापूर</option>
            <option value="पाटण">पाटण</option>
            <option value="माढा">माढा</option>
            <option value="सोलापूर ग्रामीण">सोलापूर ग्रामीण</option>
            <option value="विठोबा">विठोबा</option>
            <option value="सांगली">सांगली</option>
            <option value="अक्कलकोट">अक्कलकोट</option>
            <option value="मिरज">मिरज</option>
            <option value="करेशा">करेशा</option>
            <option value="सातारा">सातारा</option>
            <option value="कऱ्हाड">कऱ्हाड</option>
            <option value="माझगांव">माझगांव</option>
            <option value="मलपाण">मलपाण</option>
            <option value="संगली">संगली</option>
            <option value="उदगीर">उदगीर</option>
            <option value="जगन्नाथ">जगन्नाथ</option>
            <option value="नांदेड">नांदेड</option>
            <option value="अंबाजोगाई">अंबाजोगाई</option>
            <option value="उदगीर">उदगीर</option>
            <option value="लातूर">लातूर</option>
            <option value="कवठेमहांकाळ">कवठेमहांकाळ</option>
            <option value="संजयगड">संजयगड</option>
            <option value="लातूर शहर">लातूर शहर</option>
                </Form.Control>
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
