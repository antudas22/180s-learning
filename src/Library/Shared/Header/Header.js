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

const Header = () => {
    const {user} = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="mb-3">
      <Container>
        <Navbar.Brand><Link to='/'><h4>180s <span className="text-info fs-2 fw-bold">Learning</span></h4></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <><Link to='/'>Courses</Link></>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
                {
                    user?.uid ?
                    <>
                        <span>{user?.displayName}</span>
                        <Button variant="secondary">Log Out</Button>
                    </>
                    :
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </>
                }
            </Nav.Link>
            <Nav.Link eventKey={2}>
              {
                user?.photoURL ?
                    <Image
                style={{height: '30px'}}
                roundedCircle
                src={user?.photoURL}
              ></Image>
              :
              <FaUser></FaUser>
            }
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
