import React from 'react';
import './App.css';
import Post from "./Components/Post/Post"


class formulario extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      nomeUsuario: "",
      fotoUsuario: "",
      postUsuario: "",
    };
  }

render(){
  return(
    <div>
      <label>Usuario</label>
      <input   />
    </div>
  )
}

}



function App() {
  return (
    <div className="App">
      <Post usuario="future4.br" imagem="https://picsum.photos/id/726/200/200"></Post>
    </div>
  );
}

export default App;