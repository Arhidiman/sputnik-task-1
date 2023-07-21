import { QuestionType, QuestionsState, CheckAnswerPayload } from "./questionsTypes"
import { initialState } from "./initialState"

type Action<Payload> = {
    type: string, 
    payload?: Payload
}

const CHECK_ANSWER= 'CHECK_ANSWER'
const GET_RESULT = 'GET_RESULT'

const checkResult = (questions: QuestionType[]) => {
    const result = {
        totalAnswered: 0,
        rightAnswers: 0,
        falseAnswers: 0,
        isChecked: true
    }
    for (const question of questions) {
        if (question.checkedAnswer === null) continue
        if (question.checkedAnswer === question.rightAnswer) {
            result.rightAnswers++
        } else {
            result.falseAnswers++
        }
        result.totalAnswered++
    }
    return result
}

export const questionsReducer = (state = initialState as QuestionsState, action: Action<{questionIndex: number, answerIndex: number}>) => {
    switch (action.type) {
        case CHECK_ANSWER: {
            const newQuestionList = [...state.questionsList]
            const { answerIndex, questionIndex } = action.payload
            newQuestionList[questionIndex] = {
                ...newQuestionList[questionIndex],
                checkedAnswer: answerIndex
            }
            return {
                ...state,
                questionsList: newQuestionList
            }
        }
        case GET_RESULT: return ({ ...state, result: checkResult(state.questionsList) })
        default: return state
    }
}



export const checkAnswer = (payload: CheckAnswerPayload)=> {return {type: CHECK_ANSWER, payload: {questionIndex: payload.questionIndex, answerIndex: payload.answerIndex}}}
export const getResult = () : {type: string} => {return {type: GET_RESULT}}
