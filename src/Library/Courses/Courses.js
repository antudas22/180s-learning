import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import './Courses.css';

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <h2>Here is Courses</h2>
      <div className="course-container">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
