import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <Navbar bg="light" expand="lg" style={styles.navbar}>
        <Container fluid>
          <Navbar.Brand as={Link} style={styles.navbarBrand} to="/">
            <h3 style={styles.brandHeading}>Cooking Savage</h3>
          </Navbar.Brand>

          <Nav style={styles.nav}>
            <Badge bg="default">
              <Nav.Link
                style={styles.navLink}
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

const styles = {
  footer: {
    marginTop: "auto",
  },
  navbar: {
    backgroundColor: "#f6f6f6",
    padding: "0.5rem 0",
    margin: "0",
    display: "flex",
    justifyContent: "space-between",
  },
  navbarBrand: {
    textDecoration: "none",
    color: "#f06f4e",
    display: "inline",
    fontFamily: "link",
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  brandHeading: {
    fontFamily: "Supermercado One, cursive",
  },
  nav: {
    justifyContent: "flex-end",
  },
  navLink: {
    textDecoration: "none",
    color: "#7d9c4f",
    fontWeight: "bold",
  },
  badge: {
    backgroundColor: "default",
  },
};
