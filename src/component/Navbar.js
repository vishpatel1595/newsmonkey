import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
// import PropTypes from 'prop-types'

export class navbar extends Component {
//   static propTypes = {

//   }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">NewsMonkey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
  }
}

export default navbar
