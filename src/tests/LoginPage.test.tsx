import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from "../pages/LoginPage";



describe('Login page', () => {
    test('check header', () => {
        render(<LoginPage/>);
        // succeeds
        expect(screen.getByText('Sign In')).toBeInTheDocument();
    });
});