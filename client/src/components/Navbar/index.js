import React,{Fragment} from 'react'

import { Navbar , Nav , NavDropdown} from 'react-bootstrap';

const navbar = () => {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Apna delivery</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/regisration">
        Rgistration
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
};
export default navbar