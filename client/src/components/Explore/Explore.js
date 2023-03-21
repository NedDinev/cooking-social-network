import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import RecipeCard from "./RecipeCard/RecipeCard";

export default function Explore() {
  return (
    <Row xs={1} sm={1} md={2} lg={3} className="g-3 mx-5">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
          <RecipeCard />
        </Col>
      ))}
    </Row>
  );
}
