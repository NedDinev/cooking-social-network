import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer >
      <Navbar bg="light" expand="lg" className="py-0 my-0">
        <Container fluid>
          <Navbar.Brand as={Link} className="hover-effect" to="/">
            <h3 className="text-primary d-inline font-link font-weight-bold">
              Cooking Savage
            </h3>
          </Navbar.Brand>

          <Nav className="justify-content-end ">
            <Badge bg="default">
              <Nav.Link
                as={Link}
                to="https://github.com/NedDinev"
                target="_blank"
              >
                &copy; Nedelcho Dinev
              </Nav.Link>
            </Badge>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
}
