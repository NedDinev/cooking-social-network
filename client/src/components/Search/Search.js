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
          <h2 style={styles.header}>Results for "{recipeName}"</h2>
          <Row xs={1} sm={1} md={2} lg={3} style={styles.row}>
            {Array.from(searchRecipes).map((recipe) => (
              <Col key={recipe._id}>
                <RecipeCard recipe={recipe} />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <div style={styles.noResults}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>
                No results for "{recipeName}"
              </Card.Title>
              <Card.Img
                style={styles.cardImg}
                src="/assets/images/icons/empty-plate.png"
              />
              <Button
                as={Link}
                to="/explore"
                variant="warning"
                style={styles.button}
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
const styles = {
  header: {
    textAlign: "center",
    marginTop: "3rem",
  },
  row: {
    marginRight: "-0.5rem",
    marginLeft: "-0.5rem",
  },

  noResults: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "5rem",
  },
  card: {
    marginTop: "5rem",
  },
  cardTitle: {
    color: "red",
  },
  cardImg: {
    display: "block",
    margin: "auto",
    width: "50%",
    alignItems: "center",
  },
  button: {
    marginTop: "2rem",
  },
};
