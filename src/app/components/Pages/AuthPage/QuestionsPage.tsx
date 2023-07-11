import { Space, Button, Pagination, Statistic, CountdownProps} from 'antd';
import { useState } from 'react';
import QuestionCard from 'app/components/QuestionCard/QuestionCard';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { QuestionType } from 'app/store/questions-reducer/questionsTypes';
import { AppState } from 'index';


const getCurrentPage = (currentPage: number, pageSize:number, questions: QuestionType[])=> {
    const indexedQuestions = questions.map((q, i) => ({ ...q, index: i }))
    return indexedQuestions.slice((currentPage - 1) * pageSize, currentPage * pageSize)
}

const QuestionsPage = ()=> {
    const questions = useSelector((state: AppState) => state.questions.questionsList)
    const result = useSelector((state: AppState) => state.questions.result)
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize] = useState(3)
    const [questionsNumber] = useState(questions.length)
    const [totalPages] = useState(Math.ceil(questionsNumber/pageSize))
    const dispatch = useDispatch()
    const getResult = ()=> {dispatch({type: 'GET_RESULT'})}
    const {Countdown} = Statistic

    const deadline = Date.now() + 1000 * 2
    return(
        <>
            <Countdown title = 'До конца теста осталось' value={deadline} format="mm:ss:SSS" onFinish={getResult}/>
            <Space direction='vertical'>
                {
                    getCurrentPage(currentPage, pageSize, questions).map((question)=>
                        <QuestionCard 
                            key={question.index} 
                            question={question}
                            disabled={result.isChecked}
                        />
                    )
                }
                {}
            </Space>
            <div className='result-container'>
                <Button onClick={getResult}>Ответить на вопросы</Button>
                {result.isChecked && (
                    <p className='result'>
                        Дано ответов: {result.totalAnswered},
                        правильных ответов: {result.rightAnswers},
                        неправильных ответов: {result.falseAnswers}
                    </p>
                )}
            </div>
            <Pagination onChange={(e)=> setCurrentPage(e)} defaultCurrent={1} total={totalPages*10}/>
        </>
    )
}

export default QuestionsPage