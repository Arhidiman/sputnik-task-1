
import { Component } from "react";
// import { ReactNode } from "react";
import { ReactPropTypes } from "react";
import PropTypes from 'prop-types';
import { ReactNode } from "react";
// type ErrorState = {
//     error: null | Error
// }

// type ErrorProps = {
//     children: ReactPropTypes
// }

type ErrorBoundaryState = {
    error: Error
}

type ErrorBoundaryProps = {
    children: ReactNode
}

class ErrorBoundary extends Component <{children: ReactNode}, { error: Error }> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = {
            error: new Error('fail')
        }
    }

   
    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <p>Seems like an error occured!</p>
                    <p>{this.state.error.message}</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
