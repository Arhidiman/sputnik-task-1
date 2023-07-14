import { combineReducers } from "redux";
import { questionsReducer } from "./questions-reducer/questions-reducer";
import { modalReducer } from "./modal-reducer/modal-reducer";
import { userReducer } from "./user-reducer/user-reducer";

const rootReducer = combineReducers({
    questions: questionsReducer,
    modal: modalReducer,
    user: userReducer
})


export default rootReducer