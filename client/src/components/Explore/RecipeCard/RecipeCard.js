import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <Card className="m-5 shadow p-3 mb-5 bg-white rounded">
      <Card.Img className="card-img-top" variant="top" src={recipe.imageUrl} />
      <Card.Body>
        <Card.Title>{`${recipe.recipeName}`}</Card.Title>
        <Card.Text>
          Type: {recipe.dishType}
          <br />
          Difficulty: {recipe.difficulty}
        </Card.Text>
        <Button as={Link} to={`/details/${recipe._id}`} variant="success">
          View details
        </Button>
      </Card.Body>
    </Card>
  );
}
