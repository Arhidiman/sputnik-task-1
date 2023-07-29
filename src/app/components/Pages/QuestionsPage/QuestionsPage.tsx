import { Space, Button, Pagination, Statistic } from 'antd';
import { useState } from 'react';
import QuestionCard from '../../QuestionCard/QuestionCard';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { QuestionType } from '../../../store/questions-reducer/questionsTypes';
import { AppState } from '../../../../index';
import { getResult } from '../../../store/questions-reducer/questions-reducer';
import { logOut } from '../../../store/user-reducer/user-reducer';
import { Link } from 'react-router-dom';

const QuestionsPage = () => {
    const questions = useSelector((state: AppState) => state.questions.questionsList)
    const result = useSelector((state: AppState) => state.questions.result)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageSize] = useState(3)
    const [questionsNumber] = useState(questions.length)
    const [totalPages] = useState(Math.ceil(questionsNumber/pageSize))
    const dispatch = useDispatch()
    const getTestResult = () => dispatch(getResult())
    const {Countdown} = Statistic
    const [deadline, setDeadline] = useState(Date.now() + 1000*60*5)
    const getCurrentPage = (currentPage: number, pageSize:number, questions: QuestionType[])=> {
        const indexedQuestions = questions.map((q, i) => ({ ...q, index: i }))
        return indexedQuestions.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    }
    const logOutUser = () => {
        dispatch(logOut())
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
    }
    const finishTest = () => {
        getTestResult()
        setDeadline(0)
    }
    const tokenData = useSelector((state: AppState)=> state.user.tokenData)

    return(
        <>  
            <div className='app-header'>
                <div>{tokenData ? tokenData.name : ''}</div>
                <Link to='/'><Button onClick={logOutUser}>Выход</Button> </Link>
            </div>
            <div className='timer'>
                <p className='timer-title'>До конца теста осталось:</p>
                <Countdown value={deadline} format="mm:ss" onFinish={getTestResult}/>
            </div>
            <Space direction='vertical'>
                {
                    questions && getCurrentPage(currentPage, pageSize, questions).map((question)=>
                        <QuestionCard 
                            key={question.index} 
                            question={question}
                            disabled={result.isChecked}
                        />
                    )
                }
            </Space>
            <div className='result-container'>
                <Button onClick={finishTest}>Ответить на вопросы</Button>
                {result.isChecked && (
                    <p className='result'>
                        Дано ответов: {result.totalAnswered},
                        правильных ответов: {result.rightAnswers},
                        неправильных ответов: {result.falseAnswers}
                    </p>
                )}
            </div>
            <Pagination onChange={setCurrentPage} defaultCurrent={1} total={totalPages*10}/>
        </>
    )
}

export default QuestionsPage