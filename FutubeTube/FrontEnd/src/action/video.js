import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from "../containers/Router/index";
import { getFeed } from '.';

const baseURL = "https://9w3fwzeu1l.execute-api.us-east-1.amazonaws.com/labenu/"

export const createVideo = (title, link, description) => async (dispatch) => {
  const createInformation = {
    title,
    link,
    description
  }
  const headers = { headers: { Authorization: window.localStorage.getItem("token") } }

  try {
    await axios.post(`${baseURL}video/create`, createInformation, headers);
    window.alert("Criado com sucesso")
    dispatch(push(routes.root))
    dispatch(getFeed())

  } catch (error) {
    window.alert("Erro na criação")
    console.log(error)
    dispatch(push(routes.signup))

  }
}


export const deleteVideo = (id) => async (dispatch) => {
  const headers = { headers: { Authorization: window.localStorage.getItem("token") } }

  try {
    if( window.confirm("Deseja deletar")){
    await axios.delete(`${baseURL}video/delete/${id}`, headers);
    window.alert("Video deletado com sucesso")
    dispatch(getFeed())}
  } catch (error) {
    window.alert("Erro ao deletar")
    console.log(error)

  }
}

const getVideoDetailsAction = (video) => {
  return {
    type: "GET_VIDEO_DETAILS",
    payload: {
      video,
    }
  }
};


export const setVideoId = (videoId) => {
  return {
    type: "SET_VIDEO_ID",
    payload: {
      videoId,
    }
  }
};

export const getVideoDetails = (videoId) => async (dispatch) => {
  const response = await axios.get(`${baseURL}video/detail/${videoId}`)


  dispatch(getVideoDetailsAction(response.data))
}



