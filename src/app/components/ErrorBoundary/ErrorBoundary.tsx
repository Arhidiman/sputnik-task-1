
import React, {  Component, ReactNode } from "react";
import { GetDerivedStateFromError } from "react";

type ErrorBoundaryProps = {
    children: ReactNode | ReactNode[]
}

class ErrorBoundary extends React.Component <{children: ReactNode}, { error: Error }> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = {
            error: null
        }
    }

   
    static GetDerivedStateFromError(error: Error) {
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
