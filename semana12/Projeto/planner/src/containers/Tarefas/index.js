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
}

  render(){
    const days = ["Segunda","Terça","Quarta","Quinta","Sexta","Sabado","Domingo"]

    return(
      <Container>
              <h2>Lista de Tarefas</h2>
      {days.map(day =>(
            <div>
            <h2>{day}</h2>
                <ul>{
                this.props.allTask.filter(
                  task => task.day === day
                  ).map(
                  task => <li>{task.text}</li>
                  )}
                </ul>
            </div>
      ))}


      </Container>

    )
  }
}



const mapStateToProps = state => ({
  allTask: state.task.allTask
})

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(getTasks()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Tarefas);
