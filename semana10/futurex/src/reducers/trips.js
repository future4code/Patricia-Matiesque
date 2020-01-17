const initialState = {
    allTrips:[],
    candidate:[],
    
}

const trips = (state = initialState, action) => {
    switch(action.type){
        case "SET_TRIP":
            return {...state, allTrips: action.payload.trips}
      
        default:
            return state
    }
}


export default trips;