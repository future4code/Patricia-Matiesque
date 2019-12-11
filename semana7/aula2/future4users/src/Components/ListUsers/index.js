import React from 'react';
import styled from "styled-components";
import axios from "axios";

const Lista = styled.div`
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
       listUsers: [],
    }
  }

getAllUsers = () => {
const url = `${baseURL}/users/getAllUsers`;

const request = axios.get(url,  {
    headers: {
    "api-token": token
    }
});
request.then(response =>{
    this.setState({listUsers: response})
    console.log(this.listUsers)
})
}

  
  render(){
    return (
      <div>
      <Lista>
        <h3>Usuários Cadastrados:</h3>
        <ul>
           <li>{this.listUsers}</li>
        </ul>
      </Lista>
      </div>
    );

  }
 
}

export default App;
