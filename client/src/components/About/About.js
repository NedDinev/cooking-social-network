import Card from "react-bootstrap/Card";

export default function About() {
  return (
    <Card>
      <Card.Body className="m-auto pb-0" style={{ width: "50%" }}>
        <Card.Title className="text-center mt-4">
          <h2>About</h2>
        </Card.Title>
        <Card.Text className="mb-0 mt-4 pb-0">
          Welcome to our cooking social network website! Our community is made
          up of passionate home cooks, professional chefs, and food enthusiasts
          from all around the world. We believe that food brings people together
          and we are dedicated to creating a platform that allows our members to
          connect, share, and inspire one another through their love of cooking.
        </Card.Text>
      </Card.Body>
      <Card.Img
        className="m-auto"
        style={{ width: "50%", alignItems: "center" }}
        variant="bottom"
        src="/assets/images/illustrations/chef-panels.jpg"
      />
    </Card>
  );
}
