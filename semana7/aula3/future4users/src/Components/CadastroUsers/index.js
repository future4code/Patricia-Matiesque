import React from 'react';
import styled from "styled-components";
import axios from "axios";

const Cadastro = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 200px ;
`

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api"
const token = "Patricia"


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      nameUser: "",
      emailUser: "",

    }
  }

  createNewUser = () => {
    const url = `${baseURL}/users/createUser`;

    const data = {
      name: this.state.nameUser,
      email: this.state.emailUser
    };
    const request = axios.post(url, data, {
      headers: {
      "api-token": token
      }
    });

    request
      .then(response => {
        alert("criada com sucesso") ;
      }).catch(error => {
        alert("Não foi criada")
      })

  }

  onChangeUser = event => {
    this.setState({nameUser: event.target.value});
  };

  onChangeEmail = event => {
    this.setState({emailUser: event.target.value});
  };

  render(){
    return (
      <div>
            <Cadastro>
       <label>Nome:</label>
       <input type="text" value={this.state.nameUser} onChange={this.onChangeUser} />
       <label>E-mail:</label>
       <input type="text" value={this.state.emailUser} onChange={this.onChangeEmail} />
       <button onClick={this.createNewUser} >Salvar</button>
      </Cadastro>
      </div>
    );

  }
 
}

export default App;
