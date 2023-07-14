import { useSelector, useDispatch } from 'react-redux/es/exports';
import { AppState } from 'index';
import { Button, Modal, Input, Space } from 'antd';
import { setUserName, setUserPassword, logIn } from 'app/store/user-reducer/user-reducer';
import { openModal, closeModal } from 'app/store/modal-reducer/modal-reducer';

function AuthPage() {

    const isModalOpened = useSelector((state: AppState) => state.modal.isModalOpened)
    const dispatch = useDispatch()
    const onOpenModal = ()=> dispatch(openModal())
    const onCloseModal = ()=> dispatch(closeModal())
    const setName = (name: string)=> dispatch(setUserName(name))
    const setPassword = (password: string)=> dispatch(setUserPassword(password))
    const logInUser = () => dispatch(logIn())
    const userName = useSelector((state: AppState)=>state.user.name)
    const userPassword = useSelector((state: AppState)=>state.user.password)
    console.log(userName)

    const jsonHeaders = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
    };
    
    const onRegSubmit = async () => {
        console.log(userName, userPassword)
        if (userName && userPassword) {
            console.log('name and pswrd exist')
            try {
                await fetch('http://localhost:3011/reg', {
                    method: "POST",
                    headers: jsonHeaders,
                    body: JSON.stringify({
                        name: userName,
                        password: userPassword
                    })
                }).then((result) => result.json())
                await onLoginSumbit()
            } catch(error) {
                console.log('error')
            }
            console.log('close modal here')
            onCloseModal()
        }
    }
    const onLoginSumbit = async () => {
        try {
            const { accessToken, refreshToken, message } = await fetch('http://localhost:3011/auth', {
                method: "POST",
                headers: jsonHeaders,
                body: JSON.stringify({
                    name: userName,
                    password: userPassword
                })
            }).then((result) => result.json())

            if (!accessToken || !refreshToken) {
                throw new Error(message)
            }
            localStorage.setItem('accessToken', accessToken)
            localStorage.setItem('refreshToken', refreshToken)
            logInUser()            
            onCloseModal()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='auth-page'>
            <Button className='btn-main' onClick = {onOpenModal}>Зарегистрироваться или войти</Button>
            <Modal open = {isModalOpened}
                footer = {[
                    <Button key = {1} onClick={onRegSubmit}>Зарегистрироваться</Button>,
                    <Button key = {2} onClick={onLoginSumbit}>Войти</Button>
                ]}
            >
                <Space direction='vertical' size='large'>
                    <Input onChange={(e)=>setName(e.target.value)} placeholder='Введите логин'/>
                    <Input.Password onChange={(e)=>setPassword(e.target.value)} placeholder='Введите пароль'/>
                </Space>
            </Modal>
        </div>
    );
}

export default AuthPage