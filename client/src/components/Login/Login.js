import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Card className="container border-0 ">
      <Card.Body className="m-auto pb-0" style={{ width: "50%" }}>
        <Card.Title className="text-center mt-4">
          <h2>Login</h2>
        </Card.Title>
        <Card.Text className="mb-0 mt-4 pb-0">
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button className="mb-3" variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Text>
        <Card.Text>
          Don’t you have an account? <Link to="/register">Sign up</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
