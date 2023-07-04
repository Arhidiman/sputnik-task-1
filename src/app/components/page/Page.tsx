import { Card, Space, Radio, Button } from 'antd';
import QuestionCard from '../QuestionCard/QuestionCard';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { QuestionsState } from 'app/store/app-reducer/questions';
import { AppState } from 'index';






const Page = ()=> {
    const questions = useSelector((state: AppState)=> state.questions)
    const state = useSelector((state)=> state)
    console.log(state)
    return(
        <Space direction='vertical'>
            {questions.map((question, index)=><QuestionCard key={index} question={question.question} answerOptions={question.answerOptions}/>)}
            <Button>Ответить на вопросы</Button>
        </Space>
    )
}

export default Page