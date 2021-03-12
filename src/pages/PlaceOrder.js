import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export function PlaceOrder() {
  const [customerId, setCustomerId] = useState("");
  const [itemId, setItemId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderDateTime, setOrderDateTime] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [statusId, setStatusId] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const [customerList, setCustomerList] = useState([]);
  const [menuItemList, setMenuItemsList] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [employeeList, setEmployeeList] = useState([]);
  const [customerPaymentList, setCustomerPaymentList] = useState([]);
  const [paymentList, setPaymentList] = useState([]);

  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    Axios.get("https://blueroses-final.herokuapp.com/api/customers/get").then(
      (response) => {
        setCustomerList(response.data);
      }
    );
  }, [true]);

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

  // useEffect(() => {
  //   Axios.get(
  //     "https://blueroses-final.herokuapp.com/api/payments-customer/get"
  //   ).then((response) => {
  //     setCustomerPaymentList(response.data);
  //   });
  // }, []);

  const submitOrder = () => {
    Axios.post("https://blueroses-final.herokuapp.com/api/orders/post", {
      customerId: customerId,
      itemId: itemId,
      quantity: quantity,
      orderDateTime: orderDateTime,
      paymentId: 2,
      statusId: statusId,
      employeeId: employeeId,
    })
      .then((result) => {
        console.log(result);
        alert("successfully placed order");
      })
      .catch((err) => {
        console.log(err);
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
            <label style={{ paddingRight: "1em" }} className="form-label">
              Select a customer:
            </label>

            <select
              class="form-select"
              aria-label="Default select example"
              name="customerId"
              onChange={(e) => setCustomerId(e.target.value)}
            >
              {customerList.map((val) => {
                return (
                  <option value={val.customerId}>
                    {val.firstName} {val.lastName}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mb-3">
            <label style={{ paddingRight: "1em" }} className="form-label">
              Menu Item:
            </label>

            <select
              class="form-select"
              aria-label="Default select example"
              name="itemId"
              onChange={(e) => setItemId(e.target.value)}
            >
              {menuItemList.map((val) => {
                return <option value={val.itemId}>{val.itemName}</option>;
              })}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              onChange={(e) => setQuantity(e.target.value)}
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
            <label style={{ paddingRight: "1em" }} className="form-label">
              Payments:{" "}
            </label>

            <select
              class="form-select"
              aria-label="Default select example"
              name="paymentId"
              onChange={(e) => setPaymentId(e.target.value)}
            >
              <option value="2">2</option>
            </select>
          </div>

          <div className="mb-3">
            <label style={{ paddingRight: "1em" }} className="form-label">
              Status:{" "}
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="statusId"
              onChange={(e) => setStatusId(e.target.value)}
            >
              {statusList.map((val) => {
                return <option value={val.statusId}>{val.statusName}</option>;
              })}
            </select>
          </div>

          <div className="mb-3">
            <label style={{ paddingRight: "1em" }} className="form-label">
              Employee:{" "}
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="employeeId"
              onChange={(e) => setEmployeeId(e.target.value)}
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
                <th>Item</th>
                <th>Quantity</th>
                <th>Order Date + Time</th>
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
                    <td>{val.customerId}</td>
                    <td>{val.itemId}</td>
                    <td>{val.quantity}</td>
                    <td>{val.orderDateTime}</td>
                    <td>{val.paymentId}</td>
                    <td>{val.statusId}</td>
                    <td>{val.employeeId}</td>

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
