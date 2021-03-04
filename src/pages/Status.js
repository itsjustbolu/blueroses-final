import React, { useState, useEffect } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function Status() {
  const [statusName, setStatusName] = useState("");

  const [statusList, setStatusList] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://blueroses-final.herokuapp.com/api/status/get"
    ).then((response) => {
      setStatusList(response.data);
    });
  }, []);

  const submitStatus = () => {
    Axios.post(
      "https://blueroses-final.herokuapp.com/api/status/post",
      {
        statusName: statusName,
      }
    ).then(() => {
      alert("Successfully added status");
    });
  };

  const deleteStatus = (statusId) => {
    Axios.delete(
      `https://blueroses-final.herokuapp.com/api/status/delete/${statusId}`
    ).then((response) => {
      setStatusList(
        statusList.filter((val) => {
          return val.statusId !== statusId;
        })
      );
    });
  };

  return (
    <div className="container">
      <h1>STATUSES</h1>

      <div>Add a new status</div>
      <p></p>
      <form>
        <div class="mb-3">
          <label class="form-label">Status Name</label>
          <input
            type="text"
            class="form-control"
            name="statusName"
            onChange={(e) => setStatusName(e.target.value)}
          />
        </div>
        <Button variant="dark" style={{ margin: "5px" }} onClick={submitStatus}>
                        Add Status
                      </Button>{" "}
        <button onClick={submitStatus} type="submit" class="btn btn-primary">
          Add Status
        </button>
      </form>
      <br />
      <br />
      <div>
        <div>LIST OF STATUS</div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Status Name</th>

                <th colspan="2">Action</th>
              </tr>
            </thead>
            {statusList.map((val) => {
              return (
                <tbody>
                  <tr>
                    <td>{val.statusName}</td>
                    <td>
                      <Button variant="warning" style={{ margin: "5px" }}>
                        Update
                      </Button>{" "}
                      <Button
                        variant="danger"
                        style={{ margin: "5px" }}
                        onClick={() => {
                          deleteStatus(val.statusId);
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

export default Status;
