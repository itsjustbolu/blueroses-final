import React, { useState, useEffect } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function Menu() {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [currentStock, setCurrentStock] = useState(0);

  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState(0);
  const [newCurrentStock, setNewCurrentStock] = useState(0);

  const [menuItemsList, setMenuItemsList] = useState([]);

  useEffect(() => {
    Axios.get("https://blueroses-final.herokuapp.com/api/menuitems/get").then(
      (response) => {
        setMenuItemsList(response.data);
      }
    );
  }, []);

  const submitMenuItems = (event) => {
    event.preventDefault();
    Axios.post("https://blueroses-final.herokuapp.com/api/menuitems/post", {
      itemName: itemName,
      itemPrice: itemPrice,
      currentStock: currentStock,
    }).then(() => {
      alert("Successfully added menu item");
    });
  };

  const updateMenuItem = (itemId) => {
    Axios.put("https://blueroses-final.herokuapp.com/api/menuitems/update", {
      itemName: newItemName,
      itemPrice: newItemPrice,
      currentStock: newCurrentStock,
      itemId: itemId,
    }).then((response) => {
      setMenuItemsList(
        menuItemsList.map((val) => {
          return val.itemId === itemId
            ? {
                itemId: val.itemId,
                itemName: newItemName,
                itemPrice: newItemPrice,
                currentStock: newCurrentStock,
              }
            : val;
        })
      );
    });
  };

  const deleteMenuItem = (itemId) => {
    Axios.delete(
      `https://blueroses-final.herokuapp.com/api/menuitems/delete/${itemId}`
    ).then((response) => {
      setMenuItemsList(
        menuItemsList.filter((val) => {
          return val.itemId !== itemId;
        })
      );
    });
  };

  return (
    <div className="container">
      <h1>MENU</h1>

      <div>Add items to menu</div>
      <p></p>
      <form>
        <div class="mb-3">
          <label class="form-label">Item Name</label>
          <input
            type="text"
            class="form-control"
            name="itemName"
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Item Price</label>
          <input
            type="number"
            class="form-control"
            name="itemPrice"
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Current Stock</label>
          <input
            type="number"
            class="form-control"
            name="currentStock"
            onChange={(e) => setCurrentStock(e.target.value)}
          />
        </div>

        <button onClick={submitMenuItems} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
      <br />
      <h2>Menu</h2>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Stock</th>
              <th colspan="2">Action</th>
            </tr>
          </thead>
          {menuItemsList.map((val) => {
            return (
              <tbody>
                <tr>
                  <td>{val.itemName}</td>
                  <td>{val.itemPrice}</td>
                  <td>{val.currentStock}</td>
                  <td>
                    <div>
                      {" "}
                      <input
                        type="text"
                        placeholder="enter new name"
                        onChange={(event) => {
                          setNewItemName(event.target.value);
                        }}
                      />
                      <input
                        type="number"
                        placeholder="enter new price"
                        onChange={(event) => {
                          setNewItemPrice(event.target.value);
                        }}
                      />
                      <input
                        type="number"
                        placeholder="enter new stock"
                        onChange={(event) => {
                          setNewCurrentStock(event.target.value);
                        }}
                      />
                    </div>
                    <Button
                      variant="warning"
                      style={{ margin: "5px" }}
                      onClick={() => {
                        updateMenuItem(val.itemId);
                      }}
                    >
                      Update
                    </Button>{" "}
                    <Button
                      variant="danger"
                      style={{ margin: "5px" }}
                      onClick={() => {
                        deleteMenuItem(val.itemId);
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
  );
}

export default Menu;
