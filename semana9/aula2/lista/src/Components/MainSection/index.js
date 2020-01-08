import React from 'react';
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

onChangeInput = event => {
  addTask({taskList: event.target.value});
  console.log(onChangeInput)
};

function MainSection() {
  
  return (
    
    <div>
      <Text>
        <input onChange={onChangeInput} type="text" placeholder="O que tem que ser feito?" />
      </Text>
      <ListText>
          <input type="checkbox" />
          <li>
          <span></span>
          </li>
          <span>X</span>
      </ListText>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     taskList: state.listTask.taskList,
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    addTask: taskList => dispatch(addTaskAction(taskList))
  };
};

export default connect(null, mapDispatchToProps)(MainSection);
