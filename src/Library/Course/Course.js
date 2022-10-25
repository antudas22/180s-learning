import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Course.css'
import { FaChessQueen } from "react-icons/fa";

const Course = ({ course }) => {
  const { id, title, img, description } = course;
  return (
    <div className="course">
      <img style={{width: '250px', height: '280px'}} src={img} alt=""></img>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <Link>
        <Button variant="primary">Get Premium Access <FaChessQueen></FaChessQueen> </Button>
        </Link>
      </div>
    </div>
  );
};

export default Course;
