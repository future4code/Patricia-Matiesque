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
    console.log("oi")
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
                 <label>image</label>
              <input
                type="text"
                name="image"
                value={this.state.image}
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

});

export default connect(null, mapDispatchToProps)(SignupPage);