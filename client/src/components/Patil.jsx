import React from 'react';
import { Container, Row, Col, Image,} from 'react-bootstrap';
import './Home.css';


const Patil = () => {
  return (
    <Container fluid className="home-page">
      {/* Main content area */}
      <Row className="justify-content-center">
        <Col md={12} lg={8} className="text-center mb-4">
         
          <h1 className="mt-4 hover-title">
            “मी जगलो तर तुमचा, अन् मेलो तर…”, मनोज जरांगे पाटलांचा मराठा आंदोलकांना संदेश
          </h1>
          <Image
            src="/assets/indexpatil2.png"
            alt="Attractive Image"
            fluid
            className="main-image"
          />
          <h3 className="mt-4">
          <marquee behavior="scroll" direction="left">
          जय शिवराय ,आपल्या सर्व मराठा बांधवांना विनंती आहे की ही वेबसाईट आपलीच आहे ,आणि कुणाला आपला काही संदेश माहिती द्याची असेल  त्यांनी नक्की संपर्क साधा. आपला संदेश आम्ही विना मूल्य  दाखवू धन्यवाद...
          </marquee>

          </h3>
        </Col>
      </Row>

      <Row className="justify-content-center mb-4">
        <Col md={12} lg={4}>
        <Image
            src="/assets/img1.png"
            alt="Another Image"
            fluid
            className="additional-image"
          />
        </Col>
        <Col md={12} lg={4}>
       
           <Image
            src="/assets/home1maharaj2.png"
            alt="Another Image"
            fluid
            className="additional-image"
          />
       
        </Col>
        <Col md={12} lg={4}>
       
       <Image
        src="/assets/img1.png"
        alt="Another Image"
        fluid
        className="additional-image"
        style={{'transform': 'scaleX(-1)'}}
      />
   
    </Col>
      </Row>

     
    </Container>
  );
};

export default Patil;
