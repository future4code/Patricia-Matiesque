import React from 'react';
import './App.css';
import Container from './Components/DadosLista/index'
import ListaContainer from './Components/Lista/index'


class App extends React.Component{
  render() {
    return(
      <div>
    <Container />
      <ListaContainer />
    </div>
    );
  }
}
export default App;