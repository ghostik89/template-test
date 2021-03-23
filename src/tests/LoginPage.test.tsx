import React from 'react';
import { render, screen } from '@testing-library/react';
import {HomePage} from "../pages/HomePage";

describe('App', () => {
    test('renders App component', () => {
        render(<HomePage/>);
        // succeeds
        expect(screen.getByText(/some/)).toBeInTheDocument();
    });
});