import React from 'react'
import "./topnavbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


class TopNavBar extends React.Component {
  
  render() {
    return (
      <div className="topnavbar">
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
          <Navbar.Brand href="/">4 Walls For All</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto center-navs">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutus">About</Nav.Link>
              <Nav.Link href="/supportus">Support Us</Nav.Link>
              <Nav.Link href="/registerProperty">Register Property</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"><button>Donate</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default TopNavBar