import React from "react";
import { Navbar, Nav, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Navbar style={{ backgroundColor: "var(--le-lightgrey)" }}>
      <Col xs={6}>
        <Navbar.Brand style={{ color: "white" }}>Leading Edge</Navbar.Brand>
      </Col>
      <Col xs={6}>
        <Nav>
          <div className="d-flex w-100 justify-content-around">
            <Link style={{ color: "white" }} to="/">
              <li>Home</li>
            </Link>
            <Link style={{ color: "white" }} to="/services">
              <li>Services</li>
            </Link>
            <Link style={{ color: "white" }} to="/contact">
              <li>Contact</li>
            </Link>
          </div>
        </Nav>
      </Col>
    </Navbar>
  );
};

export default TopBar;
