import { Card, Space, Radio, Button } from 'antd';
import QuestionCard from '../QuestionCard/QuestionCard';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { QuestionsState, QuestionType } from 'app/store/app-reducer/questions';
import { AppState } from 'index';






const Page = ()=> {
    const questions = useSelector((state: AppState)=> state.questions.questionsList)
    console.log(questions)
    return(
        <Space direction='vertical'>
            {questions.map((question: QuestionType, index: number)=><QuestionCard 
                key={index} 
                questionIndex={index+1}
                question={question.question} 
                answerOptions={question.answerOptions}
                checkedAnswer={question.checkedAnswer}/>
            )}
            <Button>Ответить на вопросы</Button>
        </Space>
    )
}

export default Page