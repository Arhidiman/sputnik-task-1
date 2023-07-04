import { Card, Space, Radio } from 'antd';


interface QuestionProps {
    question: string
}

const QuestionCard = ({question}: QuestionProps)=> {
    return(
        <Card title={question}>
            <Radio.Group value={1}>
                <Space direction='vertical'>
                    <Radio value={1}>answ 1</Radio>
                    <Radio value={2}>answ 2</Radio>
                    <Radio value={3}>answ 3</Radio>
                    <Radio value={4}>answ 4</Radio>
                </Space>
            </Radio.Group>
        </Card>
    )
}

export default QuestionCard