import './styles/index.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { AppState } from 'index';
import QuestionsPage from './components/Pages/QuestionsPage/QuestionsPage';
import MainPage from './components/Pages/MainPage/MainPage';
import { logIn } from './store/user-reducer/user-reducer';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/Pages/PageNotFound/PageNotFound';
// import { withErrorBoundary, ErrorBoundary } from 'react-error-boundary';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';




const App = ()=> {
    
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
                <Route path='/questions' element = {tokenData ? <ErrorBoundary message='Что то пошло не так'><QuestionsPage/></ErrorBoundary> : null}/>
                <Route path='*' element = {<PageNotFound/>}/>
            </Routes>
        </div>
    );
}

// export default withErrorBoundary(App, {
//     fallback: <div>Fuck ERROR!!!!!!!!1</div>
// })

export default App