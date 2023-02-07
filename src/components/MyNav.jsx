import { Navbar, Nav } from "react-bootstrap";

const MyNav = (props) => {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="#">
        <strong>{props.brand}</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#" active>
            Home
          </Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
