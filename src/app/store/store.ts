import { combineReducers } from "redux";
import { questionsReducer } from "./app-reducer/questions";

const rootReducer = combineReducers({
    questions: questionsReducer
})


export default rootReducer