import React, { Component } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
  justify-content: center;
`;

export class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h2>Blueroses Employee Portal</h2>

            <p>
              Welcome to the blueroses restaurant employee portal page. Here you
              can manage all aspects of the business, placing orders, adding and
              deleting customers as well as their payment information, add
              suppliers and menu items etc.
            </p>
            <CardContainer>
              <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>ORDERS</Card.Header>
                <Card.Body>
                  <Card.Title>Place a new order </Card.Title>
                  <Card.Text>Enter a new order for customer</Card.Text>

                  <Link to="/place-order">
                    <Button variant="primary">PLACE ORDER</Button>
                  </Link>
                </Card.Body>
              </Card>
              {/* 
              <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>ORDERS</Card.Header>
                <Card.Body>
                  <Card.Title>View All Orders </Card.Title>
                  <Card.Text>
                    See all orders that's been placed at Blueroses
                  </Card.Text>
                  <Link to="/place-order">
                    <Button variant="primary">VIEW</Button>
                  </Link>
                </Card.Body>
              </Card> */}

              <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>MENU</Card.Header>
                <Card.Body>
                  <Card.Title>View Blueroses Menu </Card.Title>
                  <Card.Text>
                    See all items that can be ordered at the restaurant
                  </Card.Text>
                  <Link to="/menu">
                    <Button variant="primary">VIEW MENU</Button>
                  </Link>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>CUSTOMERS</Card.Header>
                <Card.Body>
                  <Card.Title>Add a new customer </Card.Title>
                  <Card.Text>
                    Add a new customer to the Blueroses Database
                  </Card.Text>
                  <Link to="/customers">
                    <Button variant="primary">ADD CUSTOMER</Button>
                  </Link>
                </Card.Body>
              </Card>

              {/* <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>CUSTOMERS</Card.Header>
                <Card.Body>
                  <Card.Title>View All Customers </Card.Title>
                  <Card.Text>See all the customers of Blueroses</Card.Text>
                  <Link to="/customers">
                    <Button variant="primary">VIEW</Button>
                  </Link>
                </Card.Body>
              </Card> */}

              <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>SUPPLIER</Card.Header>
                <Card.Body>
                  <Card.Title>Add a new supplier</Card.Title>
                  <Card.Text>Enter a new supplier to BLuerose</Card.Text>
                  <Link to="/suppliers">
                    <Button variant="primary">ADD SUPPLIER</Button>
                  </Link>
                </Card.Body>
              </Card>

              {/* <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>SUPPLIER</Card.Header>
                <Card.Body>
                  <Card.Title>View All Suppliers </Card.Title>
                  <Card.Text>See all suppliers of Blueroses</Card.Text>
                  <Link to="/suppliers">
                    <Button variant="primary">VIEW ALL</Button>
                  </Link>
                </Card.Body>
              </Card> */}

              <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>EMPLOYEE</Card.Header>
                <Card.Body>
                  <Card.Title>Add a new employee to Blueroses </Card.Title>
                  <Card.Text>
                    Enter a new Employees details into Blueroses
                  </Card.Text>
                  <Link to="/employees">
                    <Button variant="primary">ADD EMPLOYEE</Button>
                  </Link>
                </Card.Body>
              </Card>

              {/* <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>EMPLOYEES</Card.Header>
                <Card.Body>
                  <Card.Title>View All Employees </Card.Title>
                  <Card.Text>See everybody that works at Blueroses</Card.Text>
                  <Link to="/employees">
                    <Button variant="primary">EMPLOYEES</Button>
                  </Link>
                </Card.Body>
              </Card> */}
            </CardContainer>
          </Col>
        </Row>
      </Container>

      //   <div class="container">
      //     <h1>BLUEROSES EMPLOYEE PORTAL</h1>

      //     <p>Great Food, Amazing Ambience.</p>

      //     <p>
      //       Please navigate the portions of the website using the navbar or links
      //       below
      //     </p>

      //     <ul>
      //       <li>
      //         <a href="/place-order">Place an order</a>
      //       </li>
      //       {/* <li>
      //         <a href="orderstatus.html">Get order status</a>
      //       </li>
      //       <li>
      //         <a href="orderdetails.html">Get order details</a>
      //       </li> */}
      //       <li>
      //         <a href="/customers">Add a customer</a>
      //       </li>
      //       <li>
      //         <a href="/suppliers">Add a supplier</a>
      //       </li>
      //       <li>
      //         <a href="employees">Add an employee</a>
      //       </li>
      //       <li>
      //         <a href="/menu">View the menu or add items to menu</a>
      //       </li>
      //       <li>
      //         <a href="/payments">Update or delete payment information</a>
      //       </li>
      //     </ul>
      //   </div>
    );
  }
}

export default Home;
