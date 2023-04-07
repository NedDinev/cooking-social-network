import { useForm } from "react-hook-form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { recipeId } = useParams();

  const { getRecipe, setRecipes, token, recipeService } =
    useContext(AuthContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    // fetch data
    try {
      const dataFetch = async () => {
        const data = await getRecipe(recipeId);

        // set state when the data received
        setRecipe(data);
      };

      dataFetch();
    } catch (error) {
      setRecipe({});
    }
  }, [getRecipe, recipeId]);

  useEffect(() => {
    // sets inputs default values
    if (recipe) {
      reset(recipe);
      setIsLoading(false);
    }
  }, [recipe, reset]);

  const onEditRecipeSubmit = async (data) => {
    data._id = recipeId;
    const editRecipe = await recipeService.edit(data, token);

    setRecipes((state) => [
      ...state.map((foundRecipe) => {
        if (foundRecipe._id === recipeId) {
          return (foundRecipe = editRecipe);
        }
        return foundRecipe;
      }),
    ]);

    navigate("/explore");
  };

  return (
    <Card style={styles.card}>
      <Card.Body style={styles.cardBody}>
        <Card.Title style={styles.cardTitle}>
          <h2>Edit Recipe</h2>
        </Card.Title>

        {!isLoading && (
          <Form method="POST" onSubmit={handleSubmit(onEditRecipeSubmit)}>
            <Row xs={1} sm={1} md={2} style={styles.row}>
              <Form.Group style={styles.formGroup} controlId="recipeName">
                <Form.Label style={styles.formLabel}>Recipe Name</Form.Label>
                <Form.Control
                  style={styles.formControl}
                  type="text"
                  placeholder="ex: Banitsa"
                  {...register("recipeName", { required: true, minLength: 3 })}
                />
                {errors.recipeName?.type === "required" && (
                  <Form.Text style={styles.formText}>
                    Recipe name is required
                  </Form.Text>
                )}
                {errors.recipeName?.type === "minLength" && (
                  <Form.Text style={styles.formText}>
                    Recipe name must be at least 3 characters.
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group style={styles.formGroup} controlId="dishType">
                <Form.Label style={styles.formLabel}>Dish Type</Form.Label>
                <Form.Select {...register("dishType", { required: true })}>
                  <option value="">Select Type</option>
                  <option value="Main Dish">Main Dish</option>
                  <option value="Side Dish">Side Dish</option>
                  <option value="Appetizer">Appetizer</option>
                  <option value="Soup">Soup</option>
                  <option value="Salad">Salad</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Drink">Drink</option>
                </Form.Select>
                {errors.dishType && (
                  <Form.Text style={styles.formText}>
                    Dish type is required
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group style={styles.formGroup} controlId="servings">
                <Form.Label style={styles.formLabel}>
                  No. of Servings
                </Form.Label>
                <Form.Control
                  style={styles.formControl}
                  type="number"
                  placeholder="ex: 4"
                  {...register("servings", {
                    required: true,
                    pattern: /^(?:[1-9]|0[1-9]|1[0-9]|20)$/,
                  })}
                />
                {errors.servings?.type === "required" && (
                  <Form.Text style={styles.formText}>
                    Number of servings is required
                  </Form.Text>
                )}
                {errors.servings?.type === "pattern" && (
                  <Form.Text style={styles.formText}>
                    Servings can be from 1 to 20
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group style={styles.formGroup} controlId="cookingTime">
                <Form.Label style={styles.formLabel}>Cooking Time</Form.Label>

                <Form.Control
                  style={styles.formControl}
                  type="text"
                  placeholder="ex: 45 mins"
                  {...register("cookingTime", { required: true })}
                />
                {errors.cookingTime?.type === "required" && (
                  <Form.Text style={styles.formText}>
                    Cooking time is required
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group style={styles.formGroup} controlId="imageUrl">
                <Form.Label style={styles.formLabel}>Add Image</Form.Label>
                <Form.Control
                  style={styles.formControl}
                  type="text"
                  placeholder="https://example.com"
                  {...register("imageUrl", {
                    required: true,
                    pattern: /^https?:\/\/.+$/i,
                  })}
                />
                {errors.imageUrl?.type === "required" && (
                  <Form.Text style={styles.formText}>
                    This field is required.
                  </Form.Text>
                )}
                {errors.imageUrl?.type === "pattern" && (
                  <Form.Text style={styles.formText}>
                    Please enter a valid URL (e.g. https://example.com).
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group style={styles.formGroup} controlId="difficulty">
                <Form.Label style={styles.formLabel}>Difficulty</Form.Label>
                <Form.Select {...register("difficulty", { required: true })}>
                  <option value="">Select Difficulty</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </Form.Select>
                {errors.difficulty && (
                  <Form.Text style={styles.formText}>
                    Please select a difficulty level.
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group style={styles.formGroup} controlId="ingredients">
                <Form.Label style={styles.formLabel}>Ingredients</Form.Label>
                <Form.Control
                  style={styles.formControl}
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
                  <Form.Text style={styles.formText}>
                    Please enter the ingredients.
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group style={styles.formGroup} controlId="directions">
                <Form.Label style={styles.formLabel}>Directions</Form.Label>
                <Form.Control
                  style={styles.formControl}
                  as="textarea"
                  rows={7}
                  placeholder="ex:
                1. Preheat oven to 350 degrees, brush melted butter all over bottom amd sides of baking pan.
                2. Mix salt, cheese and milk and eggsin a bowl , combine and stir ingredients well.
                3. ..."
                  {...register("directions", { required: true })}
                />
                {errors.directions && (
                  <Form.Text style={styles.formText}>
                    Please enter the directions.
                  </Form.Text>
                )}
              </Form.Group>
            </Row>
            <Button style={styles.submitButton} variant="success" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Card.Body>
    </Card>
  );
}

const styles = {
  card: {
    display: "flex",
    justifyContent: "center",
    border: "none",
    maxWidth: "1140px",
    marginRight: "auto",
    marginLeft: "auto",
    paddingRight: "40px",
    paddingLeft: "40px",
  },
  cardBody: { width: "100%" },
  cardTitle: { marginTop: "1rem", marginBottom: "2rem", textAlign: "center" },
  formGroup: { marginBottom: "1rem" },
  formLabel: { marginBottom: "0.5rem" },
  formControl: { marginBottom: "0.5rem" },
  formText: { display: "block", color: "#f44336" },
  submitButton: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "600",
  },
  row: { margin: "0.5rem" },
};
