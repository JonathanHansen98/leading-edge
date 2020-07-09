import React from "react";
import { Navbar, Nav, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../images/logo-square.png'

const TopBar = () => {
  return (
    <Navbar style={{ backgroundColor: "var(--le-lightgrey)" }}>
      <Col xs={6}>
        <Navbar.Brand  style={{ color: "var(--le-cyan)" }}><span><img className='mr-3' height='35px' src={Logo} alt=""/></span>Leading Edge</Navbar.Brand>
      </Col>
      <Col xs={6}>
        <Nav>
          <div className="d-flex w-100 justify-content-around">
            <Link style={{ color: "var(--le-cyan)" }} to="/">
              <li>Home</li>
            </Link>
            <Link style={{ color: "var(--le-cyan)" }} to="/services">
              <li>Services</li>
            </Link>
            <Link style={{ color: "var(--le-cyan)" }} to="/contact">
              <li>Contact</li>
            </Link>
          </div>
        </Nav>
      </Col>
    </Navbar>
  );
};

export default TopBar;
