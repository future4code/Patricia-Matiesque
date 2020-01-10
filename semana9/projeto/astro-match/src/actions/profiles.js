import axios from 'axios'


const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/patricia/"

const setProfileToSwipe = (profile) => ({
	type: "SET_PROFILE_TO_SWIPE",
	payload:{
		profile,
	}
})

const getMatchesAction = (matches) => ({
	type: "GET_MATCHES",
	payload:{
		matches,
	}
})


export const clearSwipes = () => async (dispatch) => {
	await axios.put(`${baseURL}clear`)
}

export const fetchProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get(`${baseURL}person`);

	dispatch(setProfileToSwipe(response.data.profile))
}

export const getMatches  = () => async (dispatch) => {
	const response = await axios.get(`${baseURL}matches`);

	dispatch(getMatchesAction(response.data.matches))
}

export const choosePerson = (id, choice) => async (dispatch) => {
	if(!id){dispatch(fetchProfileToSwipe()) 
	
		return}
	await axios.post(`${baseURL}choose-person`, {id,choice})
	dispatch(fetchProfileToSwipe())
}