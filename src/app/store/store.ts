import { combineReducers } from "redux";
import { questionsReducer } from "./questions-reducer/questions-reducer";
import { modalReducer } from "./modal-reducer/modal-reducer";

const rootReducer = combineReducers({
    questions: questionsReducer,
    modal: modalReducer
})


export default rootReducer