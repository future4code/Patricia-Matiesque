import React from "react";
import axios from "axios";

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api"

const ListItem = props => {
    const clickDelete = () => {
        const url = `${baseURL}/users/deleteUser?id=${props.user.id}`;

        const token = {
            headers:{ 
             "api-token": "Patricia"
            }
        }
        const confirmar = window.confirm("Deseja deletar?");
        if(confirmar === true){ 
      axios.delete(url, token).then(() =>
         {props.onDeleteUser();})
    }else{
            console.log("cancelado")
        }
        }
    
    // .catch(error => {
    //     alert("Não deletado")
    // })
    



return(
    <li>
        {props.user.name}<button onClick={clickDelete}>X</button>
    </li>
)
}

export default ListItem;