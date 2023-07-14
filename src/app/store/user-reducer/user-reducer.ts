export type UserState = {
    name: string| null,
    password: string| null,
    tokenData: {
        name: string
    }
}

export type Action = {
    type: string,
    payload?: unknown
}

const initialState: UserState = {
    name: null,
    password: null,
    tokenData: null
}

const getTokenData = (token: string | null) => {
    if (!token) return null
    return JSON.parse(atob(token.split('.')[1]))
}

export const userReducer = (state = initialState as UserState, action: Action) => {
    switch (action.type) {
    case 'SET_USER_NAME': {
        return {...state, name: action.payload}
    }
    case 'SET_USER_PASSWORD': {
        return {...state, password: action.payload}
    }
    case 'LOG_IN': {
        return {...state, tokenData: getTokenData(localStorage.getItem('accessToken')) }
    }
    case 'LOG_OUT': {
        return {...state, tokenData: null}
    }
    default: return state
    }
}

export const setUserName = (payload: string) : Action => {return {type: 'SET_USER_NAME', payload: payload }}
export const setUserPassword = (payload: string) : Action => {return {type: 'SET_USER_PASSWORD', payload: payload }}
export const logIn = () : Action => {return {type: 'LOG_IN'}}
export const logOut = () : Action => {return {type: 'LOG_OUT'}}

