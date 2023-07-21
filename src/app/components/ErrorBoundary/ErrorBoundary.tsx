
import { ReactNode, Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

class ErrorBoundary extends Component <{children: ReactNode, message: string}> {
    state: {error: Error | null} = {
        error: null
    }
    static getDerivedStateFromError(error: Error) {
        return { error };
    }
    render() {
        const {error} = this.state
        if (error) {
            return (
                <div className="error-boundary">
                    <p>Ошибка!</p>
                    <p>{this.props.message}</p>
                    <Link to='/'><Button>Вернуться на главную страницу</Button></Link>
                </div>
            );
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
