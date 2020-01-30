import axios from 'axios'

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-patricia"

export const setTaskAction = (task) => {
    return {
        type: "SET_TASK",
        payload: {
            task,
        }
    };
};

export const getTasks = () => async (dispatch) => {
    const response = await axios.get(`${baseURL}`)

    dispatch(setTaskAction(response.data))
}

export const createTasks = (text, day) => async (dispatch) => {
    const taskInformation = {
        text,
        day
    }
    try {
        const response = await axios.post(`${baseURL}`, taskInformation)
        dispatch(getTasks())
    } catch (error) {
        window.alert("Erro de criação")
    }
}
