import { useContext } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AuthContext } from "../../contexts/AuthContext";

import RecipeCard from "./RecipeCard/RecipeCard";
import { Card } from "react-bootstrap";

export default function Explore() {
  const { recipes } = useContext(AuthContext);
  return (
    <>
      {recipes.length !== 0 ? (
        <Row xs={1} sm={1} md={2} lg={3} style={styles.row}>
          {Array.from(recipes).map((recipe) => (
            <Col key={recipe._id}>
              <RecipeCard recipe={recipe} />
            </Col>
          ))}
        </Row>
      ) : (
        <div style={styles.noResults}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>
                There's no recipes yet
              </Card.Title>
              <Card.Img
                style={styles.cardImg}
                src="/assets/images/icons/empty-plate.png"
              />
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
    alignItems: "center",
    overflowX: "hidden",
    margin: "0",
  },

  noResults: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "5rem",
  },
  card: {
    marginTop: "1rem",
    border: "none",
  },
  cardTitle: {
    color: "red",
    fontSize: "1.5rem",
  },
  cardImg: {
    display: "block",
    margin: "auto",
    width: "60%",
    alignItems: "center",
  },
};
