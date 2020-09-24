import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { CyanButton } from "../../../Elements/Elements";


const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const onInputChange = e => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value, })
  }

  return (
    <div>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
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
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={onInputChange} type="input" placeholder="John" name="name" value={formState.name} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Email Address</Form.Label>
            <Form.Control onChange={onInputChange}
              value={formState.email}
              type="email"
              placeholder="johnsmith@somewhere.com"
              name="email"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control value={formState.phone} onChange={onInputChange}
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
              <Form.Control value={formState.subject} onChange={onInputChange} as="select" name="subject">
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
              <Form.Control value={formState.message} onChange={onInputChange} as="textarea" rows="5" name="message" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <CyanButton disabled={formState.name.trim() === '' || formState.phone.trim() === '' || formState.message.trim() === '' } className="float-right" type="submit">
              Submit
            </CyanButton>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ContactForm;
