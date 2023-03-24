import { useForm } from "react-hook-form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card className="container border-0 ">
      <Card.Body className="m-auto pb-0" style={{ width: "100%" }}>
        <Card.Title className="text-center mt-4">
          <h2>Share a Recipe</h2>
        </Card.Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row xs={1} sm={1} md={2} className="m-5">
            <Form.Group className="mb-3" controlId="recipeName">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="ex: Banitsa"
                {...register("recipeName", { required: true, minLength: 3 })}
              />
              {errors.recipeName?.type === "required" && (
                <Form.Text className="text-danger">
                  Recipe name is required
                </Form.Text>
              )}
              {errors.recipeName?.type === "minLength" && (
                <Form.Text className="text-danger">
                  Recipe name must be at least 3 characters.
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="dishType">
              <Form.Label>Dish Type</Form.Label>
              <Form.Select {...register("dishType", { required: true })}>
                <option>Select Type</option>
                <option value="Main Dish">Main Dish</option>
                <option value="Side Dish">Side Dish</option>
                <option value="Appetizer">Appetizer</option>
                <option value="Soup">Soup</option>
                <option value="Salad">Salad</option>
                <option value="Dessert">Dessert</option>
                <option value="Drink">Drink</option>
              </Form.Select>
              {errors.dishType && (
                <Form.Text className="text-danger">
                  Dish type is required
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="servings">
              <Form.Label>No. of Servings</Form.Label>
              <Form.Control
                type="number"
                placeholder="ex: 4"
                {...register("servings", {
                  required: true,
                  pattern: /^(?:[1-9]|0[1-9]|1[0-9]|20)$/,
                })}
              />
              {errors.servings?.type === "required" && (
                <Form.Text className="text-danger">
                  Number of servings is required
                </Form.Text>
              )}
              {errors.servings?.type === "pattern" && (
                <Form.Text className="text-danger">
                  Servings can be from 1 to 20
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="cookingTime">
              <Form.Label>Cooking Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="ex: 45 mins"
                {...register("cookingTime", { required: true })}
              />
              {errors.cookingTime?.type === "required" && (
                <Form.Text className="text-danger">
                  Cooking time is required
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="imageUrl">
              <Form.Label>Add Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://example.com"
                {...register("imageUrl", {
                  required: true,
                  pattern: /^https?:\/\/.+$/i,
                })}
              />
              {errors.imageUrl?.type === "required" && (
                <Form.Text className="text-danger">
                  This field is required.
                </Form.Text>
              )}
              {errors.imageUrl?.type === "pattern" && (
                <Form.Text className="text-danger">
                  Please enter a valid URL (e.g. https://example.com).
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="difficulty">
              <Form.Label>Difficulty</Form.Label>
              <Form.Select {...register("difficulty", { required: true })}>
                <option value="">Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </Form.Select>
              {errors.difficulty && (
                <Form.Text className="text-danger">
                  Please select a difficulty level.
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="ingredients">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                as="textarea"
                rows={7}
                placeholder="ex:
- 1 package dough 400 g
- 3/4 pound feta cheese 350 g
- 7 eggs
- ..."
                {...register("ingredients", { required: true })}
              />
              {errors.ingredients && (
                <Form.Text className="text-danger">
                  Please enter the ingredients.
                </Form.Text>
              )}
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
                {...register("directions", { required: true })}
              />
              {errors.directions && (
                <Form.Text className="text-danger">
                  Please enter the directions.
                </Form.Text>
              )}
            </Form.Group>
          </Row>
          <Button className="mb-5 " variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
