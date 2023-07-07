import { Pagination } from 'antd';
import Page from './components/page/Page';
import './styles/index.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { AppState } from 'index';
import { Button } from 'antd';


export function App() {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize] = useState(3)
    const questions = useSelector((state: AppState) => state.questions.questionsList)
    const questionsNumber = questions.length
    const [totalPages, setTotalPages] = useState(Math.ceil(questionsNumber/pageSize))

    const result = useSelector((state: AppState) => state.questions.result)
    const state = useSelector((state:AppState)=> state)
    const dispatch = useDispatch()
    const getResult = ()=> {
        dispatch({type: 'GET_RESULT'})
    }
    console.log(result)
    
    return (
        <div className='app'>
            <div className='header'>Тест</div>
            <Page currentPage={currentPage} pageSize = {pageSize}/>

            <div className='result-container'>
                <Button onClick={()=>getResult()}>Ответить на вопросы</Button>
                {result.isChecked ? <p className='result'>Дано ответов: {result.totalAnswered} правильных ответов: {result.rightAnswers} неправильных ответов: {result.falseAnswers}</p> : null}
                
            </div>
            
            <Pagination onChange={(e)=> setCurrentPage(e)} defaultCurrent={1} total={totalPages*10}/>
        </div>
    );
}