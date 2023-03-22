import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Create() {
  return (
    <Card className="container border-0 ">
      <Card.Body className="m-auto pb-0" style={{ width: "50%" }}>
        <Card.Title className="text-center mt-4">
          <h2>Share a Recipe</h2>
        </Card.Title>
        <Card.Text className="mb-0 mt-4 pb-0">
          <Form>
            <Form.Group className="mb-3" controlId="recipeName">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control type="text" placeholder="ex: Banitsa" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dishType">
              <Form.Label>Dish Type</Form.Label>
              <Form.Select>
                <option>Select Type</option>
                <option value="Main Dish">Main Dish</option>
                <option value="Side Dish">Side Dish</option>
                <option value="Appetizer">Appetizer</option>
                <option value="Soup">Soup</option>
                <option value="Salad">Salad</option>
                <option value="Dessert">Dessert</option>
                <option value="Drink">Drink</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="servings">
              <Form.Label>No. of Servings</Form.Label>
              <Form.Control type="number" placeholder="ex: 4" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="cookingTime">
              <Form.Label>Cooking Time</Form.Label>
              <Form.Control type="text" placeholder="ex: 45 mins" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="difficulty">
              <Form.Label>Difficulty</Form.Label>
              <Form.Select>
                <option>Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ingredients">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="ex:
- 1 package dough 400 g
- 3/4 pound feta cheese 350 g
- 7 eggs
- ..."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="directions">
              <Form.Label>Directions</Form.Label>
              <Form.Control
                as="textarea"
                rows={7}
                placeholder="ex:
                1. Preheat oven to 350 degrees, brush melted butter all over bottom amd sides of baking pan.
                2. Mix salt, cheese and milk and eggsin a bowl , combine and stir ingredients well.
                3. ..."
              />
            </Form.Group>

            <Button className="mb-5" variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
