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


const QuestionCard = ({questionIndex, question, answerOptions, checkedAnswer}: QuestionCardProps)=> {
    const dispatch = useDispatch()
    // const checkAnswer = (questionIndex: number, answerIndex: number )=> {
    //     dispatch({type: 'CHECK_ANSWER', payload: {questionIndex: questionIndex, answerIndex: answerIndex }})
    // }

    const checkAnswer = (checked: any)=> {
        console.log(checked)
    }

    return(
        <Card title={question}>
          
            <Space direction='vertical'>
                {answerOptions.map((option, index) => <Checkbox key={index} onChange={checkAnswer}>{option}</Checkbox>)}
            </Space>
           
        </Card>
    )
}

export default QuestionCard