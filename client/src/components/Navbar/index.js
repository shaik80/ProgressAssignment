import React from 'react'
import { Navbar , Nav} from 'react-bootstrap';

const navbar = () => {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">ProgressAssignment</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="/AddActor">Add Actor</Nav.Link>
      <Nav.Link href="/AddMovie">
        Add Movie
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
};
export default navbar