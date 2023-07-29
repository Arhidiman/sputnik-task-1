import App from './app/App';
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./app/store/store";
import { StrictMode } from 'react';

const store = createStore(rootReducer)
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const root = (
    <BrowserRouter>
        <StrictMode>
            <Provider store={store}>
            
                <App />
            
            </Provider>
        </StrictMode>
    </BrowserRouter> 
)

ReactDOM.render(
    root,
    document.getElementById('root')
);