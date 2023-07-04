import { Card, Space, Radio } from 'antd';
import { QuestionType } from 'app/store/app-reducer/questions';

interface QuestionCardProps {
    question: string,
    answerOptions?: string[]
}

const QuestionCard = ({question, answerOptions}: QuestionCardProps)=> {
    return(
        <Card title={question}>
            <Radio.Group value={1}>
                <Space direction='vertical'>
                    {answerOptions.map((option, index) => <Radio key={index} value={1}>{option}</Radio>)}
                </Space>
            </Radio.Group>
        </Card>
    )
}

export default QuestionCard