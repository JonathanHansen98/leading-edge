import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import {
  faEnvelope,
  faPhone,
  faMapMarker
} from "@fortawesome/free-solid-svg-icons";


const icons = [
  {
    icon: faEnvelope,
    text: "Lorem ipsum dolor",
  },
  {
    icon: faPhone,
    text: "Lorem ipsum dolor",
  },
  {
    icon: faMapMarker,
    text: "Lorem ipsum dolor",
  },
];
const IconSection = ({ animate }) => {
  return (
    <div className='pt-5'>
      <Row className="py-5 my-3 d-flex flex-column">
        {icons.map((icon, i) => {
          const variants = {
            closed: {
              x: 200,
              opacity: 0,
            },
            open: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.4,
                delay: i * .3,
              },
            },
          };
          return (
          <motion.div
           variants={variants}
           initial='closed'
           animate={animate}
           key={i}>
            <Col>
              <Row>
                <Col className="d-flex justify-content-center">
                  <FontAwesomeIcon
                    size="4x"
                    className="my-3"
                    color="var(--le-cyan)"
                    icon={icon.icon}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <p className="text-center">{icon.text}</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </motion.div>
          )
        })}
      </Row>
    </div>
  );
};

export default IconSection;
