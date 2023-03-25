import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function Login() {
  const { onLoginSubmit, formError } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Card className="container border-0 ">
      <Card.Body className="m-auto pb-0" style={{ width: "50%" }}>
        <Card.Title className="text-center mt-4">
          <h2>Login</h2>
        </Card.Title>

        <Form method="POST" noValidate onSubmit={handleSubmit(onLoginSubmit)}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email?.type === "required" && (
              <Form.Text className="text-danger">
                This field is required.
              </Form.Text>
            )}
            {errors.email?.type === "pattern" && (
              <Form.Text className="text-danger">
                Please enter a valid email address.
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
            />
            {errors.password?.type === "required" && (
              <Form.Text className="text-danger">
                This field is required.
              </Form.Text>
            )}
            {errors.password?.type === "maxLength" && (
              <Form.Text className="text-danger">
                Password must be shorter than 20 characters
              </Form.Text>
            )}
            {errors.password?.type === "minLength" && (
              <Form.Text className="text-danger">
                Password must be at least 6 characters.
              </Form.Text>
            )}
          </Form.Group>

          {formError && <Alert variant="danger">{formError}</Alert>}

          <Button className="mb-2" variant="success" type="submit">
            Submit
          </Button>
        </Form>
        <Card.Text className="mb-3">
          You don't have an account? <Link to="/register">Register</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
