import { Card, Space, Checkbox } from 'antd';
import { QuestionType } from 'app/store/questions-reducer/questionsTypes';
import { useDispatch } from 'react-redux/es/exports';

interface QuestionCardProps {
    question: QuestionType & { index: number },
    disabled: boolean
}

const QuestionCard = ({ question, disabled }: QuestionCardProps)=> {
    const dispatch = useDispatch()
    const checkAnswer = (questionIndex: number, answerIndex: number )=> {
        dispatch({type: 'CHECK_ANSWER', payload: { questionIndex, answerIndex }})
    }
    return(
        <Card title={question.question}>
            <Space direction='vertical'>
                {question.answerOptions.map((option, index) => 
                    <Checkbox 
                        key={index} 
                        disabled={disabled}
                        checked = {index === question.checkedAnswer}
                        onChange={() =>checkAnswer(question.index, index)}
                    >
                        {option}
                    </Checkbox>
                )}
            </Space>
        </Card>
    )
}

export default QuestionCard