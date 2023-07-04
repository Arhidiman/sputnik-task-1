

export type QuestionType = {
    question: string
    answerOptions: string[],
    checkedAnswer: '' | number,
    rightAnswer: number,
    isChecked: boolean
}

export type QuestionsState = QuestionType[]

type PayloadAction = {
    type: string,
    payload? : any
}

const initialState: QuestionsState = [
    {
        question: 'Ученый, доказавший движение планет вокруг Солнца.',
        answerOptions: ['Николай Коперник', 'Джордано Бруно', 'Галилео Галилей'],
        checkedAnswer: '',
        rightAnswer: 0,
        isChecked: false
    },
    {
        question: 'Какая планета самая большая в Солнечной системе?',
        answerOptions: ['Сатурн', 'Земля', 'Юпитер'],
        checkedAnswer: '',
        rightAnswer: 2,
        isChecked: false
    },
    {
        question: 'Какая планета быстрее остальных совершает свой оборот вокруг Солнца?',
        answerOptions: ['Меркурий', 'Венера', 'Земля'],
        checkedAnswer: '',
        rightAnswer: 0,
        isChecked: false
    },
    {
        question: 'У какой планеты сутки равны году?',
        answerOptions: ['Плутон', 'Венера', 'Юпитер'],
        checkedAnswer: '',
        rightAnswer: 1,
        isChecked: false
    },
    {
        question: 'Какая планета названа "неправильно"?',
        answerOptions: ['Юпитер', 'Земля', 'Венера'],
        checkedAnswer: '',
        rightAnswer: 1,
        isChecked: false
    },
    {
        question: 'Планета, которая имеет два спутника - Фобос и Деймос',
        answerOptions: ['Марс', 'Плутон', 'Меркурий'],
        checkedAnswer: '',
        rightAnswer: 0,
        isChecked: false
    },
    {
        question: 'Планеты земной группы.',
        answerOptions: ['Венера, Земля, Марс, Нептун', 'Венера, Земля, Марс, Плутон.', 'Меркурий, Венера, Земля, Марс.'],
        checkedAnswer: '',
        rightAnswer: 2,
        isChecked: false
    },
    {
        question: 'У какой планеты наибольшее количество спутников?',
        answerOptions: ['Уран', 'Юпитер', 'Сатурн'],
        checkedAnswer: '',
        rightAnswer: 2,
        isChecked: false
    },
    {
        question: 'Что, по одной теории, образовалось после распада планеты Фаэтон?',
        answerOptions: ['Солнце', 'Планета Марс', 'Пояс астероидов'],
        checkedAnswer: '',
        rightAnswer: 2,
        isChecked: false
    },
    {
        question: 'Планета в Поясе астероидов.',
        answerOptions: ['Церера', 'Эрида', 'Плутон'],
        checkedAnswer: '',
        rightAnswer: 2,
        isChecked: false
    }
]


export const questionsReducer = (state= initialState, action: PayloadAction) => {
    switch(action.type) {

    case 'CHECK_ANSWER':  return state

    default: return state

    }
}