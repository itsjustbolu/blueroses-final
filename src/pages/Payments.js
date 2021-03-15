import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export function Payments() {
  const [customerId, setCustomerId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const [customerList, setCustomerList] = useState([]);

  const [paymentsList, setPaymentsList] = useState([]);

  const [newCardNumber, setNewCardNumber] = useState("");
  const [newExpMonth, setNewExpMonth] = useState("");
  const [newExpYear, setNewExpYear] = useState("");
  const [newSecurityCode, setNewSecurityCode] = useState("");

  useEffect(() => {
    Axios.get("https://blueroses-final.herokuapp.com/api/customers/get").then(
      (response) => {
        setCustomerList(response.data);
      }
    );
  }, []);

  useEffect(() => {
    Axios.get("https://blueroses-final.herokuapp.com/api/payments/get").then(
      (response) => {
        setPaymentsList(response.data);
      }
    );
  }, []);

  const submitPayment = (event) => {
    event.preventDefault();
    Axios.post("https://blueroses-final.herokuapp.com/api/payments/post", {
      customerId: customerId,
      cardNumber: cardNumber,
      expMonth: expMonth,
      expYear: expYear,
      securityCode: securityCode,
    }).then(() => {
      alert("Successfully added payment");
    });
  };

  const updatePayment = (paymentId) => {
    Axios.put("https://blueroses-final.herokuapp.com/api/payments/update", {
      customerId: customerId,
      cardNumber: cardNumber,
      expMonth: expMonth,
      expYear: expYear,
      securityCode: securityCode,
      paymentId: paymentId,
    }).then((response) => {
      setPaymentsList(
        paymentsList.map((val) => {
          return val.paymentId === paymentId
            ? {
                paymentId: val.paymentId,
                customerId: val.customerId,
                cardNumber: newCardNumber,
                expMonth: newExpMonth,
                expYear: newExpYear,
                securityCode: newSecurityCode,
              }
            : val;
        })
      );
    });
  };

  const deletePayment = (paymentId) => {
    Axios.delete(
      `https://blueroses-final.herokuapp.com/api/payments/delete/${paymentId}`
    ).then((response) => {
      setPaymentsList(
        paymentsList.filter((val) => {
          return val.paymentId !== paymentId;
        })
      );
    });
  };

  return (
    <div className="container">
      <h1>PAYMENTS</h1>

      <div>Add Payment Method</div>
      <p></p>
      <form>
        <div className="mb-3">
          <label style={{ paddingRight: "1em" }} className="form-label">
            Select a customer:
          </label>

          <select
            className="form-select"
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

        <div class="mb-3">
          <label class="form-label">Card Number</label>
          <input
            type="number"
            class="form-control"
            name="cardNumber"
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Exp Month</label>
          <input
            type="number"
            class="form-control"
            name="expMonth"
            onChange={(e) => setExpMonth(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Exp year</label>
          <input
            type="number"
            class="form-control"
            name="expYear"
            onChange={(e) => setExpYear(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Security Code</label>
          <input
            type="number"
            class="form-control"
            name="securityCode"
            onChange={(e) => setSecurityCode(e.target.value)}
          />
        </div>

        <button onClick={submitPayment} type="submit" class="btn btn-primary">
          ADD PAYMENT
        </button>
      </form>

      <div>
        <br />
        <div>See Customers Payment Methods</div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Customer First Name</th>
                <th>Customer Last Name</th>
                <th>Card Number</th>
                <th>Exp Month</th>
                <th>Exp Year</th>
                <th>Security Code</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            {paymentsList.map((val) => {
              return (
                <tbody>
                  <tr>
                    <td>{val.firstName}</td>
                    <td>{val.lastName}</td>
                    <td>{val.cardNumber}</td>
                    <td>{val.expMonth}</td>
                    <td>{val.expYear}</td>
                    <td>{val.securityCode}</td>
                    <td>
                      <div>
                        <input
                          type="number"
                          placeholder="add new card #"
                          onChange={(event) =>
                            setNewCardNumber(event.target.value)
                          }
                        />
                        <input
                          type="number"
                          placeholder="add new exp month"
                          onChange={(event) =>
                            setNewExpMonth(event.target.value)
                          }
                        />
                        <input
                          type="number"
                          placeholder="add new exp year"
                          onChange={(event) =>
                            setNewExpYear(event.target.value)
                          }
                        />
                        <input
                          type="number"
                          placeholder="add new sec code"
                          onChange={(event) =>
                            setNewSecurityCode(event.target.value)
                          }
                        />
                      </div>
                      <Button
                        variant="warning"
                        style={{ margin: "5px" }}
                        onClick={() => {
                          updatePayment(val.paymentId);
                        }}
                      >
                        Update
                      </Button>{" "}
                      <Button
                        variant="danger"
                        style={{ margin: "5px" }}
                        onClick={() => {
                          deletePayment(val.paymentId);
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

        {/* {paymentsList.map((val) => {
          return (
            <table>
              <tr>
                <th>Card Number</th>
                <th>Exp Month</th>
                <th>Exp Year</th>
                <th>Security Code</th>
              </tr>

              <tr>
                <td>{val.cardNumber}</td>
                <td>{val.expMonth}</td>
                <td>{val.expYear}</td>
                <td>{val.securityCode}</td>
                <td>
                  <input type="button" value="Update" />
                  <input type="button" value="Delete" />
                </td>
              </tr>
              <br />
            </table>
          );
        })} */}
      </div>
    </div>
  );
}

export default Payments;
