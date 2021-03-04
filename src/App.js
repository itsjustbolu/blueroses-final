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
// import PlaceOrder from "./pages/PlaceOrder";
import Suppliers from "./pages/Suppliers";
import Status from "./pages/Status";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <HashRouter basename="/">
      <Navbar expand="lg">
        <Navbar.Brand href="/">BLUEROSES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/menu">Menu</Nav.Link>
            <Nav.Link to="/place-order">Place Order</Nav.Link>
            <Nav.Link to="/customers">Customers</Nav.Link>
            <Nav.Link to="/payments">Payments</Nav.Link>
            <Nav.Link to="/suppliers">Suppliers</Nav.Link>
            <Nav.Link to="/employees">Employees</Nav.Link>
            <Nav.Link to="/status">Status</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Route path="/" component={Home} exact />
      <Route path="/customers" component={Customers} exact />
      <Route path="/employees" component={Employees} exact />
      <Route path="/menu" component={Menu} exact />
      <Route path="/payments" component={Payments} exact />
      {/* <Route path="/place-order" component={PlaceOrder} exact /> */}
      <Route path="/suppliers" component={Suppliers} exact />
      <Route path="/status" component={Status} exact />
    </HashRouter>
  );
}

export default App;
