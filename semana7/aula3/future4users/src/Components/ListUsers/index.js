import React from 'react';
import styled from "styled-components";
import axios from "axios";
import ListItem from "../ListItem/index";

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


class ListUsers extends React.Component {
  constructor(){
    super();
    this.state = {
       listUsers: [],
    }
  }

componentDidMount() {
  this.getAllUsers();
}  

getAllUsers = () => {
const url = `${baseURL}/users/getAllUsers`;

const request = axios.get(url,  {
    headers: {
    "api-token": token
    }
});
request.then(response =>{
    this.setState({listUsers: response.data.result})
    console.log(this.listUsers)
})
}

  
  render(){
    return (
      <div>
      <Lista>
        <h3>Usuários Cadastrados:</h3>
           {this.state.listUsers.map(user =>(
            <ListItem user={user} onDeleteUser={this.getAllUsers} />
           ))}
      </Lista>
      </div>
    );

  }
 
}

export default ListUsers;
