import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;

`;

const Adicionar = styled.div`
 padding: 5px
`; 

const Filtro = styled.div`
 padding: 5px
`;

const listaTarefas = []

export default class DadosLista extends React.Component 
{
  constructor(props) {
    super(props);
      this.state = {
        id: Date.now(),
        mensagem: [],
        inputValue: "",
        statusFiltro: "",
      }
  }

onChangeInput = e => {
  this.setState({ inputValue: e.target.value });
};

adicionarTarefa = (inputValue, filtro) =>{
    const novaTarefa = {
      id: Date.now(),
      inputValue: "",
      filtro: "", 
    }
  }


render(){
  console.log(this.state.statusFiltro)
    return (
    <Container>
        <h2>Lista de tarefas </h2>
        <Adicionar>
        <input tarefa={this.state.inputValue} onChange={this.onChangeInput}/> 
        <button onClick={this.novaTarefa}>Adicionar</button>
        </Adicionar>
        <Filtro>
        <label>Filtro</label>
        <select statusFiltro={this.statusFiltro}>
          <option>Nenhum</option>
          <option>Pendente</option>
          <option>Completas</option>
        </select>
        </Filtro>
    </Container>
  
    );
}

}

