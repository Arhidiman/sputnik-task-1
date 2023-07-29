export type UserState = {
    name: string| null,
    password: string| null,
    tokenData: {
        name: string
    },
    isUserDataMatch: boolean,
    isUserNameMatch: boolean
}

export type Action = {
    type: string,
    payload?: unknown
}

const SET_USER_NAME= 'SET_USER_NAME'
const SET_USER_PASSWORD = 'SET_USER_PASSWORD'
const LOG_IN= 'LOG_IN'
const LOG_OUT = 'LOG_OUT'
const SET_IS_USER_DATA_MATCH= 'SET_IS_USER_DATA_MATCH'
const SET_IS_USER_NAME_MATCH = 'SET_IS_USER_NAME_MATCH'

const initialState: UserState = {
    name: null,
    password: null,
    tokenData: null,
    isUserDataMatch: false,
    isUserNameMatch: false
}

const getTokenData = (token: string | null) => {
    if (!token) return null
    return JSON.parse(atob(token.split('.')[1]))
}

export const userReducer = (state = initialState as UserState, action: Action) => {
    switch (action.type) {
        case SET_USER_NAME: {
            return {...state, name: action.payload}
        }
        case SET_USER_PASSWORD: {
            return {...state, password: action.payload}
        }
        case LOG_IN: {
            return {...state, tokenData: getTokenData(localStorage.getItem('accessToken')) }
        }

        case LOG_OUT: {
            return { ...state, name: null, password: null, tokenData: null,  isUserDataMatch: false, isUserNameMatch: false}
        }

        case SET_IS_USER_DATA_MATCH: {
            return {...state, isUserDataMatch: action.payload}
        }

        case SET_IS_USER_NAME_MATCH: {
            return {...state, isUserNameMatch: action.payload}
        }

        default: return state
    }
}

export const setUserName = (payload: string) : Action => {return {type: SET_USER_NAME, payload: payload }}
export const setUserPassword = (payload: string) : Action => {return {type: SET_USER_PASSWORD, payload: payload }}
export const logIn = () : Action => {return {type: LOG_IN}}
export const logOut = () : Action => {return {type: LOG_OUT}}
export const setIsUserDataMatch = (payload: boolean) : Action => {return {type: SET_IS_USER_DATA_MATCH, payload: payload}}
export const setIsUserNameMatch = (payload: boolean) : Action => {return {type: SET_IS_USER_NAME_MATCH, payload: payload}}

