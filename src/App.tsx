import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import { CookiesProvider } from 'react-cookie';


function App() {
  return (
      <CookiesProvider>
        <LoginPage/>
      </CookiesProvider>
  );
}

export default App;
