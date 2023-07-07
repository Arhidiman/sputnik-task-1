import { Card, Space, Checkbox } from 'antd';
import { Options } from 'app/store/app-reducer/questions';
import { useDispatch } from 'react-redux/es/exports';

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
    return(
        <Card title={question}>
            <Space direction='vertical'>
                {answerOptions.map((option, index) => 
                    <Checkbox 
                        key={index} 
                        disabled={option.disabled} 
                        checked = {option.isChecked}  
                        onChange={()=>checkAnswer(questionIndex, index)}>
                        {option.value}
                    </Checkbox>)}
            </Space>
        </Card>
    )
}

export default QuestionCard