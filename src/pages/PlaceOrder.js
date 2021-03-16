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
  const [menuItemsList, setMenuItemsList] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [employeeList, setEmployeeList] = useState([]);
  const [customerPaymentList, setCustomerPaymentList] = useState([]);
  const [paymentList, setPaymentList] = useState([]);

  const [ordersList, setOrdersList] = useState([]);

  const [newQuantity, setNewQuantity] = useState([]);
  const [newStatus, setNewStatus] = useState([]);
  const [newEmployee, setNewEmployee] = useState([]);

  const [getOrders, setGetOrders] = useState(true);

  useEffect(() => {
    Axios.get("https://blueroses-final.herokuapp.com/api/customers/get").then(
      (response) => {
        setCustomerList(response.data);
        setCustomerId(response.data[0].customerId);
      }
    );
  }, []);

  useEffect(() => {
    Axios.get("https://blueroses-final.herokuapp.com/api/menuitems/get").then(
      (response) => {
        console.log("anything test", response);
        setMenuItemsList(response.data);
        setItemId(response.data[0].itemId);
      }
    );
  }, []);

  useEffect(() => {
    Axios.get("https://blueroses-final.herokuapp.com/api/status/get").then(
      (response) => {
        setStatusList(response.data);
        setStatusId(response.data[0].statusId);
      }
    );
  }, []);

  useEffect(() => {
    Axios.get("https://blueroses-final.herokuapp.com/api/employees/get").then(
      (response) => {
        setEmployeeList(response.data);
        setEmployeeId(response.data[0].employeeId);
      }
    );
  }, []);

  useEffect(() => {
    if (getOrders) {
      Axios.get("https://blueroses-final.herokuapp.com/api/orders/get").then(
        (response) => {
          setOrdersList(response.data);
        }
      );
      setGetOrders(false);
    }
  }, [getOrders]);

  useEffect(() => {
    Axios.get("https://blueroses-final.herokuapp.com/api/payments/get").then(
      (response) => {
        setPaymentList(response.data);
        setPaymentId(response.data[0].paymentId);
      }
    );
  }, []);

  const submitOrder = (event) => {
    event.preventDefault();
    console.log(
      customerId,
      itemId,
      quantity,
      orderDateTime,
      paymentId,
      statusId,
      employeeId
    );
    Axios.post("https://blueroses-final.herokuapp.com/api/orders/post", {
      customerId: customerId,
      itemId: itemId,
      quantity: quantity,
      orderDateTime: orderDateTime,
      paymentId: paymentId,
      statusId: statusId,
      employeeId: employeeId,
    }).then((result) => {
      setGetOrders(true);
      console.log(result);
      alert("successfully placed order");
    });
  };

  const updateOrder = (orderId) => {
    Axios.put("https://blueroses-final.herokuapp.com/api/customers/update", {
      quantity: newQuantity,
      status: newStatus,
      employee: newEmployee,
      orderId: orderId,
    }).then((response) => {
      setOrdersList(
        ordersList.map((val) => {
          return val.orderId === orderId
            ? {
                orderId: val.orderId,
                quantity: newQuantity,
                status: newStatus,
                employee: newEmployee,
              }
            : val;
        })
      );
    });
  };

  const deleteOrder = (orderId) => {
    console.log("order deleted");
    Axios.delete(
      `https://blueroses-final.herokuapp.com/api/orders/delete/${orderId}`
    ).then((response) => {
      setOrdersList(
        ordersList.filter((val) => {
          return val.orderId !== orderId;
        })
      );
    });
  };

  console.log(paymentId);
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
              {menuItemsList.map((val) => {
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
              {paymentList.map((val) => {
                return <option value={val.paymentId}>{val.cardNumber}</option>;
              })}
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
                <th>Customer First Name</th>
                <th>Customer Last Name</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Order Date + Time</th>
                <th>Payment Card</th>
                <th>Status</th>
                <th>Employee</th>
                <th colspan="2">Action</th>
              </tr>
            </thead>
            {ordersList.map((val) => {
              return (
                <tbody>
                  <tr>
                    <td>{val.firstName}</td>
                    <td>{val.lastName}</td>
                    <td>{val.itemName}</td>
                    <td>{val.quantity}</td>
                    <td>{val.orderDateTime}</td>
                    <td>{val.cardNumber}</td>
                    <td>{val.statusName}</td>
                    <td>{val.employeeLastName}</td>

                    <td>
                      <div>
                        <label
                          style={{ paddingRight: "1em" }}
                          className="form-label"
                        >
                          New Quantity:{" "}
                        </label>
                        <input
                          type="number"
                          placeholder="add new quantity"
                          onChange={(event) =>
                            setNewQuantity(event.target.value)
                          }
                        />
                        <label
                          style={{ paddingRight: "1em" }}
                          className="form-label"
                        >
                          New Status:{" "}
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          name="statusId"
                          onChange={(e) => setNewStatus(e.target.value)}
                        >
                          {statusList.map((val) => {
                            return (
                              <option value={val.statusId}>
                                {val.statusName}
                              </option>
                            );
                          })}
                        </select>

                        <label
                          style={{ paddingRight: "1em" }}
                          className="form-label"
                        >
                          New Employee:{" "}
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          name="employeeId"
                          onChange={(e) => setNewEmployee(e.target.value)}
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
                      <Button
                        variant="warning"
                        style={{ margin: "5px" }}
                        onClick={() => {
                          updateOrder(val.orderId);
                        }}
                      >
                        Update
                      </Button>{" "}
                      <Button
                        variant="danger"
                        style={{ margin: "5px" }}
                        onClick={() => {
                          deleteOrder(val.orderId);
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

export default PlaceOrder;
