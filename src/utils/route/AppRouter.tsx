import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthorizationPage } from '../../pages/Authorization/AuthorizationPage';
import TestUi from '../../pages/TestUI/TestUi';
import { Welcome } from '../../pages/Welcome/Welcome';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthorizationPage />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/test-ui" element={<TestUi/>}/>
      </Routes>
    </Router>
  );
};