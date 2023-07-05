import React from "react";
import {App} from "app/App";
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "app/store/store";


const store = createStore(rootReducer)
export type AppState = ReturnType<typeof store.getState>
console.log(store.getState())

const root = (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(
    root,
    document.getElementById('root')
);