import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      birthday:"",
      image: "",
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
    const { name, email, birthday, image, password } = this.state
    this.props.signup(name, email, birthday, image, password)
  }

  render() {
    return (
          <div>
            
            <h2>Criar Nova Conta</h2>

            <form onSubmit={this.handleSubmit}>
              <input
                label="Nome de Usuário"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
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