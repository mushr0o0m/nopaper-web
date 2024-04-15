import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthorizationPage } from '../../pages/Authorization/AuthorizationPage';
import TestUi from '../../pages/TestUI/TestUi';
import { Welcome } from '../../pages/Welcome/Welcome';
import { NotFound } from '../../pages/404/NotFound';
import { LevelMenu } from '../../pages/LevelMenu/LevelMenu';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthorizationPage />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/test-ui" element={<TestUi/>}/>
        <Route path="/level-menu" element={<LevelMenu/>}/>
      </Routes>
    </Router>
  );
};