import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Header,
  CyanButton,
  ClearButton,
  StyledP,
} from "../../../Elements/Elements";
import Logo from "./LogoSVG";
import { useAnimation } from "framer-motion";

const Home = () => {
  const hControls = useAnimation();
  const pControls = useAnimation();
  const bControls = useAnimation();
  const cbControls = useAnimation();
  const logoContols = useAnimation();

  const sequence = async () => {
    await hControls.start("open");
    pControls.start("open");
    await logoContols.start("open");
    await bControls.start("open");
    await cbControls.start("open");
  };
  sequence();
  const logoVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const variants = {
    closed: {
      x: 200,
      opacity: 0
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
      <Row className="mt-5">
        <Col className="px-5 my-5 order-2 order-md-1" md={6}>
          <Row>
            <Col>
              <Header
                variants={variants}
                initial="closed"
                animate={hControls}
                className=" p-2 pt-md-5 d-inline-block"
              >
                Leading the <br /> Industry
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
          <Row className="mt-md-5">
            <Col className="d-inline-flex justify-content-end">
              <CyanButton
                variants={variants}
                initial="closed"
                animate={bControls}
                className="mx-3"
              >
                Request a Quote
              </CyanButton>
              <ClearButton
                variants={variants}
                initial="closed"
                animate={cbControls}
                className="mx-3"
              >
                Our Services
              </ClearButton>
            </Col>
          </Row>
        </Col>
        <Col className="d-inline-flex align-items-center px-5 order-1 order-md-2" md={6}>
          <Logo
            variants={logoVariants}
            initial="closed"
            animate={logoContols}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
