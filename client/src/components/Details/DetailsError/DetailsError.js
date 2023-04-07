import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export default function DetailsError() {
  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <Card.Body>
          <Card.Title style={styles.title}>
            There is no such recipe found.
          </Card.Title>
          <Card.Text></Card.Text>
          <Button
            as={Link}
            to="/explore"
            variant="warning"
            style={styles.button}
          >
            Go to explore page
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5rem",
  },
  card: {
    marginTop: "5rem",
  },
  title: {
    color: "red",
  },
  button: {
    marginRight: "0.75rem",
  },
};
