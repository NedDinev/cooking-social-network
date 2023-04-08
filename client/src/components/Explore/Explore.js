import { useContext } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AuthContext } from "../../contexts/AuthContext";

import RecipeCard from "./RecipeCard/RecipeCard";

export default function Explore() {
  const { recipes } = useContext(AuthContext);

  return (
    <Row xs={1} sm={1} md={2} lg={3} style={styles.row}>
      {Array.from(recipes).map((recipe) => (
        <Col key={recipe._id}>
          <RecipeCard recipe={recipe} />
        </Col>
      ))}
    </Row>
  );
}

const styles = {
  row: {
    alignItems: "center",
    overflowX: "hidden",
    margin: "0",
  },
};
