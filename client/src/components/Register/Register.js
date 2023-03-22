import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Link } from "react-router-dom";

import { useState } from "react";
import FormInput from "./FormInput/FormInput";

export default function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      console.log(values);
      //TODO: register, login and redirect to explore page
    }

    setValidated(true);
  };

  const inputs = [
    {
      id: 1,
      controlId: "username",
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:
        "Username should be 3-16 characters and should not include special characters",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      controlId: "email",
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "It should be a valid email address",
      required: true,
    },
    {
      id: 3,
      controlId: "password",
      name: "password",
      type: "text",
      placeholder: "Password",
      label: "Password",
      errorMessage:
        "Password must contain minimum eight characters, one number and one special character:",
      pattern: "^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
      required: true,
    },
    {
      id: 4,
      controlId: "confirmPassword",
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Passwords don't match",
      pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Card className="container border-0 ">
      <Card.Body className="m-auto pb-0" style={{ width: "50%" }}>
        <Card.Title className="text-center mt-4">
          <h2>Register</h2>
        </Card.Title>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <Button className="mb-3" variant="success" type="submit">
            Submit
          </Button>
        </Form>

        <Card.Text>
          You already have an account? <Link to="/login">Login</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
