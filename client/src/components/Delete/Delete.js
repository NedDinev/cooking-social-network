import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Delete(props) {
  const { handleClose, show, recipe } = props;

  const { setRecipes, recipeService } = useContext(AuthContext);

  const navigate = useNavigate();

  const onDelete = async () => {
    const deleteRecipe = await recipeService.del(recipe._id);

    setRecipes((state) => [
      ...state.filter((currRecipe) => currRecipe._id !== recipe._id),
    ]);

    navigate("/explore");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Do you want to delete recipe?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This will delete "{recipe.recipeName}"</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
