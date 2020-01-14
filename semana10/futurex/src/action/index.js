import axios from 'axios'

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/futureX/patricia/"

const setTripAction = (trips) => {
    return {
      type: "SET_TRIP",
      payload: {
        trips,
      }
    };
  };

const getTripDetailsAction = (trips) => {
    return {
      type: "TRIP_DETAILS",
      payload: {
        trips,
      }
    };
  };

export const getTrip = () => async (dispatch) => {
  const response = await axios.get (`${baseURL}trips`)
  
  dispatch(setTripAction(response.data.trips))
}
  
export const getTripDetails = (tripId) => async (dispatch) => {
  const response = await axios.get (`${baseURL}trip/${tripId}`)

  dispatch(getTripDetailsAction(response.data.tripId))
}