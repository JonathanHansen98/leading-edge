import React from "react";
import { CyanButton } from "../../../Elements/Elements";
import { Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const ImgCard = ({ img, text, animate, delay }) => {
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

  return (
    <Col className="m-3" md={5}>
      <motion.div variants={variants} animate={animate} transition={{delay: delay}} initial='closed' >
        <Card style={{ width: "15rem", border: "none" }}>
          <Card.Img variant="top" src={img} />
          <div style={{ backgroundColor: "var(--le-lightgrey)" }}>
            <div className="d-inline-flex align-items-center">
              <p
                style={{ color: "white" }}
                className="mb-0 mt-1 ml-2 align-self-center"
              >
                {text}
              </p>
            </div>
            <CyanButton className="float-right">Somethin</CyanButton>
          </div>
        </Card>
      </motion.div>
    </Col>
  );
};

export default ImgCard;
