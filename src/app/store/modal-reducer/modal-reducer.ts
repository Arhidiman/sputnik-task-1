export type ModalState = {
    isModalOpened: boolean,
}

export type Action = {
    type: string,
    payload?: any
}




const initialState: ModalState = {
    isModalOpened: false
}

export const modalReducer = (state = initialState as ModalState, action: Action) => {
    switch (action.type) {
    case 'OPEN_MODAL': {
      
        return {
            ...state,
            isModalOpened: true
        }
    }
    case 'CLOSE_MODAL': {
      
        return {
            ...state,
            isModalOpened: false
        }
    }
    default: return state
    }
}


