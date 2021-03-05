import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export function Employees() {
  const [employeeFirstName, setEmployeeFirstName] = useState("");
  const [employeeLastName, setEmployeeLastName] = useState("");
  const [employeePhoneNumber, setEmployeePhoneNumber] = useState(0);
  const [employeeEmailAddress, setEmployeeEmailAddress] = useState("");
  const [employeeTitle, setEmployeeTitle] = useState("");
  const [employeeStartDate, setEmployeeStartDate] = useState("");

  const [newEmployeeFirstName, setNewEmployeeFirstName] = useState("");
  const [newEmployeeLastName, setNewEmployeeLastName] = useState("");
  const [newEmployeePhoneNumber, setNewEmployeePhoneNumber] = useState(0);
  const [newEmployeeEmailAddress, setNewEmployeeEmailAddress] = useState("");
  const [newEmployeeTitle, setNewEmployeeTitle] = useState("");
  const [newEmployeeStartDate, setNewEmployeeStartDate] = useState("");

  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    Axios.get("https://blueroses-final.herokuapp.com/api/employees/get").then(
      (response) => {
        setEmployeeList(response.data);
      }
    );
  }, []);

  const submitEmployee = () => {
    Axios.post("https://blueroses-final.herokuapp.com/api/employees/post", {
      employeeFirstName: employeeFirstName,
      employeeLastName: employeeLastName,
      employeePhoneNumber: employeePhoneNumber,
      employeeEmailAddress: employeeEmailAddress,
      employeeTitle: employeeTitle,
      employeeStartDate: employeeStartDate,
    }).then(() => {
      alert("Successfully added employee");
    });
  };

  const updateEmployee = (employeeId) => {
    Axios.put("https://blueroses-final.herokuapp.com/api/employees/update", {
      employeeFirstName: newEmployeeFirstName,
      employeeLastName: newEmployeeLastName,
      employeePhoneNumber: newEmployeePhoneNumber,
      employeeEmailAddress: newEmployeeEmailAddress,
      employeeTitle: newEmployeeTitle,
      employeeStartDate: newEmployeeStartDate,
      employeeId: employeeId,
    }).then((response) => {
      setEmployeeList(
        employeeList.map((val) => {
          return val.employeeId === employeeId
            ? {
                employeeId: val.employeeId,
                employeeFirstName: newEmployeeFirstName,
                employeeLastName: newEmployeeLastName,
                employeePhoneNumber: newEmployeePhoneNumber,
                employeeEmailAddress: newEmployeeEmailAddress,
                employeeTitle: newEmployeeTitle,
                employeeStartDate: newEmployeeStartDate,
              }
            : val;
        })
      );
    });
  };

  const deleteEmployee = (employeeId) => {
    Axios.delete(
      `https://blueroses-final.herokuapp.com/api/employees/delete/${employeeId}`
    ).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.employeeId !== employeeId;
        })
      );
    });
  };

  return (
    <div className="container">
      <h1>EMPLOYEES</h1>

      <div>
        <div>Add a New Employee</div>
        <p></p>
        <form>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="employeeFirstName"
              onChange={(e) => setEmployeeFirstName(e.target.value)}
            />
          </div>

          <div className="employeeLastName">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="employeeLastName"
              onChange={(e) => setEmployeeLastName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="number"
              className="form-control"
              name="employeePhoneNumber"
              onChange={(e) => setEmployeePhoneNumber(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="text"
              className="form-control"
              name="employeeEmailAddress"
              onChange={(e) => setEmployeeEmailAddress(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              name="employeeTitle"
              onChange={(e) => setEmployeeTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Start Date</label>
            <input
              type="date"
              className="form-control"
              name="employeeStartDate"
              onChange={(e) => setEmployeeStartDate(e.target.value)}
            />
          </div>
          <br />
          <button
            onClick={submitEmployee}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>

        <br />
        <br />
        <h2>List of Employees</h2>

        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Title</th>
                <th>Start Date</th>
                <th colspan="2">Action</th>
              </tr>
            </thead>
            {employeeList.map((val) => {
              return (
                <tbody>
                  <tr>
                    <td>{val.employeeFirstName}</td>
                    <td>{val.employeeLastName}</td>
                    <td>{val.employeePhoneNumber}</td>
                    <td>{val.employeeEmailAddress}</td>
                    <td>{val.employeeTitle}</td>
                    <td>{val.employeeStartDate}</td>
                    <td>
                      <div>
                        {" "}
                        <input
                          type="text"
                          placeholder="enter new first name"
                          onChange={(event) => {
                            setNewEmployeeFirstName(event.target.value);
                          }}
                        />{" "}
                        <input
                          type="text"
                          placeholder="enter new last name"
                          onChange={(event) => {
                            setNewEmployeeLastName(event.target.value);
                          }}
                        />{" "}
                        <input
                          type="number"
                          placeholder="enter new phone #"
                          onChange={(event) => {
                            setNewEmployeePhoneNumber(event.target.value);
                          }}
                        />{" "}
                        <input
                          type="text"
                          placeholder="enter new email"
                          onChange={(event) => {
                            setNewEmployeeEmailAddress(event.target.value);
                          }}
                        />{" "}
                        <input
                          type="text"
                          placeholder="enter new title"
                          onChange={(event) => {
                            setNewEmployeeTitle(event.target.value);
                          }}
                        />{" "}
                        <input
                          type="date"
                          placeholder="enter new date"
                          onChange={(event) => {
                            setNewEmployeeStartDate(event.target.value);
                          }}
                        />
                      </div>
                      <Button
                        variant="warning"
                        style={{ margin: "5px" }}
                        onClick={() => {
                          updateEmployee(val.employeeId);
                        }}
                      >
                        Update
                      </Button>{" "}
                      <Button
                        variant="danger"
                        style={{ margin: "5px" }}
                        onClick={() => {
                          deleteEmployee(val.employeeId);
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

export default Employees;
