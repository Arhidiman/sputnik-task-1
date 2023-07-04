

export type Question = {
    question: string
    answers: string[],
    checkedAnswer: '' | number,
    rightAnswer: number,
    isChecked: boolean
}

export type QuestionsState = Question[]

type PayloadAction = {
    type: string,
    payload? : any
}

const initialState: QuestionsState = [
    {
        question: '1',
        answers: ['a1', 'b1', 'c1', 'd1'],
        checkedAnswer: '',
        rightAnswer: 2,
        isChecked: false
    },
    {
        question: '2',
        answers: ['a2', 'b2', 'c2', 'd2'],
        checkedAnswer: '',
        rightAnswer: 2,
        isChecked: false
    },
    {
        question: '3',
        answers: ['a3', 'b3', 'c3', 'd3'],
        checkedAnswer: '',
        rightAnswer: 2,
        isChecked: false
    },
    {
        question: '4',
        answers: ['a4', 'b4', 'c4', 'd4'],
        checkedAnswer: '',
        rightAnswer: 2,
        isChecked: false
    },
    {
        question: '5',
        answers: ['a5', 'b5', 'c5', 'd5'],
        checkedAnswer: '',
        rightAnswer: 2,
        isChecked: false
    },
    {
        question: '6',
        answers: ['a6', 'b6', 'c6', 'd6'],
        checkedAnswer: '',
        rightAnswer: 2,
        isChecked: false
    },
    {
        question: '7',
        answers: ['a7', 'b7', 'c7', 'd7'],
        checkedAnswer: '',
        rightAnswer: 2,
        isChecked: false
    },
    {
        question: '8',
        answers: ['a8', 'b8', 'c8', 'd8'],
        checkedAnswer: '',
        rightAnswer: 2,
        isChecked: false
    },
    {
        question: '9',
        answers: ['a9', 'b9', 'c9', 'd9'],
        checkedAnswer: '',
        rightAnswer: 2,
        isChecked: false
    },
    {
        question: '10',
        answers: ['a10', 'b10', 'c10', 'd10'],
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