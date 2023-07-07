import { Space} from 'antd';
import QuestionCard from '../QuestionCard/QuestionCard';
import { useSelector } from 'react-redux/es/exports';
import { QuestionType } from 'app/store/app-reducer/questions';
import { AppState } from 'index';




type PagesProps = {
    currentPage: number,
    pageSize: number
}


const getCurrentPage = (currentPage: number, pageSize:number, questions: QuestionType[])=> {
    const firstCard =  currentPage === 1 ? 0 : pageSize*currentPage - pageSize
    const lastCard = firstCard + pageSize > questions.length-1 ? questions.length - 1 : firstCard + (pageSize - 1)
    const page = []
    for (let i = firstCard; i<=lastCard; i++) {
        const question={questionNumber: i, question: questions[i]}
        page.push(question)
    }
    return page
}

const Page = ({currentPage, pageSize}: PagesProps)=> {
    const questions = useSelector((state: AppState)=> state.questions.questionsList)
    return(
        <Space direction='vertical'>
            {
                getCurrentPage(currentPage , pageSize, questions).map((option, index)=>
                    <QuestionCard 
                        key={index} 
                        questionIndex={option.questionNumber}
                        question={option.question.question} 
                        answerOptions={option.question.answerOptions}
                        checkedAnswer={option.question.checkedAnswer}/>
                )
            }
            {}


         
        </Space>
    )
}

export default Page