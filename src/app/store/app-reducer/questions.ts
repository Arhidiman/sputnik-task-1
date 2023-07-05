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

// export type Options = {label: string, value: string, disabled: boolean}[]
export type Options = string[]


const checkBoxOptions = [
    // [{label: 'Николай Коперник', value: 'Николай Коперник', disabled: false}, {label: 'Джордано Бруно', value: 'Джордано Бруно', disabled: false}, {label: 'Галилео Галилей', value: 'Галилео Галилей', disabled: false}],
    // [{label: 'Сатурн', value: 'Сатурн', disabled: false}, {label: 'Земля', value: 'Земля', disabled: false}, {label: 'Юпитер', value: 'Юпитер', disabled: false}],
    // [{label: 'Меркурий', value: 'Меркурий', disabled: false},{label: 'Венера', value: 'Венера', disabled: false}, {label: 'Земля', value: 'Земля', disabled: false}],
    // [{label: 'Плутон', value: 'Плутон', disabled: false}, {label: 'Венера', value: 'Венера', disabled: false}, {label: 'Юпитер', value: 'Юпитер', disabled: false}],
    // [{label: 'Юпитер', value: 'Юпитер', disabled: false}, {label: 'Земля', value: 'Земля', disabled: false}, {label: 'Венера', value: 'Венера', disabled: false}],
    // [{label: 'Марс', value: 'Марс', disabled: false}, {label: 'Плутон', value: 'Плутон', disabled: false}, {label: 'Меркурий', value: 'Меркурий', disabled: false}],
    // [{label: 'Венера, Земля, Марс, Нептун', value: 'Венера, Земля, Марс, Нептун', disabled: false}, {label: 'Венера, Земля, Марс, Плутон.', value: 'Венера, Земля, Марс, Плутон.', disabled: false}, {label: 'Меркурий, Венера, Земля, Марс.', value: 'Меркурий, Венера, Земля, Марс.', disabled: false}],
    // [{label: 'Уран', value: 'Уран', disabled: false}, {label: 'Юпитер', value: 'Юпитер', disabled: false}, {label: 'Сатурн', value: 'Сатурн', disabled: false}],
    // [{label: 'Солнце', value: 'Солнце', disabled: false}, {label: 'Планета Марс', value: 'Планета Марс', disabled: false}, {label: 'Пояс астероидов',  value: 'Пояс астероидов', disabled: false}],
    // [{label: 'Церера', value: 'Церера', disabled: false}, {label: 'Эрида', value: 'Эрида', disabled: false}, {label: 'Плутон', value: 'Плутон', disabled: false}],

    ['Николай Коперник','Джордано Бруно','Галилео Галилей'],
    ['Сатурн','Земля', 'Юпитер'],
    ['Меркурий','Венера', 'Земля'],
    ['Плутон', 'Венера', 'Юпитер'],
    ['Юпитер', 'Земля', 'Венера'],
    ['Марс', 'Плутон', 'Меркурий'],
    ['Венера, Земля, Марс, Нептун', 'Венера, Земля, Марс, Плутон.', 'Меркурий, Венера, Земля, Марс.'],
    ['Уран', 'Юпитер', 'Сатурн'],
    ['Солнце', 'Планета Марс', 'Пояс астероидов'],
    ['Церера', 'Эрида', 'Плутон'],

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
    console.log(payload)
    switch(action.type) {
    case 'CHECK_ANSWER': return ({...state, questionsList: []})
    default: return state
    }
}