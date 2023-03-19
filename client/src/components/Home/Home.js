import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </Card.Text>
          <Button variant="success" size="lg">
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
