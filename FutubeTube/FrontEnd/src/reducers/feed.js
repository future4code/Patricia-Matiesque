const initialState = {
    allFeed:[],
    selectVideoId: "",
    videoDetails: {},
    
}

const feed = (state = initialState, action) => {

    switch(action.type){
        
       case "GET_FEED":
            return {...state, allFeed: action.payload.feed}
        case "GET_VIDEO_DETAILS":
            return {...state, videoDetails: action.payload.video}  
        case "SET_VIDEO_ID":
            return {...state, selectVideoId: action.payload.videoId}  
        default:

            return state
            
    }
}

export default feed;  