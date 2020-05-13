import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createVideo } from "../../action/video";

class CreateVideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      link: "",
      description:"",
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, link, description } = this.state
    this.props.createVideo(title, link, description)
  }

  render() {
    return (
          <div>
            
            <h2>Criar Nova Conta</h2>

            <form onSubmit={this.handleSubmit}>
              <label>title</label>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
               <br />
                <label>link</label>
              <input
                type="text"
                name="link"
                value={this.state.link}
                onChange={this.handleChange}
              />
                <br />
                 <label>description</label>
              <input
                type="text"
                name="description"
                value={this.state.description}
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
  createVideo: (title, link, description) => dispatch(createVideo(title, link, description)),

});

export default connect(null, mapDispatchToProps)(CreateVideoPage);