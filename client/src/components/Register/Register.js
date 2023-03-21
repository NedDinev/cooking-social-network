import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Card className="container border-0 ">
      <Card.Body className="m-auto pb-0" style={{ width: "50%" }}>
        <Card.Title className="text-center mt-4">
          <h2>Register</h2>
        </Card.Title>
        <Card.Text className="mb-0 mt-4 pb-0">
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control type="password" placeholder="Repeat password" />
            </Form.Group>

            <Button className="mb-5" variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Text>
        <Card.Text>
          You already have an account? <Link to="/login">Login</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
