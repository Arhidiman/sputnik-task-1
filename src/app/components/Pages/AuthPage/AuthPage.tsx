import { useSelector, useDispatch } from 'react-redux/es/exports';
import { AppState } from 'index';
import { Button, Modal } from 'antd';

function AuthPage() {

    const isModalOpened = useSelector((state: AppState) => state.modal.isModalOpened)
    const dispatch = useDispatch()
    const openModal = ()=> {dispatch({type: 'OPEN_MODAL'})}
    const closeModal = ()=> {dispatch({type: 'CLOSE_MODAL'})}

    console.log(isModalOpened)
    
    return (
        
       
        <div className='auth-page'>
            <Button onClick = {openModal}>Зарегистрироваться или войти</Button>
            <Modal open = {isModalOpened} onCancel={closeModal} onOk={closeModal}>
                <Button>Войти</Button>
                <Button>Зарегистрироваться</Button>
            </Modal>
        </div>
    );
}

export default AuthPage