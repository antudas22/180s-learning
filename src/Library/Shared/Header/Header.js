import React from "react";
import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import SideNav from "../SideNav/SideNav";
import { FaUser } from "react-icons/fa";
import './Header.css';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then( () => {})
    .catch(error => console.error(error))
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="mb-3"
    >
      <Container>
        <Navbar.Brand className="header-logo">
          <Link to="/">
            <h4>
              180s <span className="text-info fs-2 fw-bold">Learning</span>
            </h4>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto header-nav">
            <>
              <Link to="/">Courses</Link>
            </>
            <>
                <Link to="/">FAQ</Link>
            </>
            <>
                <Link>Blog</Link>
            </>
          </Nav>
          <Nav>
            <Nav.Link>
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <Button onClick={handleLogOut} variant="secondary">Log Out</Button>
                </>
              ) : (
                <>
                <Button className="user-btn" variant="light">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="user-btn" variant="light">
                  <Link to="/register">Register</Link>
                </Button>
                </>
              )}
            </Nav.Link>
            <Nav.Link eventKey={2}>
              {user?.photoURL ? (
                <Image
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <SideNav></SideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
