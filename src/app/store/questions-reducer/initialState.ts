import { QuestionsState } from "./questionsTypes"

export const initialState: QuestionsState = {
    questionsList: [
        {
            question: 'Ученый, доказавший движение планет вокруг Солнца.',
            answerOptions: [
                'Николай Коперник',
                'Джордано Бруно',
                'Галилео Галилей'
            ],
            checkedAnswer: null,
            rightAnswer: 0,
            isChecked: false
        },
        {
            question: 'Какая планета самая большая в Солнечной системе?',
            answerOptions: [
                'Сатурн',
                'Земля',
                'Юпитер'
            ],
            checkedAnswer: null,
            rightAnswer: 2,
            isChecked: false
        },
        {
            question: 'Какая планета быстрее остальных совершает свой оборот вокруг Солнца?',
            answerOptions: [
                'Меркурий',
                'Венера',
                'Земля',
            ],
            checkedAnswer: null,
            rightAnswer: 0,
            isChecked: false
        },
        {
            question: 'У какой планеты сутки равны году?',
            answerOptions: [
                'Плутон',
                'Венера',
                'Юпитер',
            ],
            checkedAnswer: null,
            rightAnswer: 1,
            isChecked: false
        },
        {
            question: 'Какая планета названа "неправильно"?',
            answerOptions: [
                'Юпитер',
                'Земля',
                'Венера',
            ],
            checkedAnswer: null,
            rightAnswer: 1,
            isChecked: false
        },
        {
            question: 'Планета, которая имеет два спутника - Фобос и Деймос',
            answerOptions: [
                'Марс',
                'Плутон',
                'Меркурий',
            ],
            checkedAnswer: null,
            rightAnswer: 0,
            isChecked: false
        },
        {
            question: 'Планеты земной группы.',
            answerOptions: [
                'Венера, Земля, Марс, Нептун', 
                'Венера, Земля, Марс, Плутон.',
                'Меркурий, Венера, Земля, Марс.',
            ],
            checkedAnswer: null,
            rightAnswer: 2,
            isChecked: false
        },
        {
            question: 'У какой планеты наибольшее количество спутников?',
            answerOptions: [
                'Уран',
                'Юпитер',
                'Сатурн',
            ],
            checkedAnswer: null,
            rightAnswer: 2,
            isChecked: false
        },
        {
            question: 'Что, по одной теории, образовалось после распада планеты Фаэтон?',
            answerOptions: [
                'Солнце',
                'Планета Марс',
                'Пояс астероидов',
            ],
            checkedAnswer: null,
            rightAnswer: 2,
            isChecked: false
        },
        {
            question: 'Планета в Поясе астероидов.',

            answerOptions: [
                'Церера',
                'Эрида',
                'Плутон',
            ],
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