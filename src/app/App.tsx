import Checkbox from 'antd/es/checkbox/Checkbox';
import { Pagination } from 'antd';
import Page from './components/page/Page';
import './styles/index.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { AppState } from 'index';
import { QuestionType } from './store/app-reducer/questions';


const onChange = ()=> {
    console.log('change')
}



export function App() {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(3)
    const questions = useSelector((state: AppState) => state.questions.questionsList)
    const questionsNumber = questions.length
    const [totalPages, setTotalPages] = useState(Math.ceil(questionsNumber/pageSize))

   
    
    
    return (
        <div className='app'>
            <div className='header'>Тест</div>
            <Page currentPage={currentPage} pageSize = {pageSize}/>
            <Pagination onChange={(e)=> setCurrentPage(e)} defaultCurrent={1} total={totalPages*10}/>
        </div>
    );
}