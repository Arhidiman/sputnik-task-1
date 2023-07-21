import { initialState } from "../../store/questions-reducer/initialState";
import { questionsReducer, checkAnswer} from "../../store/questions-reducer/questions-reducer";

test('question to be checked', () => {
    const state = initialState
    const newState = questionsReducer(state, checkAnswer({questionIndex: 1, answerIndex: 2}))
    expect(newState.questionsList[1].checkedAnswer).toBe(2)
})