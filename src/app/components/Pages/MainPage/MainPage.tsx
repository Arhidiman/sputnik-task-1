import { useSelector, useDispatch } from 'react-redux/es/exports';
import { AppState } from 'index';
import { Button, Modal } from 'antd';
import { openModal, closeModal } from 'app/store/modal-reducer/modal-reducer';
import MainForm from 'app/components/Form/MainForm';

function MainPage() {
    const isModalOpened = useSelector((state: AppState) => state.modal.isModalOpened)
    const dispatch = useDispatch()
    const onOpenModal = ()=> dispatch(openModal())
    const onCloseModal = ()=> dispatch(closeModal())
    return (
        <div className='auth-page'>
            <Button className='btn-main' onClick = {onOpenModal}>Зарегистрироваться или войти</Button>
            <Modal open = {isModalOpened} footer = {null} onCancel={onCloseModal}>
                <MainForm/>
            </Modal>
        </div>
    );
}

export default MainPage