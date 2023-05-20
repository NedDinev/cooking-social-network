import { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";

import Delete from "../../Delete/Delete";

import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";

import Comments from "./Comments/Comments";

import { formatUsername } from "../../../utils/userUtils";
import { formatCookingTime } from "../../../utils/recipeUtils";
import Likes from "./Likes/Likes";

export default function DetailsCard({ recipe }) {
  const [show, setShow] = useState(false);

  const { isAuthenticated, userId, username, token } = useContext(AuthContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={styles.container}>
      <Card style={{ ...styles.card }}>
        <Card.Title style={styles.cardTitle}>
          <span>{recipe.recipeName}</span>
          <div>
            <span>{formatUsername(recipe.ownerUsername)}</span>
            <Card.Img
              style={styles.userIcon}
              src="/assets/images/icons/user.png"
            />
          </div>
        </Card.Title>
        <Card.Subtitle style={styles.subtitle}>
          {recipe.dishType} - {formatCookingTime(recipe.cookingTime)}
          <Card.Img
            style={styles.clockIcon}
            src="/assets/images/icons/clock.png"
          />
        </Card.Subtitle>
        <Card.Img src={recipe.imageUrl} />
        <Card.Body>
          <ul style={styles.listGroup}>
            <Card.Title>Ingredients for {recipe.servings} servings</Card.Title>
            <li style={styles.listItem}>{recipe.ingredients}</li>
            <Card.Title>Directions</Card.Title>
            <li style={styles.listItem}>{recipe.directions}</li>
          </ul>
          {isAuthenticated && userId === recipe._ownerId && (
            <>
              <Button
                as={Link}
                to={`/details/${recipe._id}/edit`}
                variant="warning"
                style={styles.editButton}
              >
                Edit
              </Button>
              <Button onClick={handleShow} variant="danger">
                Delete
              </Button>
              <Delete handleClose={handleClose} show={show} recipe={recipe} />
            </>
          )}

          <Likes
            style={styles.likeIcon}
            isAuthenticated={isAuthenticated}
            recipe={recipe}
            userId={userId}
          />

          <Comments
            username={username}
            recipeId={recipe._id}
            token={token}
            isAuthenticated={isAuthenticated}
            userId={userId}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

const styles = {
  container: { display: "flex", justifyContent: "center" },
  card: {
    marginTop: "3rem",
    marginBottom: "5rem",
    padding: "1rem",
    borderRadius: "0.5rem",
    display: "flex",
    width: "40rem",
  },
  cardTitle: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0",
    fontWeight: "500",
  },
  subtitle: {
    marginBottom: "0.5rem",
    fontSize: "1rem",
    fontWeight: "normal",
    color: "#6c757d",
    display: "flex",
    alignItems: "center",
    // eslint-disable-next-line no-dupe-keys
    fontWeight: "500",
  },
  clockIcon: {
    width: "1.2rem",
    marginLeft: "0.5rem",
  },
  userIcon: {
    width: "2rem",
    marginRight: "0.5rem",
  },

  listGroup: {
    margin: "0",
    padding: "0",
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
  },
  listItem: {
    margin: "0.5rem 0",
  },
  editButton: {
    marginRight: "0.5rem",
  },
};
