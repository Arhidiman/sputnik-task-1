import './styles/index.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { AppState } from '../index';
import QuestionsPage from './components/Pages/QuestionsPage/QuestionsPage';
import AuthPage from './components/Pages/AuthPage/AuthPage';
import { logIn } from './store/user-reducer/user-reducer';
import TestComponent from './components/testComponent';


export function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(logIn())
    }, [])

    const tokenData = useSelector((state: AppState) => state.user.tokenData)
    const accessToken = localStorage.getItem('accessToken')
    console.log(tokenData)
    console.log(accessToken)
    
    return (
        <div className='app'>
            <TestComponent></TestComponent>
            {!tokenData && <AuthPage/>}
            {tokenData && <QuestionsPage/>}
        </div>
    );
}