import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from '../contexts/AuthContext';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import './App.scss';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
