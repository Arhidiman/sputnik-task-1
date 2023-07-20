import './styles/index.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { AppState } from 'index';
import QuestionsPage from './components/Pages/QuestionsPage/QuestionsPage';
import MainPage from './components/Pages/MainPage/MainPage';
import { logIn } from './store/user-reducer/user-reducer';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/Pages/PageNotFound/PageNotFound';export function App() {
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(logIn())
    }, [])
    const tokenData = useSelector((state: AppState) => state.user.tokenData)

    return (
        <div className='app'>
            <Routes>
                <Route path='/' element = {<MainPage/>}/>
                <Route path='/login' element = {<MainPage/>}/>
                <Route path='/questions' element = {tokenData ? <QuestionsPage/> : null}/>
                <Route path='*' element = {<PageNotFound/>}/>
            </Routes>
        </div>
    );
}