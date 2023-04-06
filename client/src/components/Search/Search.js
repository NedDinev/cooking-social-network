import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Button, Card, Col, Row } from "react-bootstrap";
import RecipeCard from "../Explore/RecipeCard/RecipeCard";

export default function Search() {
  const { recipeName } = useParams();
  const { recipes } = useContext(AuthContext);

  const searchRecipes = recipes.filter((recipe) =>
    recipe.recipeName.toLowerCase().includes(recipeName.toLowerCase())
  );

  return (
    <>
      {searchRecipes.length !== 0 ? (
        <>
          <h2 className="text-center mt-3">Results for "{recipeName}"</h2>
          <Row xs={1} sm={1} md={2} lg={3} className="g-1 mx-0">
            {Array.from(searchRecipes).map((recipe) => (
              <Col key={recipe._id}>
                <RecipeCard recipe={recipe} />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <div className="d-flex justify-content-center align-items-center text-center mt-5">
          <Card className="mt-5">
            <Card.Body>
              <Card.Title className="text-danger">
                No results for "{recipeName}"
              </Card.Title>
              <Card.Img
                className="m-auto"
                style={{ width: "40%", alignItems: "center" }}
                src="/assets/images/icons/empty-plate.png"
              />
              <Button
                as={Link}
                to="/explore"
                variant="warning"
                className="mt-3"
              >
                Go to explore page
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
}
