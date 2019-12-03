import React from 'react';
import './App.css';
import styled from "styled-components"


class App extends React.Component {
  constructor(){
    super();
     this.state = {
       tarefas:[],
       inputValue: "",
       filtro: ""
     };

  }

inputOnChange = e => {
  this.setState ({inputValue: e.target.value});
}
filtroOnChange = e => {
  this.setState({ filtro: e.target.value})
}


criarTarefas = () =>{
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      status: false,

    };
    this.setState({
      tarefas: [...this.state.tarefas, novaTarefa],
      inputValue: ""
    })
   
} 

listarTarefas = () =>{
  return this.state.tarefas.map(novaTarefa =>{
    console.log(novaTarefa);
  return <li>{novaTarefa}</li>
  })
} 


  render() {
    const lista = this.listarTarefas();
  return (
    <div className="App">
      
        <h1>Lista de tarefas</h1>
      <div>
        <input value={this.state.inputValue} onChange={this.inputOnChange} />
        <button onClick={this.criarTarefas}>Adicionar</button>
      </div>
      <div>
        <label>Filtro</label>
        <select value={this.state.filtro} onChange={this.filtroOnChange}>
          <option value="" >Nenhum</option>
          <option value="pendentes" >Pendentes</option>
          <option value="completas" >Completas</option>
        </select>
      </div>
      <div>
        <ul>
          {lista}
        </ul>
      </div>
    </div>
  );
}
}
export default App;
