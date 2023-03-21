import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function RecipeCard() {
  return (
    <Card className="m-5">
      <Card.Img
        variant="top"
        src="https://d1sve9khgp0cw0.cloudfront.net/wp-content/uploads/2022/07/TnuIO7SFeYV03YQCpucl-I9Rdxo.jpg"
      />
      <Card.Body>
        <Card.Title>Dish Name</Card.Title>
        <Card.Text>
          Type: Main Dish Cooking time: 15 mins Difficulty: Easy
        </Card.Text>
        <Button variant="success">View details</Button>
      </Card.Body>
    </Card>
  );
}
