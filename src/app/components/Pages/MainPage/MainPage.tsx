import { useSelector, useDispatch } from 'react-redux/es/exports';
import { AppState } from '../../../../index';
import { Button, Modal } from 'antd';
import { openModal, closeModal } from '../../../store/modal-reducer/modal-reducer';
import MainForm from '../../Form/MainForm';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

function MainPage() {
    const isModalOpened = useSelector((state: AppState) => state.modal.isModalOpened)
    const dispatch = useDispatch()
    const onOpenModal = () => dispatch(openModal())
    const onCloseModal = () => dispatch(closeModal())
    return (
        <div className='auth-page'>
            <Button className='btn-main' onClick={onOpenModal}>Зарегистрироваться или войти</Button>
            <Modal open={isModalOpened} footer={null} onCancel={onCloseModal}>
                <ErrorBoundary message='Ошибка, попробуйте снова'>
                    <MainForm/>
                </ErrorBoundary>
            </Modal>
        </div>
    );
}

export default MainPage