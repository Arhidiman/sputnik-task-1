import { useSelector } from 'react-redux/es/exports';
import { AppState } from '../../../index';
import QuestionsPage from '../Pages/QuestionsPage/QuestionsPage';
import MainPage from '../Pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const AppRouter = () => {
    const tokenData = useSelector((state: AppState) => state.user.tokenData)
    return (
        <>
            <Routes>
                <Route path='/' element = {<MainPage/>}/>
                <Route path='/login' element={<MainPage/>}/>
                <Route path='/questions' element={tokenData ? <ErrorBoundary message='Что то пошло не так'><QuestionsPage/></ErrorBoundary> : null}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </>
    );
}

export default AppRouter