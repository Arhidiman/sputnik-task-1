
// import { Component } from "react";

// type ErrorState = {
//     error: null | Error
// }


// class ErrorBoundary extends Component {
//     constructor(props) {
//         this.err = props.err
//     }

//     state: ErrorState = {
//         error: null,
//     };
//     static getDerivedStateFromError(error: Error) {
//         return { error };
//     }
//     render() {
//         const { error } = this.state;

//         if (error) {
//             return (
//                 <div>
//                     <p>Seems like an error occured!</p>
//                     <p>{error.message}</p>
//                 </div>
//             );
//         }
//         return this.props.children;
//     }
// }

// export default ErrorBoundary;