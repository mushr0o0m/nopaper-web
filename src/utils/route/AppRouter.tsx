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
import { SetMenu } from '../../pages/SetMenu/SetMenu';
import { useExercise } from '../contextes/ExerciseContext/useExercise';
import { TaskManager } from '../../pages/Task/TaskManager';
import { TaskContent } from '../../pages/Task/TaskContent';

export const AppRouter: React.FC = () => {
  const { updateUserFromApi } = useAuth();
  const { checkAndFetchIfNeeded } = useExercise();
  useEffect(() => {
    updateUserFromApi();
    checkAndFetchIfNeeded();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/test-ui" element={<TestUi />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/auth" element={<AuthorizationPage />} />
        <Route path="/level-menu" element={<LevelMenu />} />
        <Route path="/level-menu/:levelId/set-menu" element={<SetMenu />} />
        <Route path="/level-menu/:levelId/set-menu/:setId/group-menu" element={<GroupMenu />} />
        <Route path="/level-menu/:levelId/set-menu/:setId/group-menu/:groupId/task/" element={<TaskManager />}>
          <Route path=":taskId" element={<TaskContent />} />
        </Route>
      </Routes>
    </Router>
  );
};