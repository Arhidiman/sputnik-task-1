import React from 'react';
import { render } from '@testing-library/react';
import TestComponent from '../testComponent';
import AuthPage from '../Pages/AuthPage/AuthPage';

describe('App component', () => {
    test('it renders', () => {
        // render(<TestComponent/>)
        render(<AuthPage/>)
    });
})