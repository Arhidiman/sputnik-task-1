import { Checkbox } from 'antd';
import { checkAnswer } from '../../store/questions-reducer/questions-reducer';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux/es/exports';
import { AppState } from '../../../index';
import { AppDispatch } from '../../../index';

interface QuestionCardProps {
    disabled: boolean,
    checked: boolean,
    children: string
    payload : {questionIndex: number, answerIndex: number}
}

const OptionCheckbox = ({disabled, checked, children, payload, checkOption}: OptionProps)=> {
    console.log('option rendered')
    return(
        <>
            <Checkbox 
                disabled={disabled}
                checked = {checked}
                onChange={()=> checkOption(payload.questionIndex, payload.answerIndex )}
            >
                {children}
            </Checkbox>
        </>
     
    )
}


const mapState = (state:AppState, ownProps: QuestionCardProps)=>
{
    return {
        disabled: ownProps.disabled,
        checked: ownProps.checked,
        children: ownProps.children,
        payload: ownProps.payload
    }
}

const mapDispatch = (dispatch: AppDispatch)=>
{
    return {
        checkOption: (questionIndex: number, answerIndex: number)=> {dispatch(checkAnswer({questionIndex: questionIndex, answerIndex: answerIndex}))}
    }
}


type OptionProps = ConnectedProps<typeof connector>
const connector = connect(mapState, mapDispatch)
export default connector(React.memo(OptionCheckbox))