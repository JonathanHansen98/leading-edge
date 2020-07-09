import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./ImgCard";
import { Header, StyledP } from "../../../Elements/Elements";
import { useAnimation, motion } from "framer-motion";
import Sheets from "../../../images/drywall-sheets-min.jpeg";
import Popcorn from "../../../images/popcorn-min.jpeg";
import Patches from "../../../images/patches-min.jpg";
import Texture from "../../../images/texture-min.jpeg";
import Painting from "../../../images/painting-min.jpeg";
import Commercial from "../../../images/commercial-min.jpeg";

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
      text: "Patch Repair",
      img: Patches,
    },
    {
      text: "Popcorn Removal",
      img: Popcorn,
    },
    {
      text: "Texturing",
      img: Texture,
    },
    {
      text: "Small Remodels",
      img: Sheets,
    },
    {
      text: "Commercial Services",
      img: Commercial,
    },
    {
      text: "Painting",
      img: Painting,
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
        <Col className="py-5" lg={6}>
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
              <motion.div
                variants={variants}
                initial="closed"
                animate={pControls}
                className="my-md-5"
              >
                <StyledP>
                  At Leading Edge every job is important and we believe that the
                  extra level of care put into our work demonstrates our
                  commitment to quality and value.
                </StyledP>
                <StyledP>
                  Based out of Phoenix, AZ, Leading Edge Drywall’s general area
                  of operation includes a 200 mile radius encompassing the
                  entire valley.
                </StyledP>
              </motion.div>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <Row className="py-5">
            {services.map((img, i) => (
              <Card
                key={i}
                img={img.img}
                text={img.text}
                animate={cbControls}
                delay={i * 0.3}
              />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
