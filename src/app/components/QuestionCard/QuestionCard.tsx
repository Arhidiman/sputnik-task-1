import { Card, Space, Checkbox } from 'antd';
import { QuestionType } from '../../store/questions-reducer/questionsTypes'
import { useDispatch } from 'react-redux/es/exports';
import { checkAnswer } from '../../store/questions-reducer/questions-reducer';

interface QuestionCardProps {
    question: QuestionType & { index: number },
    disabled: boolean
}

const QuestionCard = ({ question, disabled }: QuestionCardProps)=> {
    const dispatch = useDispatch()
    const checkOption = (questionIndex: number, answerIndex: number )=> {
        dispatch(checkAnswer({ questionIndex, answerIndex }))
    }
    return(
        <Card title={question.question}>
            <Space direction='vertical'>
                {question && question.answerOptions.map((option, index) => 
                    <Checkbox 
                        key={index} 
                        disabled={disabled}
                        checked = {index === question.checkedAnswer}
                        onChange={() =>checkOption(question.index, index)}
                    >
                        {option}
                    </Checkbox>
                )}
            </Space>
        </Card>
    )
}

export default QuestionCard