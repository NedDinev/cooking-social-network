import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Row style={styles.row}>
      <Col xl={6} lg={12} md={12} sm={12} xs={12}>
        <Card style={styles.cardContainer}>
          <Card.Body>
            <Card.Title>
              <h1 style={styles.cardTitle}>EXPLORE THE WORLD OF COOKING</h1>
            </Card.Title>

            <Card.Subtitle>
              <h3 style={styles.cardSubtitle}>Join your friends</h3>
            </Card.Subtitle>

            <Card.Text>
              Whether you're a beginner or a seasoned pro, our website offers a
              variety of features to help you improve your skills and expand
              your culinary horizons. From recipes and cooking tips to product
              recommendations and kitchen hacks, our community is always ready
              to share their knowledge.
            </Card.Text>

            <Button as={Link} to="/about" variant="success" size="lg">
              <b>Learn more</b>
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col xl={6} lg={12} md={12} sm={12} xs={12}>
        <div style={styles.imgContainer}>
          <img
            style={styles.img}
            src="/assets/images/illustrations/chef.png"
            alt="chef"
          />
        </div>
      </Col>
    </Row>
  );
}

const styles = {
  row: {
    alignItems: "center",
    overflowX: "hidden",
    margin: "0",
  },
  cardContainer: {
    width: "100%",
    alignItems: "center",
    margin: "0",
    padding: "2rem",
    border: "0",
  },
  cardTitle: {
    fontFamily: "Oswald, sans-serif",
    color: "#f06f4e",
  },
  cardSubtitle: {
    fontFamily: "Oswald, sans-serif",
    color: "#6d6479",
  },
  imgContainer: {
    width: "100%",
    textAlign: "center",
    padding: "0",
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
};
