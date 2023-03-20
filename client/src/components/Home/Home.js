import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="d-flex flex-xl-row flex-lg-row flex-md-column flex-sm-column flex-column  m-5"
      width="100%"
    >
      <Card
        className="container m-5 border-0 "
        style={{ width: "100%", alignItems: "center" }}
      >
        <Card.Body className="pl-0">
          <Card.Title>
            <h1 className="font-heading text-warning">
              EXPLORE THE WORLD OF COOKING
            </h1>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <h3 className="font-heading text-info">Join your friends</h3>
          </Card.Subtitle>
          <Card.Text>
            Whether you're a beginner or a seasoned pro, our website offers a
            variety of features to help you improve your skills and expand your
            culinary horizons. From recipes and cooking tips to product
            recommendations and kitchen hacks, our community is always ready to
            share their knowledge.
          </Card.Text>
          <Button
            as={Link}
            className="link-dark hover-effect"
            to="/about"
            variant="success"
            size="lg"
          >
            <b>Learn more</b>
          </Button>
        </Card.Body>
      </Card>
      <div className="img-container " style={{ width: "100%" }}>
        <img
          className="img-fluid"
          src="/assets/images/illustrations/chef.png"
          alt="chef"
        />
      </div>
    </div>
  );
}
