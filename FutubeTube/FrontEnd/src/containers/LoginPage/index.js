import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { login } from "../../action/login"

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state
    this.props.login(email, password)
  }

  render() {
    return (
          <div>
            
            <h2>Login</h2>

            <form onSubmit={this.handleSubmit}>
              <input
                label="E-mail"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <input
                label="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <button
                type="submit"
              >
                Acessar
            </button>
            </form>
          </div>
    );
  }
}
 
const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
});

export default connect(null, mapDispatchToProps)(LoginPage);