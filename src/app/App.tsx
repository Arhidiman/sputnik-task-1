import { Pagination } from 'antd';
import './styles/index.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { AppState } from 'index';
import { Button, Modal } from 'antd';
import QuestionsPage from './components/Pages/AuthPage/QuestionsPage';
import AuthPage from './components/Pages/AuthPage/AuthPage';


export function App() {

    return (
        <div className='app'>
            <AuthPage/>
            <QuestionsPage/>
        </div>
    );
}