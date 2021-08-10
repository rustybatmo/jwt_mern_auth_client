import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const style = {
      fontSize: "30px",
      padding: "0.5rem",
    };
    return (
      <div>
        <Link style={style} to="/">
          Home
        </Link>
        <Link style={style} to="/login">
          Login
        </Link>
        <Link style={style} to="/register">
          Register
        </Link>
        <Link style={style} to="/customerList">
          CustomerList
        </Link>
      </div>
    );
  }
}

export default Navbar;
