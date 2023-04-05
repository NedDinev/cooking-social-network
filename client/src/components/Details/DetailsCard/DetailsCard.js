import { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";

import Delete from "../../Delete/Delete";

import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";

import Comments from "./Comments/Comments";

export default function DetailsCard({ recipe }) {
  const [show, setShow] = useState(false);

  const { isAuthenticated, userId, username, token } = useContext(AuthContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex justify-content-center">
      <Card
        className="my-5 row  p-3 mb-5 bg-white rounded d-flex"
        style={{ width: "40rem" }}
      >
        <Card.Title className="mx-2 mt-1 mb-1">{recipe.recipeName}</Card.Title>
        <Card.Subtitle className="mx-2 mb-2 text-muted">
          {recipe.dishType} - {recipe.cookingTime}
        </Card.Subtitle>
        <Card.Img src={recipe.imageUrl} />
        <Card.Body>
          <ul className="list-group list-group-flush my-1 d-flex col">
            <Card.Title>Ingredients for {recipe.servings} servings</Card.Title>
            <li className="list-group-item my-2">{recipe.ingredients}</li>
            <Card.Title>Directions</Card.Title>
            <li className="list-group-item my-2">{recipe.directions}</li>
          </ul>
          {isAuthenticated && userId === recipe._ownerId && (
            <>
              <Button
                as={Link}
                to={`/details/${recipe._id}/edit`}
                variant="warning"
                className="me-3"
              >
                Edit
              </Button>
              <Button onClick={handleShow} variant="danger">
                Delete
              </Button>
              <Delete handleClose={handleClose} show={show} recipe={recipe} />
            </>
          )}

            <Comments username={username} recipeId={recipe._id} token={token} isAuthenticated={isAuthenticated} />
       
        </Card.Body>
      </Card>
    </div>
  );
}
