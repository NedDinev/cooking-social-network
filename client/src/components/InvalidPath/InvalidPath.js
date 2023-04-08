import React from "react";
import { Card } from "react-bootstrap";

export default function InvalidPath() {
  return (
    <div style={styles.noResults}>
      <Card style={styles.card}>
        <Card.Body>
          <Card.Title style={styles.cardTitle}>404 - PAGE NOT FOUND</Card.Title>
          <Card.Img
            style={styles.cardImg}
            src="/assets/images/illustrations/donut.png"
          />
        </Card.Body>
      </Card>
    </div>
  );
}

const styles = {
  noResults: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "2rem",
  },
  card: {
    border: "none",
  },
  cardTitle: {
    color: "red",
    fontSize: "2.5rem",
  },
  cardImg: {
    display: "block",
    margin: "auto",
    width: "20%",
    alignItems: "center",
  },
};
