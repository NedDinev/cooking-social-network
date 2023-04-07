import Card from "react-bootstrap/Card";

export default function About() {
  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <Card.Body style={styles.cardBody}>
          <Card.Title style={styles.title}>
            <h2>About</h2>
          </Card.Title>
          <Card.Text style={styles.text}>
            Welcome to our cooking social network website! Our community is made
            up of passionate home cooks, professional chefs, and food
            enthusiasts from all around the world. We believe that food brings
            people together and we are dedicated to creating a platform that
            allows our members to connect, share, and inspire one another
            through their love of cooking.
          </Card.Text>
        </Card.Body>
        <Card.Img
          style={styles.image}
          variant="bottom"
          src="/assets/images/illustrations/chef-panels.jpg"
        />
      </Card>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    border: "none",
    width: "50%",
  },
  cardBody: {
    margin: "auto",
    paddingBottom: 0,
  },
  title: {
    textAlign: "center",
    marginTop: "1rem",
  },
  text: {
    marginBottom: 0,
    marginTop: "2rem",
  },
  image: {
    margin: "auto",
    width: "60%",
  },
};
