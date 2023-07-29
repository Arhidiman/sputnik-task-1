import './styles/index.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { logIn } from './store/user-reducer/user-reducer';
import AppRouter from './components/AppRouter/AppRouter';

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(logIn())
    }, [])

    return (
        <div className='app'>
            <AppRouter/>
        </div>
    );
}

export default App