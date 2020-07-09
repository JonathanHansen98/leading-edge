import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../images/logo-square.png";
import './Nav.css'

const TopBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "var(--le-lightgrey)" }}
    >
        <Navbar.Brand style={{ color: "var(--le-cyan)" }}>
          <span>
            <img className="mr-3" height="35px" src={Logo} alt="" />
          </span>
          Leading Edge
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav>
              <Nav.Link className='mx-5' style={{ color: "var(--le-cyan)" }} href="/">Home</Nav.Link>
              <Nav.Link className='mx-5' style={{ color: "var(--le-cyan)" }} href="/services">Services</Nav.Link>
              <Nav.Link className='mx-5' style={{ color: "var(--le-cyan)" }} href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;
