import Form from "react-bootstrap/Form";

export default function FormInput(props) {
  const { errorMessage, label, onChange, controlId, id, ...inputProps } = props;
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...inputProps} onChange={onChange} required />
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
}
