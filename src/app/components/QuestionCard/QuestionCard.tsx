import { Card, Space } from 'antd';
import { QuestionType } from '../../store/questions-reducer/questionsTypes'
import OptionCheckbox from './QuestionCheckbox/OptionCheckbox';
import React from 'react';

interface QuestionCardProps {
    question: QuestionType & { index: number },
    disabled: boolean
}

const QuestionCard = ({ question, disabled }: QuestionCardProps)=> {
    return(
        <Card title={question.question}>
            <Space direction='vertical'>
                {question && question.answerOptions.map((option, index) => 
                    <OptionCheckbox 
                        key={index} 
                        disabled={disabled}
                        checked = {index === question.checkedAnswer}
                        payload = {{questionIndex: question.index, answerIndex: index}}
                    >
                        {option}        
                    </OptionCheckbox>
                )}
            </Space>
        </Card>
    )
}

export default React.memo(QuestionCard)