import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {createTasks} from "../../actions/index";


const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    padding:10px;
`

class CriarTarefas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            day:"",
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { text, day } = this.state
        this.props.createTasks(text, day)
        this.setState({ text: "", day:"" })
        console.log(text, day)
    }


  render() {
    return(
    <Container>
      <h2>Criar Tarefas</h2>
      <label>Data</label>
      <select  name="day" onChange={this.handleChange} value={this.state.day}>
          <option value="Domingo">Domingo</option>
          <option value="Segunda">Segunda</option>
          <option value="Terca">Terça</option>
          <option value="Quarta">Quarta</option>
          <option value="Quinta">Quinta</option>
          <option value="Sexta">Sexta</option>
          <option value="Sabado">Sabado</option>
      </select>
      <label>Descrição</label>
      <input type="text" name="text" value={this.state.text} onChange={this.handleChange}></input>
      <button onClick={this.handleSubmit}>criar</button>
    </Container> 
    )}
}

const mapDispatchToProps = dispatch => ({
    createTasks: (text, day) => dispatch(createTasks(text, day)),
});


export default connect(null, mapDispatchToProps)(CriarTarefas);
