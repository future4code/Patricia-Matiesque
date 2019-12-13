import React from 'react';
import axios from 'axios'


const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";
const headers = {auth: "patricia"}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      newPlaylist: "",
      listPlaylist:[],

    }
  }

  onChangeNewList = event => {
    this.setState({newPlaylist: event.target.value});
  };
  componentDidMount(){
    this.createPlaylist();
  }
  createPlaylist = () => {
    const url = `${baseURL}/playlists/createPlaylist`;
    const data = {
      name: this.state.newPlaylist
    };
    const request = axios.post(url, data, {headers})
     request.then(response => {
        alert("criada com sucesso") ;
      }).catch(error => {
        alert("Não foi criada")
      })
    }

  
  componentDidMount(){
    this.getAllPlaylists();
  }
  getAllPlaylists = () => {
    const url = `${baseURL}/playlists/getAllPlaylists`;
    const request = axios.get(url, {headers} )
    request.then(response => {
      this.setState({listPlaylist: response.data.result.list})
    })
  }
  

  deletePlaylist = (id) => {
    const url = `${baseURL}/playlists/deletePlaylist?playlistId=${id}`
    console.log(id)
    const confirmar = window.confirm("Deseja deletar?");
    if(confirmar === true){ 
  axios.delete(url, {headers}).then(() =>
     {this.deletePlaylist()})
}else{
        console.log("cancelado")
    }
    }
  


  render(){
    return (
      <div>
          <input type="text" onChange={this.onChangeNewList}></input>
          <button onClick={this.createPlaylist}>Criar</button>
          <span>{this.state.newPlaylist}</span>
          {this.state.listPlaylist.map(playlist =>(
          <div><span>{playlist.name}</span>
          <button onClick={() => this.deletePlaylist(playlist.id)}>X</button></div>))}
          


      </div>
    );

  }  

}

export default App;
