import { combineReducers } from "redux";
import { questionsReducer } from "./questions-reducer/questions-reducer";

const rootReducer = combineReducers({
    questions: questionsReducer
})


export default rootReducer