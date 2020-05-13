import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signup } from "../../action/login";


class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      birthday:"",
      photo: "",
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
    const { name, email, birthday, photo, password } = this.state
    this.props.signup(name, email, birthday, photo, password)
  }

  render() {
    return (
          <div>
            
            <h2>Criar Nova Conta</h2>

            <form onSubmit={this.handleSubmit}>
              <label>Nome</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
               <br />
                <label>email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
                <br />
                 <label>birthday</label>
              <input
                type="text"
                name="birthday"
                value={this.state.birthday}
                onChange={this.handleChange}
              />
                <br />
                 <label>photo</label>
              <input
                type="text"
                name="photo"
                value={this.state.photo}
                onChange={this.handleChange}
              />
                <br />
                <label>Password</label>
              <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
                <br />
              <button>
                Cadastrar
            </button>
            </form>
          </div>
    );
  }
}
 
const mapDispatchToProps = dispatch => ({
  signup: (name, email, birthday, photo, password) => dispatch(signup(name, email, birthday, photo, password)),

});

export default connect(null, mapDispatchToProps)(SignupPage);