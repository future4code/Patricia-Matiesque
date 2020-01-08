import React, { Component } from "react";
import styled from 'styled-components';
import { addTaskAction } from "../../actions"
import { connect } from "react-redux";


const Text = styled.div`
    background: white;
    text-align:center;

`
const ListText = styled.div`
    background: white;
    text-align:center;
    display: flex;
    justify-content: center;
    

`

class MainSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postValue: ""
    };
  }

  onChangeInput = event => {
    this.setState({ postValue: event.target.value });
  };

  onCreateTask = () => {
    const newtask = {
      id: new Date().getTime(),
      text: this.state.postValue
    }
    this.props.addTask(newtask)

  }
  
  keyPressed = (event) => {
    if (event.key === "Enter") {
      this.onCreateTask()
    }
  }

  render() {
    return (

      <div>
        <Text>
          <input 
          value={this.state.postValue} 
          onChange={this.onChangeInput} 
          onKeyPress={this.keyPressed}
          type="text" placeholder="O que tem que ser feito?" />
        </Text>
        <ListText>
          <input type="checkbox" />
          <li>
            <span ></span>
          </li>
          <span>X</span>
        </ListText>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    taskList: state.listTask.taskList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: taskList => dispatch(addTaskAction(taskList))
  };
};

export default connect(null, mapDispatchToProps)(MainSection);
