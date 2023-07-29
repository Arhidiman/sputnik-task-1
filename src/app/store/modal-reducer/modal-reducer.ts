export type ModalState = {
    isModalOpened: boolean,
    forms: Forms,
    currentForm: keyof Forms
}

export type Action<Payload> = {
    type: string,
    payload?: Payload
}

export type Forms = {
    regForm: {
        title: string,
        buttonText: string,
        subtitle: string,
        linkText: string
    },
    authForm: {
        title: string,
        buttonText: string,
        subtitle: string,
        linkText: string
    }
}

export const initialState: ModalState = {
    isModalOpened: false,
    forms: {
        regForm: {
            title: 'Регистрация',
            buttonText: 'Зарегистрироваться',
            subtitle: 'Есть аккаунт?',
            linkText: 'Войти'
        },
        authForm: {
            title: 'Вход',
            buttonText: 'Войти',
            subtitle: 'Нет аккаунта?',
            linkText: 'Зарегистрироваться'
        }
    },
    currentForm: 'authForm'
}

const OPEN_MODAl = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const SWITCH_FORM = 'SWITCH_FORM'

export const modalReducer = (state = initialState as ModalState, action: Action<string | keyof Forms>) => {
    switch (action.type) {
        case OPEN_MODAl: {
            return {
                ...state,
                isModalOpened: true
            }
        }
        case CLOSE_MODAL: {
            return {
                ...state,
                isModalOpened: false
            }
        }
        case SWITCH_FORM: {
            return {
                ...state,
                currentForm: state.currentForm === 'authForm' ? 'regForm' : 'authForm'
            }
        }
        default: return state
    }
}



export const openModal = () : Action<string> => {return {type: OPEN_MODAl}}
export const closeModal = () : Action<string> => {return {type: CLOSE_MODAL}}
export const switchForm = () : Action<keyof Forms> => {return {type: SWITCH_FORM}}
