import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export class Topbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" expand="lg">
          <Navbar.Brand href="/">BLUEROSES</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link to="/menu">Menu</Nav.Link>
              <Nav.Link to="/place-order">Place Order</Nav.Link>
              <Nav.Link to="/customers">Customers</Nav.Link>
              <Nav.Link to="/payments">Payments</Nav.Link>
              <Nav.Link to="/suppliers">Suppliers</Nav.Link>
              <Nav.Link to="/employees">Employees</Nav.Link>
              <Nav.Link to="/status">Status</Nav.Link>
              <Nav.Link to="/search">Search</Nav.Link>

              {/* <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/place-order">Place Order</Nav.Link>
              <Nav.Link href="/customers">Customers</Nav.Link>
              <Nav.Link href="/payments">Payments</Nav.Link>
              <Nav.Link href="/suppliers">Suppliers</Nav.Link>
              <Nav.Link href="/employees">Employees</Nav.Link>
              <Nav.Link href="/status">Status</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Topbar;
