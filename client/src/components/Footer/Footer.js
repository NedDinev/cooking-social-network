import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";

export default function Footer() {
  return (
    <footer className="fixed-bottom">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <h3 className="text-primary d-inline font-link font-weight-bold">
              Cooking Savage
            </h3>
          </Navbar.Brand>

          <Nav className="justify-content-end pe-3 ">
            <Badge bg="default">
              <Nav.Link href="#">&copy; Nedelcho Dinev</Nav.Link>
            </Badge>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
}
