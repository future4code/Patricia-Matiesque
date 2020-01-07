export const addTaskAction = newTask => {
    return {
      type: "ADD_TASK",
      payload: {
        newTask
      }
    };
  };

export const deleteTaskAction = id => {
   return {
    type: "DELETE_TASK",
    payload: {
    id
    }
 };
};

export const clearTaskAction = id => {
    return {
     type: "CLEAR_TASK",
     payload: {
     id
     }
  };
 };

