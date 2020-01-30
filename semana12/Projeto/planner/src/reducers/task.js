const initialState = {
    allTask:[],
    
}

const task = (state = initialState, action) => {

    switch(action.type){
        case "SET_TASK":
            return {...state, allTask: action.payload.task}
            
        
        default:
            return state
    }
}

export default task;  