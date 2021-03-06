import "./App.css";
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Customers from "./pages/Customers";
import Employees from "./pages/Employees";
import Menu from "./pages/Menu";
import Payments from "./pages/Payments";
import PlaceOrder from "./pages/PlaceOrder";
import Suppliers from "./pages/Suppliers";
import Status from "./pages/Status";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Search from "./pages/Search";

function App() {
  return (
    <HashRouter basename="/">
      <Navbar expand="lg">
        <Navbar.Brand>BLUEROSES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link style={{ margin: "5px", paddingRight: "20px" }} to="/">
              Home
            </Link>
            <Link
              style={{ margin: "5px", paddingRight: "20px" }}
              to="/customers"
            >
              Customers
            </Link>
            <Link
              style={{ margin: "5px", paddingRight: "20px" }}
              to="/employees"
            >
              Employees
            </Link>
            <Link style={{ margin: "5px", paddingRight: "20px" }} to="/menu">
              Menu
            </Link>
            <Link
              style={{ margin: "5px", paddingRight: "20px" }}
              to="/payments"
            >
              Payments
            </Link>
            <Link
              style={{ margin: "5px", paddingRight: "20px" }}
              to="/place-order"
            >
              Place Order
            </Link>
            <Link
              style={{ margin: "5px", paddingRight: "20px" }}
              to="/suppliers"
            >
              Suppliers
            </Link>
            <Link style={{ margin: "5px", paddingRight: "20px" }} to="/status">
              Status
            </Link>
            <Link style={{ margin: "5px", paddingRight: "20px" }} to="/search">
              Search
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Route path="/" component={Home} exact />
      <Route path="/customers" component={Customers} exact />
      <Route path="/employees" component={Employees} exact />
      <Route path="/menu" component={Menu} exact />
      <Route path="/payments" component={Payments} exact />
      <Route path="/place-order" component={PlaceOrder} exact />
      <Route path="/suppliers" component={Suppliers} exact />
      <Route path="/status" component={Status} exact />
      <Route path="/search" component={Search} exact />
    </HashRouter>
  );
}

export default App;
