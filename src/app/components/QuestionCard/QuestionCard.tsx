import { Card, Space, Radio, Checkbox } from 'antd';
import { QuestionType, Options } from 'app/store/app-reducer/questions';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { Action } from 'app/store/app-reducer/questions';

interface QuestionCardProps {
    questionIndex: number,
    question: string,
    answerOptions?: Options,
    checkedAnswer: number,
}


const QuestionCard = ({questionIndex, question, answerOptions}: QuestionCardProps)=> {
    const dispatch = useDispatch()
    const checkAnswer = (questionIndex: number, answerIndex: number )=> {
        dispatch({type: 'CHECK_ANSWER', payload: {questionIndex: questionIndex, answerIndex: answerIndex }})
    }
    const state = useSelector(state=>state)
    return(
        <Card title={question}>
          
            <Space direction='vertical'>
                {answerOptions.map((option, index) => <Checkbox key={index} disabled={option.disabled} checked = {option.isChecked}  onChange={()=>checkAnswer(questionIndex, index)}>{option.value}</Checkbox>)}
            </Space>
           
        </Card>
    )
}

export default QuestionCard