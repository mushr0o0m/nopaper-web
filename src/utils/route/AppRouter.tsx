/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthorizationPage } from '../../pages/Authorization/AuthorizationPage';
import TestUi from '../../pages/TestUI/TestUi';
import { Welcome } from '../../pages/Welcome/Welcome';
import { NotFound } from '../../pages/404/NotFound';
import { useAuth } from '../contextes/AuthContext/useAuth';
import { GroupMenu } from '../../pages/GroupMenu/GroupMenu';
import { LevelMenu } from '../../pages/LevelMenu/LevelMenu'

export const AppRouter: React.FC = () => {
  const {updateUserFromApi} = useAuth();
  useEffect(() => {
    updateUserFromApi();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/auth" element={ <AuthorizationPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/test-ui" element={<TestUi/>}/>
        <Route path="/level-menu" element={<LevelMenu/>}/>
        <Route path="/group-menu" element={<GroupMenu/>}/>
      </Routes>
    </Router>
  );
};