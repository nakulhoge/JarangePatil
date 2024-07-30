import React from 'react';
import { Modal, Button, Form, Image } from 'react-bootstrap';

const ModalDonation = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton >
                <Modal.Title>Donation</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <Image src="../../assets/projectlogo.png" width="150"
            height="100" rounded className="mb-3" />
                <p>Support our cause with your generous donation.</p>
                <Form>
                    <Form.Group controlId="donationAmount">
                        <Form.Label>Donation Amount:</Form.Label>
                        <Form.Control type="number" placeholder="Enter amount" />
                    </Form.Group>
                    <Form.Group controlId="donorName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group controlId="donorEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group controlId="donorPhone">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control type="text" placeholder="Enter your phone number" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleClose}>Donate</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalDonation;
