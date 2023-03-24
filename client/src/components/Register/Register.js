import { useState } from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function Register() {
  const [formError, setFormError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setFormError("Passwords do not match.");
    } else {
      // Submit form data to server
      console.log(data);
    }
  };

  return (
    <Card className="container border-0 ">
      <Card.Body className="m-auto pb-0" style={{ width: "50%" }}>
        <Card.Title className="text-center mt-4">
          <h2>Register</h2>
        </Card.Title>

        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              {...register("username", { required: true, minLength: 3 })}
            />
            {errors.username?.type === "required" && (
              <Form.Text className="text-danger">
                This field is required.
              </Form.Text>
            )}
            {errors.username?.type === "minLength" && (
              <Form.Text className="text-danger">
                Username must be at least 3 characters.
              </Form.Text>
            )}
          </Form.Group>

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

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              {...register("confirmPassword", { required: true, minLength: 6 })}
            />
            {errors.confirmPassword?.type === "required" && (
              <Form.Text className="text-danger">
                This field is required.
              </Form.Text>
            )}
            {errors.confirmPassword?.type === "minLength" && (
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
          You already have an account? <Link to="/login">Login</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
