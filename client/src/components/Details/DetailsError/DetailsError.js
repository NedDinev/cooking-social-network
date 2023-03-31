import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

export default function DetailsError() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Card className="mt-5">
        <Card.Body>
          <Card.Title> There is no such recipe found.</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="warning" className="me-3">
            Return to explore page
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
