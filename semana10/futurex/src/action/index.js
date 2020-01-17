import axios from 'axios'
import { push, replace, goBack } from "connected-react-router";
import { routes } from "../containers/Router";

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/futureX/patricia/" 



// const token = {
//   headers:{
//       'auth': window.localStorage.getItem("token")
//   }
// }

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


//Nova Viagem
export const createTrip = (name, planet, date, description, durationInDays) => async (dispatch) => {
  const token = window.localStorage.getItem("token")
  const newTrip = {
    name: name,
    planet: planet,
    date: date,
    description: description,
    durationInDays: durationInDays
  }
  console.log(token)

  try{
  await axios.post (`${baseURL}trips`, newTrip , {headers:{
    auth: token}
})
  dispatch(push(routes.home))
  }catch(error){
    window.alert("Erro de criação")
  }
}

//Novo Candidato
export const createCandidate = (name, age, applicationText, profession, country, tripId) => async (dispatch) => {
  const newCandidate = {
    name: name,
    age: age,
    applicationText: applicationText,
    profession: profession,
    country: country
}
  try{
  await axios.post (`${baseURL}trips/${tripId}/apply`, newCandidate)
    dispatch(push(routes.home))
  }catch(error){
    window.alert("Erro de criação")
  }
}
