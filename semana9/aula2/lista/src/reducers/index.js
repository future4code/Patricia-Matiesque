import { combineReducers } from "redux";
import listTask from "./listTask";

const rootReducer = combineReducers({
    listTask: listTask,
});

export default rootReducer;