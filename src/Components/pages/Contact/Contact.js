import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";
import Icons from "./IconSection";
import { Header } from "../../../Elements/Elements";
import { motion, useAnimation } from "framer-motion";

const Contact = () => {
  const variants = {
    closed: {
      x: 200,
      opacity: 0,
      transition: {
        type: "spring",
        damping: 10,
        duration: 5,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const headerControls = useAnimation();
  const formControls = useAnimation();
  const iconControls = useAnimation();

  const sequence = async () => {
    await headerControls.start("open");
    await formControls.start("open");
    await iconControls.start("open");
  };
  sequence();
  return (
    <Container>
      <Row>
        <Col className="py-5 px-5" md={6}>
          <Row>
            <Col className="mb-3">
              <Header
              variants={variants}
              initial='closed'
              animate={headerControls} className="d-inline-block">Contact Us</Header>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
          <motion.div
          variants={variants}
          initial='closed'
          animate={formControls}>
            <ContactForm />
          </motion.div>
        </Col>
        <Col
          id="icon-section"
          className="py-5 px-5 d-flex flex-column justify-content-center"
          md={5}
        >
          <Icons animate={iconControls} />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
