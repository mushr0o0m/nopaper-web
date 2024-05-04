/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthorizationPage } from '../../pages/Authorization/AuthorizationPage';
import TestUi from '../../pages/TestUI/TestUi';
import { Welcome } from '../../pages/Welcome/Welcome';
import { NotFound } from '../../pages/404/NotFound';
import { LevelMenu } from '../../pages/LevelMenu/LevelMenu';
import { CheckAuth } from './components/CheckAuth';
import { useAuth } from '../contextes/AuthContext/useAuth';

export const AppRouter: React.FC = () => {
  const {updateUserFromApi} = useAuth();
  useEffect(() => {
    updateUserFromApi();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CheckAuth><Welcome /></CheckAuth>} />
        <Route path="/auth" element={ <AuthorizationPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/test-ui" element={<TestUi/>}/>
        <Route path="/level-menu" element={<LevelMenu/>}/>
      </Routes>
    </Router>
  );
};