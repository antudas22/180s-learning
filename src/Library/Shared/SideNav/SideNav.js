import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="text-center">
      <h2>All Categories</h2>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
              <Link to={`/category/${category.id}`}>
                <Button className="w-100" variant="outline-primary" size="lg">
                  {category.name}
                </Button>
              </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
