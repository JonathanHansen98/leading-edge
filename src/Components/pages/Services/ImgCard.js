import React, {useState} from "react";
import { CyanButton } from "../../../Elements/Elements";
import { Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import ContactModal from '../Contact/ContactModal'

const ImgCard = ({ img, text, animate, delay }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: delay
      }
    },
    closed: {
      x: 200,
      opacity: 0
    }
  }

 const styles = {
   minHeight : {
     minHeight: '160px'
   }
 }

  return (
    <Col className="m-3" md={5}>
      <motion.div className='d-flex justify-content-center' variants={variants} animate={animate} transition={{delay: delay}} initial='closed' >
        <Card style={{ width: "15rem", border: "none" }}>
          <Card.Img style={styles.minHeight} variant="top" src={img} />
          <div style={{ backgroundColor: "var(--le-lightgrey)" }}>
            <div className="d-inline-flex align-items-center">
              <p
                style={{ color: "white" }}
                className="mb-0 mt-1 ml-2 align-self-center"
              >
                {text}
              </p>
            </div>
            <CyanButton onClick={handleShow} className="float-right px-2"><FontAwesomeIcon icon={faEnvelope} /> </CyanButton>
            <ContactModal show={show} handleClose={handleClose} />
          </div>
        </Card>
      </motion.div>
    </Col>
  );
};

export default ImgCard;
