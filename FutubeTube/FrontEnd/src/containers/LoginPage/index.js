import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
    const { name, email } = this.state
    this.props.signup(name, email)
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
                fullWidth
                variant="contained"
                color="primary"
              >
                Cadastrar
            </button>
            </form>
          </div>
    );
  }
}
 
const mapDispatchToProps = dispatch => ({

});

export default connect(null, mapDispatchToProps)(SignupPage);