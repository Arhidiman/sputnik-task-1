import { Space} from 'antd';
import QuestionCard from '../QuestionCard/QuestionCard';
import { useSelector } from 'react-redux/es/exports';
import { QuestionType } from 'app/store/questions-reducer/questionsTypes';
import { AppState } from 'index';

type PagesProps = {
    currentPage: number,
    pageSize: number
}

const getCurrentPage = (currentPage: number, pageSize:number, questions: QuestionType[])=> {
    const indexedQuestions = questions.map((q, i) => ({ ...q, index: i }))
    return indexedQuestions.slice((currentPage - 1) * pageSize, currentPage * pageSize)
}

const Page = ({currentPage, pageSize}: PagesProps)=> {
    const questions = useSelector((state: AppState) => state.questions.questionsList)
    const result = useSelector((state: AppState) => state.questions.result)
    return(
        <Space direction='vertical'>
            {
                getCurrentPage(currentPage, pageSize, questions).map((question)=>
                    <QuestionCard 
                        key={question.index} 
                        question={question}
                        disabled={result.isChecked}
                    />
                )
            }
            {}
        </Space>
    )
}

export default Page