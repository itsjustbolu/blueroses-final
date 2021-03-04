import React, { Component } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
            <CardContainer>
              <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>ORDERS</Card.Header>
                <Card.Body>
                  <Card.Title>Place a new order </Card.Title>
                  <Card.Text>Enter a new order for customer</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>ORDERS</Card.Header>
                <Card.Body>
                  <Card.Title>View All Orders </Card.Title>
                  <Card.Text>
                    See all orders that's been placed at Blueroses
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>MENU</Card.Header>
                <Card.Body>
                  <Card.Title>View Blueroses Menu </Card.Title>
                  <Card.Text>
                    See all items that can be ordered at the restaurant
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>CUSTOMERS</Card.Header>
                <Card.Body>
                  <Card.Title>Add a new customer </Card.Title>
                  <Card.Text>
                    Add a new customer to the Blueroses Database
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>CUSTOMERS</Card.Header>
                <Card.Body>
                  <Card.Title>View All Customers </Card.Title>
                  <Card.Text>See all the customers of Blueroses</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>SUPPLIER</Card.Header>
                <Card.Body>
                  <Card.Title>Add a new supplier</Card.Title>
                  <Card.Text>Enter a new supplier to BLuerose</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>SUPPLIER</Card.Header>
                <Card.Body>
                  <Card.Title>View All Suppliers </Card.Title>
                  <Card.Text>See all suppliers of Blueroses</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>EMPLOYEE</Card.Header>
                <Card.Body>
                  <Card.Title>Add a new employee to Blueroses </Card.Title>
                  <Card.Text>
                    Enter a new Employees details into Blueroses
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", margin: "1em" }}>
                <Card.Header>EMPLOYEES</Card.Header>
                <Card.Body>
                  <Card.Title>View All Employees </Card.Title>
                  <Card.Text>See everybody that works at Blueroses</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
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
