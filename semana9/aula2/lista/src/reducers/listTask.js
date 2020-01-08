const initialState = {
    taskList: [],
  };
  
  const listTask = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return { ...state, taskList:[...state.taskList, action.payload.newTask] };
      default:
        return state;
    }
  };
  
  export default listTask;
  