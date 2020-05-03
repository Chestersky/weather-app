import React from "react";
import { LinkContainer } from "react-router-bootstrap";
// import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const toolbar = () => {
  return (
    <Navbar expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>WeatherAPP</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <LinkContainer to="/">
            <Nav.Link>Aktualna pogoda</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/fiveday">
            <Nav.Link>Pogoda długoterminowa</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default toolbar;
