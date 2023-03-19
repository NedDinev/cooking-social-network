import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";

export default function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg" className="mb-3 ">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              className="d-inline"
              src="/assets/images/logo/logo-black.png"
              alt="Cooking Savage"
              width="100px"
              height="100px"
            />
            <h1 className="d-inline font-link font-weight-bold">
              Cooking Savage
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <h3 className="font-link">Cooking Savage</h3>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-4 ">
                <Badge bg="default">
                  <Nav.Link href="#action2">Home</Nav.Link>
                </Badge>
              </Nav>
              <Nav className="justify-content-end  pe-4 ">
                <Badge bg="primary">
                  <Nav.Link href="#action1">Explore</Nav.Link>
                </Badge>
              </Nav>
              <Nav className="justify-content-end pe-4 ">
                <Badge bg="default">
                  <Nav.Link href="#action2">Login</Nav.Link>
                </Badge>
              </Nav>
              <Nav className="justify-content-end pe-3 ">
                <Badge bg="default">
                  <Nav.Link href="#action3">Sign up</Nav.Link>
                </Badge>
              </Nav>
              <Nav className="justify-content-end pe-3 ">
                <Badge bg="default">
                  <Nav.Link href="#action4">About</Nav.Link>
                </Badge>
              </Nav>
              <Form className="d-flex pe-3">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-3"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}