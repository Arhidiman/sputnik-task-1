import { Card, Space, Radio, Button } from 'antd';
import QuestionCard from '../QuestionCard/QuestionCard';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { QuestionsState } from 'app/store/app-reducer/questions';
import { AppState } from 'index';






const Page = ()=> {
    const questions = useSelector((state: AppState)=> state.questions)
    return(
        <Space direction='vertical'>
            {questions.map(question=><QuestionCard key={1} question={question.question}/>)}
            <Button>Ответить на вопросы</Button>
        </Space>
    )
}

export default Page