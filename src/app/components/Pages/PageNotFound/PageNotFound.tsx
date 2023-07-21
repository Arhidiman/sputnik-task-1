
import { Link } from "react-router-dom"
import { Button } from "antd"

const PageNotFound = () => {
    return(
        <div className="page-not-found ">
            <h1 className="page-page-not-found -message">Страницы не существует</h1>
            <Link to='/'>
                <Button>
                    Вернуться на главную страницу
                </Button>               
            </Link>
        </div>
    )
}

export default PageNotFound