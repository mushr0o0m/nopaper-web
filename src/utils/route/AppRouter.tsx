import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthorizationPage } from '../../pages/Authorization/AuthorizationPage';
import TestUi from '../../pages/TestUI/TestUi';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthorizationPage />} />
        <Route path="/test-ui" element={<TestUi/>}/>
      </Routes>
    </Router>
  );
};