import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./ImgCard";
import {Header, StyledP} from '../../../Elements/Elements';
import { useAnimation } from "framer-motion";


const Services = () => {
  const hControls = useAnimation();
  const pControls = useAnimation();
  const cbControls = useAnimation();

  const sequence = async () => {
    await hControls.start("open");
    await pControls.start("open");
    await cbControls.start("open");
  };
  sequence();
  const services = [
    {
      text: "test",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F7n6cpvIFdfY%2Fmaxresdefault.jpg&f=1&nofb=1",
    },
    {
      text: "test",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F7n6cpvIFdfY%2Fmaxresdefault.jpg&f=1&nofb=1",
    },
    {
      text: "test",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F7n6cpvIFdfY%2Fmaxresdefault.jpg&f=1&nofb=1",
    },
    {
      text: "test",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F7n6cpvIFdfY%2Fmaxresdefault.jpg&f=1&nofb=1",
    },
    {
      text: "test",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F7n6cpvIFdfY%2Fmaxresdefault.jpg&f=1&nofb=1",
    },
    {
      text: "test",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F7n6cpvIFdfY%2Fmaxresdefault.jpg&f=1&nofb=1",
    },
  ];
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
  return (
    <Container>
      <Row>
        <Col className='py-5' lg={6}>
          <Row>
            <Col>
              <Header
               variants={variants}
               initial="closed"
               animate={hControls}
                className=" p-2 pt-md-5 d-inline-block"
              >
                Our Services
              </Header>
            </Col>
          </Row>
          <Row>
            <Col>
              <StyledP
               variants={variants}
               initial="closed"
               animate={pControls}
                className="my-md-5"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                nulla accusantium, natus labore omnis nesciunt non in culpa
                fugit magni ipsam quasi temporibus, a dolorum.
              </StyledP>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <Row className="py-5">
            {services.map((img, i) => (
              <Card key={i} img={img.img} text={img.text} animate={cbControls} delay={i * .3} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
