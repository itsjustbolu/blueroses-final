import React, { useState, useEffect } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function Search() {
  const [customerList, setCustomerList] = useState([]);
  const [customerSearchTerm, setCustomerSearchTerm] = useState("");

  const [employeeList, setEmployeeList] = useState([]);
  const [employeeSearchTerm, setEmployeeSearchTerm] = useState("");

  const [menuItemsList, setMenuItemsList] = useState([]);
  const [menuSearchTerm, setMenuSearchTerm] = useState("");

  useEffect(() => {
    Axios.get("https://blueroses-final.herokuapp.com/api/customers/get").then(
      (response) => {
        setCustomerList(response.data);
      }
    );
  }, []);

  useEffect(() => {
    Axios.get("https://blueroses-final.herokuapp.com/api/employees/get").then(
      (response) => {
        setEmployeeList(response.data);
      }
    );
  }, []);

  useEffect(() => {
    Axios.get("https://blueroses-final.herokuapp.com/api/menuitems/get").then(
      (response) => {
        setMenuItemsList(response.data);
      }
    );
  }, []);

  return (
    <div className="container">
      <h1>SEARCH</h1>

      {/* ACCORDION 1 CUSTOMER SEARCH */}
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            CLICK TO SEARCH CUSTOMERS 🧑
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div>
                <h2>Customer Search</h2>
                <div>
                  <input
                    size="50"
                    type="text"
                    placeholder="Search by customer first name"
                    // value={customerSearch}
                    onChange={(e) =>
                      setCustomerSearchTerm(e.target.value.toLocaleLowerCase())
                    }
                  />

                  <p></p>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Phone</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    {customerList
                      .filter((val) => {
                        if (customerSearchTerm === "") {
                          return val;
                        } else if (
                          val.firstName
                            .toLowerCase()
                            .includes(customerSearchTerm.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((val, key) => {
                        return (
                          <tbody>
                            <tr key={key}>
                              <td>{val.firstName}</td>
                              <td>{val.lastName}</td>
                              <td>{val.address}</td>
                              <td>{val.city}</td>
                              <td>{val.state}</td>
                              <td>{val.zipCode}</td>
                              <td>{val.phoneNumber}</td>
                              <td>{val.email}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                  </Table>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <br />
      {/* ACCORDION 2 EMPLOYEE SEARCH */}
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            CLICK TO SEARCH EMPLOYEES 👨‍🍳
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div>
                <h2>Employee Search</h2>
                <div>
                  <input
                    size="50"
                    type="text"
                    placeholder="Search by employee first name"
                    onChange={(e) =>
                      setEmployeeSearchTerm(e.target.value.toLocaleLowerCase())
                    }
                  />
                  <p></p>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Title</th>
                        <th>Start Date</th>
                      </tr>
                    </thead>
                    {employeeList
                      .filter((val) => {
                        if (employeeSearchTerm === "") {
                          return val;
                        } else if (
                          val.employeeFirstName
                            .toLowerCase()
                            .includes(employeeSearchTerm.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((val, key) => {
                        return (
                          <tbody>
                            <tr key={key}>
                              <td>{val.employeeFirstName}</td>
                              <td>{val.employeeLastName}</td>
                              <td>{val.employeePhoneNumber}</td>
                              <td>{val.employeeEmailAddress}</td>
                              <td>{val.employeeTitle}</td>
                              <td>{val.employeeStartDate}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                  </Table>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <br />
      {/* ACCORDION 3 MENU SEARCH */}
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            CLICK TO SEARCH MENU 🍔
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div>
                <h2>Menu Search</h2>
                <div>
                  <input
                    sie="50"
                    type="text"
                    placeholder="Search by item name"
                    onChange={(e) =>
                      setMenuSearchTerm(e.target.value.toLocaleLowerCase())
                    }
                  />
                  <p></p>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Stock</th>
                      </tr>
                    </thead>
                    {menuItemsList
                      .filter((val) => {
                        if (menuSearchTerm === "") {
                          return val;
                        } else if (
                          val.itemName
                            .toLowerCase()
                            .includes(menuSearchTerm.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((val, key) => {
                        return (
                          <tbody>
                            <tr key={key}>
                              <td>{val.itemName}</td>
                              <td>{val.itemPrice}</td>
                              <td>{val.currentStock}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                  </Table>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <br />
      {/* ACCORDION 4 SUPPLIER SEARCH */}
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            CLICK TO SEARCH SUPPLIERS 🚚
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div>
                <h2>Menu Search</h2>
                <div>
                  <input
                    sie="50"
                    type="text"
                    placeholder="Search by item name"
                    onChange={(e) =>
                      setMenuSearchTerm(e.target.value.toLocaleLowerCase())
                    }
                  />
                  <p></p>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Stock</th>
                      </tr>
                    </thead>
                    {menuItemsList
                      .filter((val) => {
                        if (menuSearchTerm === "") {
                          return val;
                        } else if (
                          val.itemName
                            .toLowerCase()
                            .includes(menuSearchTerm.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((val, key) => {
                        return (
                          <tbody>
                            <tr key={key}>
                              <td>{val.itemName}</td>
                              <td>{val.itemPrice}</td>
                              <td>{val.currentStock}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                  </Table>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default Search;

// {customerSearch.map((val) => {
//     return (
//       <tbody>
//         <tr>
//           <td>{val.firstName}</td>
//           <td>{val.lastName}</td>
//           <td>{val.address}</td>
//           <td>{val.city}</td>
//           <td>{val.state}</td>
//           <td>{val.zipCode}</td>
//           <td>{val.phoneNumber}</td>
//           <td>{val.email}</td>
//         </tr>
//       </tbody>
//     );
//   })}
