import { Button, Card, Col, Row } from "react-bootstrap";
import RecipeCard from "../Explore/RecipeCard/RecipeCard";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { formatUsername } from "../../utils/userUtils";

export default function Profile() {
  const { recipes, username } = useContext(AuthContext);

  const userRecipes = recipes.filter(
    (recipe) => recipe.ownerUsername === username
  );

  return (
    <>
      <img
        style={styles.userIcon}
        src="/assets/images/icons/user.png"
        alt="User Icon"
      />

      <h2 style={styles.header}>{formatUsername(username)}'s recipes </h2>
      {userRecipes.length !== 0 ? (
        <>
          <Row xs={1} sm={1} md={2} lg={3} style={styles.row}>
            {Array.from(userRecipes).map((recipe) => (
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
                You don't have any recipes yet.
              </Card.Title>
              <Card.Img
                style={styles.cardImg}
                src="/assets/images/icons/empty-plate.png"
              />
              <Button
                as={Link}
                to="/create"
                variant="success"
                style={styles.button}
              >
                Create a recipe
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
}

const styles = {
  userIcon: {
    width: "5rem",
    display: "flex",
    margin: "2rem auto 0.5rem auto",
  },
  header: {
    textAlign: "center",
    marginTop: "0",
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
  },
  card: {
    border: "none",
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
