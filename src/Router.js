import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomerList from "./components/Customers";
import Home from "./components/Home";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Route exact path="/">
        <div>Home</div>
      </Route>
      <Route path="/login">
        <div>Login</div>
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/customerList">
        <div>Customer List</div>
      </Route>
    </BrowserRouter>
  );
};

export default Router;
