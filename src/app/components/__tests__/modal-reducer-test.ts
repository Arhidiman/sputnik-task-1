import { initialState, closeModal, openModal, modalReducer } from '../../store/modal-reducer/modal-reducer'

test('Is modal closing', () => {
    const state = initialState
    const newState = modalReducer(state, closeModal())
    expect(newState.isModalOpened).toBeFalsy()
})

test('Is modal opening', () => {
    const state = initialState
    const newState = modalReducer(state, openModal())
    expect(newState.isModalOpened).toBeTruthy()
})