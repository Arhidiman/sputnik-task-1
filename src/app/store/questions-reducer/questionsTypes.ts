export type QuestionType = {
    question: string
    answerOptions: Options,
    checkedAnswer: number | null,
    rightAnswer: number,
    isChecked: boolean
}

export type QuestionsState = {
    questionsList: QuestionType[] | null,
    result: Result,
}

export type CheckAnswerPayload = {
    questionIndex: number,
    answerIndex: number
}

export type Result = {
    totalAnswered: number,
    rightAnswers: number,
    falseAnswers: number,
    isChecked: boolean
}

export type Action<Payload> = {
    type: string,
    payload?: Payload
}

export type Options = string[]