import React from 'react';
import { Container, Row, Col, Nav, Button, Carousel, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Maratha= () => {
  return (
    <div>
      <main>
      <h1 className='mt-2 text-center'>एक मराठा कोटी मराठा</h1>
      <h2 className='mt-2 text-center'>आता कस <strong>मनोज जरांगे पाटील </strong>म्हणतील तस...</h2>
        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center" >
              <div className="text-center">
                <Image src="assets/indexrajyabhishek.jpeg" className="maharaj" alt="maharajrajabhishek" fluid />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center" >
              <div className="text-center">
                <div className="patilmedia">
                  <Image src="assets/indexrajyabhishek.jpeg" className="patil" alt="patil" fluid />
                </div>
                
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      
              <div className="text-center">
                <h2>जय शिवराय, मराठा साम्राज्य वेबसाइटवर आपले स्वागत आहे...</h2>
                <p className="para1">“कोणतेही काम करण्यापूर्वी, त्याच्या परिणामाचा विचार करणे फायदेशीर आहे, कारण आपली भावी पिढी त्याचे पालन करते.”</p>
              </div>
           
        <div className='bg bg-light text-center' >
                  <h3>जरांगे पाटलांबद्दलचा हा सविस्तर वृत्तांत...</h3>
                  <p>मराठा समाजाला आरक्षण मिळालं पाहिजे, यासाठी चळवळीच्या माध्यमातून गेल्या १० ते १५ वर्षापासून मनोज जरांगे पाटील काम करतायेत. मनोज तसे मूळचे बीडच्या मातोरीचे...पण काही वर्षांपूर्वी ते जालन्याच्या अंबडमधील अंकुशनगरात स्थायिक झाले. जरांगे पाटलांच्या घरची परिस्थिती बेताचीच. पण समाजसेवेची आवड त्यांना स्वस्थ बसू देत नाही. अगदी स्वत:च्या मालकीची जमीन विकून त्यांनी मराठा आरक्षण चळवळीला बळ दिलं. यासाठी त्यांनी कित्येक मोर्चे काढले, आमरण उपोषणे केली,मराठा समाजासाठी लढवय्या कार्यकर्ता अशी मनोज जरांगे पाटलांची संपूर्ण मराठवाड्यात ओळख आहे. पूर्णवेळ मराठा समाजाच्या प्रश्नांसाठी काम करणारे म्हणूनही मनोज यांची ख्याती आहे.मनोज जरांगे २०११ पासून मराठा आरक्षण चळवळीत सक्रीय आहेत. त्यांच्या नेतृत्वात २०१४ मध्ये औरंगाबाद विभागीय आयुक्तालयावर काढलेल्या मोर्चाने राज्याचं लक्ष वेधलं होतं. आतापर्यंत त्यांनी आरक्षणासाठी ३५ हून अधिक मोर्चे, आंदोलने केली.ना दिल्लीच्या रामलीला मैदानावर उपोषण केलं.. ना मुंबईत आझाद मैदानात आंदोलन केलं.. संसदेवर किंवा मंत्रालयावरही मोर्चा काढला नाही.. जालन्याचा हा एक फाटका माणूस मैदानात उतरला, छोट्याशा गावातून लढाईला हाक दिली आणि मराठा आरक्षण लढ्याला धार आणली.. हा पठ्ठ्या म्हणजे मनोज जरांगे पाटील. फक्त समाजाचं पाठबळ आणि व्यवस्थेला अन् सरकराला भिडण्याच्या ताकदीवर मनोज जरांगे पाटलांनी मराठा आरक्षणाच्या धगधगत्या प्रश्नावर सरकारसह विरोधकांचं लक्ष वेधलं. गेल्या चार वर्षांपासून थंडावलेला मराठा आरक्षणाचा लढा आता मनोज जरांगे पाटलांमुळे तापलाय.</p>
                </div>
      </main>
    </div>
  );
};

export default Maratha;
