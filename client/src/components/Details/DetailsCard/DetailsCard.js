import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

import React, { useState } from "react";
import Delete from "../../Delete/Delete";
import { Link } from "react-router-dom";

export default function DetailsCard({ recipe }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Card className="my-5" style={{ width: "30rem" }}>
        <Card.Title>{recipe.recipeName}</Card.Title>
        <Card.Subtitle className=" text-muted">
          {recipe.dishType} - {recipe.cookingTime}
        </Card.Subtitle>
        <Card.Img src={recipe.imageUrl} />
        <Card.Body>
          <ul className="list-group list-group-flush my-1">
            <Card.Title>Ingredients for {recipe.servings} servings</Card.Title>
            <li className="list-group-item my-2">{recipe.ingredients}</li>
            <Card.Title>Directions</Card.Title>
            <li className="list-group-item my-2">{recipe.directions}</li>
          </ul>
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
          <Delete
            handleClose={handleClose}
            show={show}
            recipeName={recipe.recipeName}
          />
        </Card.Body>
      </Card>
    </div>
  );
}
