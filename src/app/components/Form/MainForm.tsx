
import React, { Dispatch } from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { AppState } from '../../../index';
import { setUserName, setUserPassword, logIn, setIsUserDataMatch, setIsUserNameMatch } from '../../store/user-reducer/user-reducer';
import { closeModal, switchForm, Forms } from '../../store/modal-reducer/modal-reducer';


const MainForm: React.FC = () => {
    const currentForm = useSelector((state: AppState)=> state.modal.currentForm as keyof Forms)
    const modalState = useSelector((state: AppState)=> state.modal)
    const switchModalContent = () => dispatch(switchForm())
    const dispatch = useDispatch()
    const onCloseModal = () => dispatch(closeModal())
    const setName = (name: string)=> dispatch(setUserName(name))
    const setPassword = (password: string)=> dispatch(setUserPassword(password))
    const logInUser = () => dispatch(logIn())
    const setUserDataMatch = (value: boolean) => dispatch(setIsUserDataMatch(value))
    const setUserNameMatch = (value: boolean) => dispatch(setIsUserNameMatch(value))
    const userName = useSelector((state: AppState)=>state.user.name)
    const userPassword = useSelector((state: AppState)=>state.user.password)
    const isUserDataMatch = useSelector((state: AppState) => state.user.isUserDataMatch)
    const isUserNameMatch = useSelector((state: AppState) => state.user.isUserNameMatch)
    const jsonHeaders = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
    };

    const onCheckUser = async (value: string, setUserParameter: Dispatch<string>, parameter: string)=> {
        setUserParameter(value)
        try {
            const { name, password } = await fetch('http://localhost:3011/check', {
                method: "POST",
                headers: jsonHeaders,
                body: JSON.stringify({
                    name: parameter === 'name' ? value : userName,
                    password: parameter === 'password' ? value : userPassword
                })
            }).then((result) => result.json())
            if (name) {
                setUserNameMatch(true)
            } 
            if (name && password) {
                setUserDataMatch(true)
            } 
            if (!name) {
                setUserNameMatch(false)
            }
            if (!name || !password) {
                setUserDataMatch(false)
            }
        } catch (error) {
            alert(error) 
        }
    }    

    const onRegSubmit = async () => {
        if (userName && userPassword) {
            try {
                const {name, password,} = await fetch('http://localhost:3011/reg', {
                    method: "POST",
                    headers: jsonHeaders,
                    body: JSON.stringify({
                        name: userName,
                        password: userPassword
                    })
                }).then((result) => result.json())
                if(name && password) {
                    await onLoginSubmit()
                }
            } catch(error) {
                alert(error)           
            }
        }
    }

    const onLoginSubmit = async () => {
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
            setUserDataMatch(true)
        } catch (error) {
            alert(error) 
        }
    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            id='mainForm'
        >   
            <h2>{modalState.forms[currentForm].title}</h2>
            <Form.Item
                label="Имя"
                name="username"
                rules={[{ required: false, message: 'Введите имя!' }]}
            >
                <Input onChange={(e)=>onCheckUser(e.target.value, setName, 'name')} placeholder='Введите логин'/>
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[{ required: false, message: 'Введите пароль' }]}
            >
                <Input.Password onChange={(e)=>onCheckUser(e.target.value, setPassword, 'password')} placeholder='Введите пароль'/>
            </Form.Item>
            <div className='modal-footer' >
                {
                    currentForm === 'authForm' ?
                        <Link to = {userName && userPassword && isUserDataMatch ? './questions' : null}>                           
                            <Button form='mainForm' key='submit' type="primary" htmlType="submit" onClick={onLoginSubmit}>
                                Войти
                            </Button>
                        </Link>
                        :
                        <Link to = {userName && userPassword && !isUserNameMatch ? './questions' : null}>
                            <Button form='mainForm' key='submit' type="primary" htmlType="submit" onClick={onRegSubmit}>Зарегистрироваться</Button>
                        </Link>
                }            
                {modalState.forms[currentForm].subtitle}
                <a onClick={switchModalContent}><b>{modalState.forms[currentForm].linkText}</b></a>
            </div>
        </Form>
    )
};

export default MainForm;