import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Delete(props) {
  const { handleClose, show, recipeName } = props;
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Do you want to delete recipe?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This will delete "{recipeName}"</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleClose}>
            {/* TODO: add delete function */}
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
