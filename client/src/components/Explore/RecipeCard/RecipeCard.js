import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { formatCookingTime } from "../../../utils/recipeUtils";

export default function RecipeCard({ recipe }) {
  return (
    <Card style={styles.card}>
      <Card.Img style={styles.image} variant="top" src={recipe.imageUrl} />
      <Card.Body>
        <Card.Title style={styles.title}>
          {recipe.recipeName} - {formatCookingTime(recipe.cookingTime)}
        </Card.Title>
        <Card.Text style={styles.text}>
          Type: {recipe.dishType}
          <br />
          Difficulty: {recipe.difficulty}
        </Card.Text>
        <Button
          as={Link}
          to={`/details/${recipe._id}`}
          variant="success"
          style={styles.button}
        >
          View details
        </Button>
      </Card.Body>
    </Card>
  );
}

const styles = {
  card: {
    margin: "1.25rem",
    padding: ".75rem",
    marginBottom: "3rem",
    backgroundColor: "white",
    borderRadius: "0.5rem",
    boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
  },
  image: {
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
    objectFit: "cover",
    height: "10rem",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.25rem",
    marginBottom: "0.75rem",
  },
  text: {
    fontSize: "1rem",
  },
  button: {
    marginTop: "0.5rem",
  },
};
