import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {getTasks} from "../../actions/index";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    padding:10px;

`

class Tarefas extends React.Component {

  
  componentDidMount() {
    this.props.getTasks()
    console.log(this.props.allTask)
}

  render() {
    console.log(this.props.allTask)
    return(
    <Container>
      <h2>Lista de Tarefas</h2>
      <select>

      {this.props.allTask.map((task) => 
      <option>{task.day}</option>
      )}
      </select>

  
    
      </Container>   
    
  )}
}

const mapStateToProps = state => ({
  allTask: state.task.allTask
})

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(getTasks()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Tarefas);
