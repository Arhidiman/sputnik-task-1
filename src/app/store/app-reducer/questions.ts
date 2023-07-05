export type QuestionType = {
    question: string
    answerOptions: Options,
    checkedAnswer: number,
    rightAnswer: number,
    isChecked: boolean
}

export type QuestionsState = {
    questionsList: QuestionType[]
}


export type CheckAnswerPayload = { 
    questionIndex: number,
    answerIndex: number
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

    // ['Николай Коперник','Джордано Бруно','Галилео Галилей'],
    // ['Сатурн','Земля', 'Юпитер'],
    // ['Меркурий','Венера', 'Земля'],
    // ['Плутон', 'Венера', 'Юпитер'],
    // ['Юпитер', 'Земля', 'Венера'],
    // ['Марс', 'Плутон', 'Меркурий'],
    // ['Венера, Земля, Марс, Нептун', 'Венера, Земля, Марс, Плутон.', 'Меркурий, Венера, Земля, Марс.'],
    // ['Уран', 'Юпитер', 'Сатурн'],
    // ['Солнце', 'Планета Марс', 'Пояс астероидов'],
    // ['Церера', 'Эрида', 'Плутон'],
]   

const initialState: QuestionsState = {

    questionsList: [
        {
            question: 'Ученый, доказавший движение планет вокруг Солнца.',
            answerOptions: checkBoxOptions[0],
            checkedAnswer: 0,
            rightAnswer: 0,
            isChecked: false
        },
        {
            question: 'Какая планета самая большая в Солнечной системе?',
            answerOptions: checkBoxOptions[1],
            checkedAnswer: 0,
            rightAnswer: 2,
            isChecked: false
        },
        {
            question: 'Какая планета быстрее остальных совершает свой оборот вокруг Солнца?',
            answerOptions: checkBoxOptions[2],
            checkedAnswer: 0,
            rightAnswer: 0,
            isChecked: false
        },
        {
            question: 'У какой планеты сутки равны году?',
            answerOptions: checkBoxOptions[3],
            checkedAnswer: 0,
            rightAnswer: 1,
            isChecked: false
        },
        {
            question: 'Какая планета названа "неправильно"?',
            answerOptions: checkBoxOptions[4],
            checkedAnswer: 0,
            rightAnswer: 1,
            isChecked: false
        },
        {
            question: 'Планета, которая имеет два спутника - Фобос и Деймос',
            answerOptions: checkBoxOptions[5],
            checkedAnswer: 0,
            rightAnswer: 0,
            isChecked: false
        },
        {
            question: 'Планеты земной группы.',
            answerOptions: checkBoxOptions[6],
            checkedAnswer: 0,
            rightAnswer: 2,
            isChecked: false
        },
        {
            question: 'У какой планеты наибольшее количество спутников?',
            answerOptions: checkBoxOptions[7],
            checkedAnswer: 0,
            rightAnswer: 2,
            isChecked: false
        },
        {
            question: 'Что, по одной теории, образовалось после распада планеты Фаэтон?',
            answerOptions: checkBoxOptions[8],
            checkedAnswer: 0,
            rightAnswer: 2,
            isChecked: false
        },
        {
            question: 'Планета в Поясе астероидов.',
            answerOptions: checkBoxOptions[9],
            checkedAnswer: 0,
            rightAnswer: 2,
            isChecked: false
        }
    ]    
}


export const questionsReducer = (state = initialState as QuestionsState, action: Action<CheckAnswerPayload>) => {
    const payload = action.payload
    switch(action.type) {
    case 'CHECK_ANSWER': return ({...state, questionsList: state.questionsList.map((question, index)=>{
        const newQuestion = question
        if (payload.questionIndex === index) {
            const answerIndex = payload.answerIndex
            const answers = newQuestion.answerOptions
            for (const answer of answers) {
                answer.isChecked = false
            }
            newQuestion.answerOptions[answerIndex].isChecked = true
        }
        return newQuestion
    })})
    default: return state
    }
}