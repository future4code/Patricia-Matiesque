import React from 'react';
import styled from "styled-components";
import axios from "axios";
import Lista from "./Components/ListUsers/index"
import Cadastro from "./Components/CadastroUsers/index"


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      paginaAtual: "Cadastro"

    }
  }

  botaoPagina = () => {
    if (this.state.paginaAtual === "Cadastro") {
      this.setState({ paginaAtual: "Lista" });
    } else {
      this.setState({ paginaAtual: "Cadastro" });
    }
  };

  render(){
    return (
      <div className="App">
      <button onClick={this.botaoPagina}>Ir para pagina lista</button>
      <div>
        {this.state.paginaAtual === "Cadastro" ? (<Cadastro />) : (<Lista />)}
      </div>
    </div>
    );

  }
 
}

export default App;
