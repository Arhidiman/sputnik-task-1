import './styles/index.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { AppState } from 'index';
import QuestionsPage from './components/Pages/QuestionsPage/QuestionsPage';
import AuthPage from './components/Pages/AuthPage/AuthPage';
import { logIn } from './store/user-reducer/user-reducer';

export function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(logIn())
    }, [])
    const tokenData = useSelector((state: AppState) => state.user.tokenData)
    console.log(tokenData)
    return (
        <div className='app'>
            {!tokenData && <AuthPage/>}
            {tokenData && <QuestionsPage/>}
        </div>
    );
}