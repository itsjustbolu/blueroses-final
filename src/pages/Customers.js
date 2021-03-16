import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export function Customers() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState(0);

  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState(0);
  const [newAddress, setNewAddress] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newState, setNewState] = useState("");
  const [newZipCode, setNewZipCode] = useState(0);

  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    Axios.get("https://blueroses-final.herokuapp.com/api/customers/get").then(
      (response) => {
        setCustomerList(response.data);
      }
    );
  }, []);

  const submitCustomer = (event) => {
    event.preventDefault();
    Axios.post("https://blueroses-final.herokuapp.com/api/customers/post", {
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      state: state,
      zipCode: zipCode,
      phoneNumber: phoneNumber,
      email: email,
    }).then(() => {
      alert("Successfully added customer");
    });
  };

  const updateCustomer = (customerId) => {
    Axios.put("https://blueroses-final.herokuapp.com/api/customers/update", {
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
      phoneNumber: newPhoneNumber,
      address: newAddress,
      city: newCity,
      state: newState,
      zipCode: newZipCode,
      customerId: customerId,
    }).then((response) => {
      setCustomerList(
        customerList.map((val) => {
          return val.customerId === customerId
            ? {
                customerId: val.customerId,
                firstName: newFirstName,
                lastName: newLastName,
                email: newEmail,
                phoneNumber: newPhoneNumber,
                address: newAddress,
                city: newCity,
                state: newState,
                zipCode: newZipCode,
              }
            : val;
        })
      );
    });
  };

  const deleteCustomer = (customerId) => {
    console.log("item deleted");
    Axios.delete(
      `https://blueroses-final.herokuapp.com/api/customers/delete/${customerId}`
    ).then((response) => {
      setCustomerList(
        customerList.filter((val) => {
          return val.customerId !== customerId;
        })
      );
    });
  };

  return (
    <div className="container">
      <h1>CUSTOMERS</h1>

      <div>
        <div>Add a New Customer</div>
        <p></p>
        <form>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="lastName">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">State</label>
            <input
              type="text"
              className="form-control"
              name="state"
              onChange={(e) => setState(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Zip</label>
            <input
              type="number"
              className="form-control"
              name="zipCode"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="number"
              className="form-control"
              name="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            onClick={submitCustomer}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
        <br />

        <br />
        <h2>List of Customers</h2>

        <div>
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
                <th colspan="2">Action</th>
              </tr>
            </thead>
            {customerList.map((val) => {
              return (
                <tbody>
                  <tr>
                    <td>{val.firstName}</td>
                    <td>{val.lastName}</td>
                    <td>{val.address}</td>
                    <td>{val.city}</td>
                    <td>{val.state}</td>
                    <td>{val.zipCode}</td>
                    <td>{val.phoneNumber}</td>
                    <td>{val.email}</td>
                    <td>
                      <div>
                        <input
                          type="text"
                          placeholder="add new first name"
                          onChange={(event) =>
                            setNewFirstName(event.target.value)
                          }
                        />
                        <input
                          type="text"
                          placeholder="add new last name"
                          onChange={(event) =>
                            setNewLastName(event.target.value)
                          }
                        />
                        <input
                          type="text"
                          placeholder="add new email"
                          onChange={(event) => setNewEmail(event.target.value)}
                        />
                        <input
                          type="number"
                          placeholder="add new phone number"
                          onChange={(event) =>
                            setNewPhoneNumber(event.target.value)
                          }
                        />
                        <input
                          type="text"
                          placeholder="add new address"
                          onChange={(event) =>
                            setNewAddress(event.target.value)
                          }
                        />
                        <input
                          type="text"
                          placeholder="add new city"
                          onChange={(event) => setNewCity(event.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="add new state"
                          onChange={(event) => setNewState(event.target.value)}
                        />
                        <input
                          type="number"
                          placeholder="add new zip"
                          onChange={(event) =>
                            setNewZipCode(event.target.value)
                          }
                        />
                      </div>
                      <Button
                        variant="warning"
                        style={{ margin: "5px" }}
                        onClick={() => {
                          updateCustomer(val.customerId);
                        }}
                      >
                        Update
                      </Button>{" "}
                      <Button
                        variant="danger"
                        style={{ margin: "5px" }}
                        onClick={() => {
                          deleteCustomer(val.customerId);
                        }}
                      >
                        Delete
                      </Button>{" "}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Customers;
