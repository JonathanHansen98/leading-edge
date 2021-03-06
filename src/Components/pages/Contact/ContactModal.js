import React from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import {CyanButton} from '../../../Elements/Elements'
import './Modal.css'

const ContactModal = ({show, handleClose}) => {
  return (
    <Modal id="modal" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="input" placeholder="John" name="first_name" />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="input" placeholder="Smith" name="last_name" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="johnsmith@somewhere.com"
                name="email"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="input"
                placeholder="123-456-7890"
                name="phone"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control as="select" name="subject">
                  <option>Quote</option>
                  <option>Set up appointment</option>
                  <option>Question</option>
                  <option>Comment</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="message">
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows="5" name="message" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <CyanButton className="float-right" type="submit">
                Submit
              </CyanButton>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
