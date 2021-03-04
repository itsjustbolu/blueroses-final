import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export function PlaceOrder() {
  const [customer, setCustomer] = useState("");
  const [itemOne, setItemOne] = useState("");
  const [itemOneQuantity, setItemOneQuantity] = useState("");
  const [itemTwo, setItemTwo] = useState("");
  const [itemTwoQuantity, setItemTwoQuantity] = useState("");
  const [itemThree, setItemThree] = useState("");
  const [itemThreeQuantity, setItemThreeQuantity] = useState("");
  const [orderDateTime, setOrderDateTime] = useState("");
  const [payment, setPayment] = useState("");
  const [status, setStatus] = useState("");
  const [employee, setEmployee] = useState("");

  const [customerList, setCustomerList] = useState([]);
  const [menuItemList, setMenuItemsList] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [employeeList, setEmployeeList] = useState([]);
  const [paymentList, setPaymentList] = useState([]);

  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    Axios.get("https://blueroses-final.herokuapp.com/api/customers/get").then(
      (response) => {
        setCustomerList(response.data);
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

  useEffect(() => {
    Axios.get("https://blueroses-final.herokuapp.com/api/status/get").then(
      (response) => {
        setStatusList(response.data);
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
    Axios.get("https://blueroses-final.herokuapp.com/api/orders/get").then(
      (response) => {
        setOrdersList(response.data);
      }
    );
  }, []);

  const submitOrder = () => {
    Axios.post("", {
      customer: customer,
      itemOne: itemOne,
      itemOneQuantity: itemOneQuantity,
      itemTwo: itemTwo,
      itemTwoQuantity: itemTwoQuantity,
      itemThree: itemThree,
      itemThreeQuantity: itemThreeQuantity,
      orderDateTime: orderDateTime,
      payment: payment,
      status: status,
      employee: employee,
    }).then(() => {
      alert("successfully placed order");
    });
  };

  return (
    <div className="container">
      <h1>PLACE AN ORDER</h1>
      <div>
        <div>Add a new order for customer</div>
        <p></p>
        <form>
          <div className="mb-3">
            <label className="form-label">Select a customer</label>

            <select
              class="form-select"
              aria-label="Default select example"
              name="customer"
              onChange={(e) => setCustomer(e.target.value)}
            >
              {customerList.map((val) => {
                return (
                  <option value={val.customerId}>
                    {val.firstName} {val.lastName}
                  </option>
                );
              })}
            </select>
            {/* <div>
            {customerList.map((val) => {
                return <div>{val.firstName} {val.lastName}</div>
              })}
            </div> */}
          </div>

          <div className="mb-3">
            <label className="form-label">First Item</label>

            <select
              class="form-select"
              aria-label="Default select example"
              name="itemOne"
              onChange={(e) => setItemOne(e.target.value)}
            >
              {menuItemList.map((val) => {
                return <option value={val.itemId}>{val.itemName}</option>;
              })}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">First Item Qty</label>
            <input
              type="number"
              className="form-control"
              name="itemOneQuantity"
              onChange={(e) => setItemOneQuantity(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">2nd Item</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="itemTwo"
              onChange={(e) => setItemTwo(e.target.value)}
            >
              {menuItemList.map((val) => {
                return <option value={val.itemId}>{val.itemName}</option>;
              })}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">2nd Item Qty</label>
            <input
              type="number"
              className="form-control"
              name="itemTwoQuantity"
              onChange={(e) => setItemTwoQuantity(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">3rd Item</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="itemThree"
              onChange={(e) => setItemThree(e.target.value)}
            >
              {menuItemList.map((val) => {
                return <option value={val.itemId}>{val.itemName}</option>;
              })}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">3rd Item Qty</label>
            <input
              type="number"
              className="form-control"
              name="itemThreeQuantity"
              onChange={(e) => setItemThreeQuantity(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Order Date + Time</label>
            <input
              type="datetime-local"
              className="form-control"
              name="orderDateTime"
              onChange={(e) => setOrderDateTime(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Payments</label>
            <input
              type="number"
              className="form-control"
              name="orderDateTime"
              onChange={(e) => setOrderDateTime(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="status"
              onChange={(e) => setStatus(e.target.value)}
            >
              {statusList.map((val) => {
                return <option value={val.statusId}>{val.statusName}</option>;
              })}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Employee</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="employee"
              onChange={(e) => setEmployee(e.target.value)}
            >
              {employeeList.map((val) => {
                return (
                  <option value={val.employeeId}>
                    {val.employeeFirstName} {val.employeeLastName}
                  </option>
                );
              })}
            </select>
          </div>

          <button
            onClick={submitOrder}
            type="submit"
            className="btn btn-primary"
          >
            Place Order
          </button>
        </form>

        <br />
        <br />
        <h2>List of Orders</h2>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Customer</th>
                <th>itemOne</th>
                <th>itemOneQuantity</th>
                <th>itemTwo</th>
                <th>itemTwoQuantity</th>
                <th>itemThree</th>
                <th>itemThreeQuantity</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Employee</th>
                <th colspan="2">Action</th>
              </tr>
            </thead>
            {ordersList.map((val) => {
              return (
                <tbody>
                  <tr>
                    <td>{val.customer}</td>
                    <td>{val.itemOne}</td>
                    <td>{val.itemOneQuantity}</td>
                    <td>{val.itemTwo}</td>
                    <td>{val.itemTwoQuantity}</td>
                    <td>{val.itemThree}</td>
                    <td>{val.itemThreeQuantity}</td>
                    <td>{val.payment}</td>
                    <td>{val.status}</td>
                    <td>{val.employee}</td>

                    <td>
                      {/* <input
                        type="text"
                        placeholder="add new first name"
                        onChange={(event) =>
                          setNewFirstName(event.target.value)
                        }
                      /> */}
                      <Button variant="warning" style={{ margin: "5px" }}>
                        Update
                      </Button>{" "}
                      <Button variant="danger" style={{ margin: "5px" }}>
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

export default PlaceOrder;
