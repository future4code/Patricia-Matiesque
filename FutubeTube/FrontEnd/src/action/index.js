import axios from 'axios'

const baseURL = "https://9w3fwzeu1l.execute-api.us-east-1.amazonaws.com/labenu/"


const getFeedAction = (feed) => {
    return {
      type: "GET_FEED",
      payload: {
        feed,
      }
    }
  };


//Get Feed
export const getFeed = () => async (dispatch) => {
    const response = await axios.get(`${baseURL}feed`)
  
    dispatch(getFeedAction(response.data))
  }