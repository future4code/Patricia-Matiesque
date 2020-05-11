import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from "../containers/Router/index";

const baseURL = "https://9w3fwzeu1l.execute-api.us-east-1.amazonaws.com/labenu/"

export const login = (email, password) => async (dispatch) => {
    const loginInformation = {
      email,
      password
    }
     
    try{
    const response = await axios.post(`${baseURL}user/login`, loginInformation);
    window.localStorage.setItem("token", response.data.token)
    dispatch(push(routes.root))

   }catch{
    window.alert("Erro no login")
    dispatch(push(routes.login))

  }
}

export const signup = (name, email, birthday, photo, password) => async (dispatch) => {
    const signupInformation = {
      name,
      email,
      birthday,
      photo,
      password,
    }
     
    try{
    const response = await axios.post(`${baseURL}user/create`, signupInformation);
    window.localStorage.setItem("token", response.data.token)
    dispatch(push(routes.feed))

   }catch{
    window.alert("Erro na criação")
    dispatch(push(routes.signup))

  }
}

export const edditPassword = (newPassword, oldPassword) => async (dispatch) => {
  const addAdressInformation = {
    newPassword,
    oldPassword
  }
  const headers = { headers: { Authorization: window.localStorage.getItem("token") } }

  try {
    const response = await axios.post(`${baseURL}user/password`, addAdressInformation, headers);
    window.localStorage.setItem("token", response.data.token)

    dispatch(push(routes.feedPage))

  } catch(err){
    window.alert("Erro no login")
    console.log(err)
  }

}