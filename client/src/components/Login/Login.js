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
    <Card style={styles.container}>
      <Card.Body style={styles.cardBody}>
        <Card.Title style={styles.title}>
          <h2>Login</h2>
        </Card.Title>

        <Form method="POST" noValidate onSubmit={handleSubmit(onLoginSubmit)}>
          <Form.Group style={styles.formGroup} controlId="email">
            <Form.Label style={styles.formLabel}>Email:</Form.Label>

            <Form.Control
              style={styles.formControl}
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />

            {errors.email?.type === "required" && (
              <Form.Text style={styles.textDanger}>
                This field is required.
              </Form.Text>
            )}
            {errors.email?.type === "pattern" && (
              <Form.Text style={styles.textDanger}>
                Please enter a valid email address.
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group style={styles.formGroup} controlId="password">
            <Form.Label style={styles.formLabel}>Password:</Form.Label>

            <Form.Control
              style={styles.formControl}
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
            />

            {errors.password?.type === "required" && (
              <Form.Text style={styles.textDanger}>
                This field is required.
              </Form.Text>
            )}
            {errors.password?.type === "maxLength" && (
              <Form.Text style={styles.textDanger}>
                Password must be shorter than 20 characters
              </Form.Text>
            )}
            {errors.password?.type === "minLength" && (
              <Form.Text style={styles.textDanger}>
                Password must be at least 6 characters.
              </Form.Text>
            )}
          </Form.Group>

          {formError && (
            <Alert variant="danger" style={styles.alert}>
              {formError}
            </Alert>
          )}

          <Button style={styles.button} variant="success" type="submit">
            Submit
          </Button>
        </Form>

        <Card.Text style={styles.text}>
          You don't have an account?
          <Link style={styles.link} to="/register">
            Register
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const styles = {
  container: {
    border: "0",
  },
  cardBody: {
    margin: "auto",
    paddingBottom: "0",
    width: "35rem",
  },
  title: {
    textAlign: "center",
    marginTop: "4rem",
  },
  formGroup: {
    margin: "0 100px",
  },
  formLabel: {
    display: "block",
    marginBottom: ".5rem",
  },
  formControl: {
    display: "block",
    width: "100%",
    padding: ".375rem .75rem",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.5",
    color: "#495057",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid #ced4da",
    borderRadius: ".25rem",
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
  },
  textDanger: {
    color: "#dc3545",
  },
  button: {
    display: "flex",
    margin: "2rem auto ",
  },
  link: {
    textDecoration: "underline",
  },
  text: { textAlign: "center" },
  alert: {
    marginBottom: "1rem",
  },
};
