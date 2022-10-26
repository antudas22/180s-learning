import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";

const PremiumAccess = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
      <h2>Congratulation to get {courses.title} premium access!!!</h2>
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={courses.img} />
        <Card.Body>
          <Card.Title>{courses.title}</Card.Title>
          <Card.Text>{courses.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PremiumAccess;
