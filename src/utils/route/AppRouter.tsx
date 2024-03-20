import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthorizationPage } from '../../pages/Authorization/AuthorizationPage';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<AuthorizationPage />} />
      </Routes>
    </Router>
  );
};