import { useContext } from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { AuthContext } from "../../contexts/AuthContext";

export default function Register() {
  const { onRegisterSubmit, formError } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Card style={styles.container}>
      <Card.Body style={styles.body}>
        <Card.Title style={styles.title}>
          <h2>Register</h2>
        </Card.Title>

        <Form
          noValidate
          method="POST"
          onSubmit={handleSubmit(onRegisterSubmit)}
        >
          <Form.Group style={styles.formGroup} controlId="username">
            <Form.Label style={styles.label}>Username:</Form.Label>
            <Form.Control
              style={styles.input}
              type="text"
              {...register("username", { required: true, minLength: 3 })}
            />
            {errors.username?.type === "required" && (
              <Form.Text style={styles.errorText}>
                This field is required.
              </Form.Text>
            )}
            {errors.username?.type === "minLength" && (
              <Form.Text style={styles.errorText}>
                Username must be at least 3 characters.
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group style={styles.formGroup} controlId="email">
            <Form.Label style={styles.label}>Email:</Form.Label>
            <Form.Control
              style={styles.input}
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email?.type === "required" && (
              <Form.Text style={styles.errorText}>
                This field is required.
              </Form.Text>
            )}
            {errors.email?.type === "pattern" && (
              <Form.Text style={styles.errorText}>
                Please enter a valid email address.
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group style={styles.formGroup} controlId="password">
            <Form.Label style={styles.label}>Password:</Form.Label>
            <Form.Control
              style={styles.input}
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
            />
            {errors.password?.type === "required" && (
              <Form.Text style={styles.errorText}>
                This field is required.
              </Form.Text>
            )}
            {errors.password?.type === "maxLength" && (
              <Form.Text style={styles.errorText}>
                Password must be shorter than 20 characters
              </Form.Text>
            )}
            {errors.password?.type === "minLength" && (
              <Form.Text style={styles.errorText}>
                Password must be at least 6 characters.
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group style={styles.formGroup} controlId="confirmPassword">
            <Form.Label style={styles.label}>Confirm Password:</Form.Label>
            <Form.Control
              style={styles.input}
              type="password"
              {...register("confirmPassword", { required: true, minLength: 6 })}
            />
            {errors.confirmPassword?.type === "required" && (
              <Form.Text style={styles.errorText}>
                This field is required.
              </Form.Text>
            )}
            {errors.confirmPassword?.type === "minLength" && (
              <Form.Text style={styles.errorText}>
                Password must be at least 6 characters.
              </Form.Text>
            )}
          </Form.Group>

          {formError && <Alert variant="danger">{formError}</Alert>}

          <Button style={styles.button} variant="success" type="submit">
            Submit
          </Button>
        </Form>
        <Card.Text style={styles.text}>
          You already have an account? <Link to="/login">Login</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const styles = {
  container: {
    border: 0,
  },
  body: {
    margin: "auto",
    paddingBottom: 0,
   
  },
  title: {
    textAlign: "center",
    marginTop: "3rem",
  },
  text: {
    marginBottom: "3rem",
    textAlign: "center",
  },
  formGroup: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
  },
  input: {
    display: "block",
    width: "25rem",
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    color: "#495057",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid #ced4da",
    borderRadius: "0.25rem",
    transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
  },
  errorText: {
    color: "#dc3545",
    marginBottom: "0.5rem",
  },
  button: { margin: "0.5rem auto", display: "flex" },
};
