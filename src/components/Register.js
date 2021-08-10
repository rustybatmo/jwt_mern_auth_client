import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordVerify: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, passwordVerify } = this.state;
    // const user = { email, password, passwordVerify };
    // console.log(user);

    // await fetch("http://localhost:3000/auth/register", {
    //   method: "POST",

    //   body: {
    //     email,
    //     password,
    //     passwordVerify,
    //   },
    // });

    await axios.post("http://localhost:3000/auth/register", {
      email,
      password,
      passwordVerify,
    });
  };
  render() {
    return (
      <div>
        <form>
          <label>
            Email{" "}
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password{" "}
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <label>
            passwordVerify{" "}
            <input
              type="text"
              name="passwordVerify"
              value={this.state.passwordVerify}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" onClick={this.handleSubmit}></input>
        </form>
      </div>
    );
  }
}

export default Register;
