import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/esm/Badge";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";

export default function Header() {
  const { isAuthenticated, userId } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSearchSubmit = (data) => {
    const searchInput = data.search;

    navigate(`/search/${searchInput}`);
    reset({
      search: "",
    });
  };

  const navItems = [
    {
      label: "Home",
      path: "/",
      badgeVariant: "default",
    },
    {
      label: "Explore",
      path: "/explore",
      badgeVariant: "primary",
    },
    {
      label: "Add Recipe",
      path: "/create",
      badgeVariant: "default",
      logged: true,
    },
    {
      label: "Login",
      path: "/login",
      badgeVariant: "default",
      logged: false,
    },
    {
      label: "Register",
      path: "/register",
      badgeVariant: "default",
      logged: false,
    },
    {
      label: "Profile",
      path: `/profile/${userId}`,
      badgeVariant: "default",
      logged: true,
    },
    {
      label: "Logout",
      path: "/logout",
      badgeVariant: "default",
      logged: true,
    },
    {
      label: "About",
      path: "/about",
      badgeVariant: "default",
    },
  ];

  return (
    <Navbar style={styles.navbar} expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} style={styles.navbarBrand} to="/">
          <img
            style={styles.logo}
            src="/assets/images/logo/logo-black.png"
            alt="Cooking Savage"
          />
          <h1 style={styles.title}>Cooking Savage</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header style={styles.offcanvasHeader} closeButton>
            <Offcanvas.Title
              style={styles.offcanvasTitle}
              id={`offcanvasNavbarLabel-expand-lg`}
            >
              <h3>Cooking Savage</h3>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {navItems.map(
              ({ label, path, badgeVariant, logged }) =>
                (logged === undefined || logged === isAuthenticated) && (
                  <Nav style={styles.navItem} key={label}>
                    <Badge style={styles.badge} bg={badgeVariant}>
                      <Nav.Link as={Link} to={path}>
                        {label}
                      </Nav.Link>
                    </Badge>
                  </Nav>
                )
            )}
            <Form
              style={styles.searchForm}
              onSubmit={handleSubmit(onSearchSubmit)}
            >
              <Form.Control
                style={styles.formControl}
                type="search"
                placeholder="Search"
                aria-label="Search"
                {...register("search", { required: true })}
              />
              <Button
                style={styles.searchButton}
                variant="outline-success"
                type="submit"
              >
                Search
              </Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#f6f6f6",
  },
  navbarBrand: {
    textDecoration: "none",
    color: "#212529",
    "&:hover": {
      textDecoration: "none",
      opacity: "0.7",
    },
  },
  navItem: {
    flexGrow: 2,
    justifyContent: "flex-end",
  },
  logo: {
    display: "inline-block",
    width: "100px",
    height: "100px",
  },
  title: {
    display: "inline-block",
    fontFamily: "Supermercado One, cursive",
    fontWeight: "bold",
  },
  offcanvasHeader: {
    backgroundColor: "#f8f9fa",
  },
  offcanvasTitle: {
    fontFamily: "Supermercado One, cursive",
  },
  badge: {
    margin: "auto",
    color: "black",

    width: "90%",
  },
  formControl: {
    marginRight: "1rem",
  },
  searchForm: { display: "flex" },
  searchButton: {
    borderColor: "#28a745",
    color: "#28a745",
  },
};
