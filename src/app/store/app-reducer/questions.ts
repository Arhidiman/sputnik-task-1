export type QuestionType = {
    question: string
    answerOptions: Options,
    checkedAnswer: number | null,
    rightAnswer: number,
    isChecked: boolean
}

export type QuestionsState = {
    questionsList: QuestionType[],
    result: Result
}

export type CheckAnswerPayload = { 
    questionIndex: number,
    answerIndex: number
}

type Result = {
    totalAnswered: number,
    rightAnswers: number,
    falseAnswers: number,
    isChecked: boolean
}

export type Action<Payload> = {
    type: string,
    payload? : Payload
}

export type Options = {value: string, disabled: boolean, isChecked: boolean}[]


const checkBoxOptions = [
    [{value: 'Николай Коперник', disabled: false, isChecked: false}, {value: 'Джордано Бруно', disabled: false, isChecked: false}, {value: 'Галилео Галилей', disabled: false, isChecked: false}],
    [{value: 'Сатурн', disabled: false, isChecked: false}, { value: 'Земля', disabled: false, isChecked: false}, {value: 'Юпитер', disabled: false, isChecked: false}],
    [{value: 'Меркурий', disabled: false, isChecked: false},{value: 'Венера', disabled: false, isChecked: false}, {value: 'Земля', disabled: false, isChecked: false}],
    [{value: 'Плутон', disabled: false, isChecked: false}, {value: 'Венера', disabled: false, isChecked: false}, {value: 'Юпитер', disabled: false, isChecked: false}],
    [{value: 'Юпитер', disabled: false, isChecked: false}, {value: 'Земля', disabled: false, isChecked: false}, {value: 'Венера', disabled: false, isChecked: false}],
    [{value: 'Марс', disabled: false, isChecked: false}, {value: 'Плутон', disabled: false, isChecked: false}, {value: 'Меркурий', disabled: false, isChecked: false}],
    [{value: 'Венера, Земля, Марс, Нептун', disabled: false, isChecked: false}, {value: 'Венера, Земля, Марс, Плутон.', disabled: false, isChecked: false}, {value: 'Меркурий, Венера, Земля, Марс.', disabled: false, isChecked: false}],
    [{value: 'Уран', disabled: false, isChecked: false}, {value: 'Юпитер', disabled: false, isChecked: false}, {value: 'Сатурн', disabled: false, isChecked: false}],
    [{value: 'Солнце', disabled: false, isChecked: false}, {value: 'Планета Марс', disabled: false, isChecked: false}, {value: 'Пояс астероидов', disabled: false, isChecked: false}],
    [{value: 'Церера', disabled: false, isChecked: false}, {value: 'Эрида', disabled: false, isChecked: false}, {value: 'Плутон', disabled: false, isChecked: false}],
]   

const initialState: QuestionsState = {

    questionsList: [
        {
            question: 'Ученый, доказавший движение планет вокруг Солнца.',
            answerOptions: checkBoxOptions[0],
            checkedAnswer: null,
            rightAnswer: 0,
            isChecked: false
        },
        {
            question: 'Какая планета самая большая в Солнечной системе?',
            answerOptions: checkBoxOptions[1],
            checkedAnswer: null,
            rightAnswer: 2,
            isChecked: false
        },
        {
            question: 'Какая планета быстрее остальных совершает свой оборот вокруг Солнца?',
            answerOptions: checkBoxOptions[2],
            checkedAnswer: null,
            rightAnswer: 0,
            isChecked: false
        },
        {
            question: 'У какой планеты сутки равны году?',
            answerOptions: checkBoxOptions[3],
            checkedAnswer: null,
            rightAnswer: 1,
            isChecked: false
        },
        {
            question: 'Какая планета названа "неправильно"?',
            answerOptions: checkBoxOptions[4],
            checkedAnswer: null,
            rightAnswer: 1,
            isChecked: false
        },
        {
            question: 'Планета, которая имеет два спутника - Фобос и Деймос',
            answerOptions: checkBoxOptions[5],
            checkedAnswer: null,
            rightAnswer: 0,
            isChecked: false
        },
        {
            question: 'Планеты земной группы.',
            answerOptions: checkBoxOptions[6],
            checkedAnswer: null,
            rightAnswer: 2,
            isChecked: false
        },
        {
            question: 'У какой планеты наибольшее количество спутников?',
            answerOptions: checkBoxOptions[7],
            checkedAnswer: null,
            rightAnswer: 2,
            isChecked: false
        },
        {
            question: 'Что, по одной теории, образовалось после распада планеты Фаэтон?',
            answerOptions: checkBoxOptions[8],
            checkedAnswer: null,
            rightAnswer: 2,
            isChecked: false
        },
        {
            question: 'Планета в Поясе астероидов.',
            answerOptions: checkBoxOptions[9],
            checkedAnswer: null,
            rightAnswer: 2,
            isChecked: false
        }
    ],
    result: {
        totalAnswered: 0,
        rightAnswers: 0,
        falseAnswers: 0,
        isChecked: false
    }   
}




const checkResult = (questions: QuestionType[])=> {
    console.log('check')
    const result = {
        totalAnswered: 0,
        rightAnswers: 0,
        falseAnswers: 0,
        isChecked: true
    }
    for(const question of questions) {
        const isChecked = question.isChecked
        const isTrue = question.checkedAnswer === question.rightAnswer
        const isFalse = (question.checkedAnswer !==null || question.checkedAnswer === 0) && (question.checkedAnswer !== question.rightAnswer)
        if(isChecked) {
            result.totalAnswered +=1
        }
        if(isTrue) {
            result.rightAnswers +=1
        }
        if(isFalse) {
            console.log('add false answer')
            result.falseAnswers +=1
        }
        for(const option of question.answerOptions) {
            option.disabled = true
        }
    }
    return result
}


export const questionsReducer = (state = initialState as QuestionsState, action: Action<CheckAnswerPayload>) => {
    const payload = action.payload
    switch(action.type) {
    case 'CHECK_ANSWER': return ({...state, questionsList: state.questionsList.map((question, index)=>{
        const newQuestion = question
        const questionIndex = payload.questionIndex
        if (questionIndex === index) {
            const answerIndex = payload.answerIndex
            const answers = newQuestion.answerOptions
            for (const answer of answers) {
                answer.isChecked = false
            }
            newQuestion.answerOptions[answerIndex].isChecked = true
            newQuestion.isChecked = true
            newQuestion.checkedAnswer = answerIndex
        }
        return newQuestion
    })})
    case 'GET_RESULT': return ({...state, result: checkResult(state.questionsList)})
    default: return state
    }
}


