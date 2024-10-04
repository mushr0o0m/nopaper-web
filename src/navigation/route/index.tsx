/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useExercise } from '../../contextes/ExerciseContext/hooks/useExercise';
import { useAuth } from '../../contextes/AuthContext/hooks/useAuth';
import NotFound from '../../pages/404/NotFound';
import AuthorizationPage from '../../pages/Authorization/AuthPage';
import GroupMenu from '../../pages/GroupMenu/GroupMenu';
import LevelMenu from '../../pages/LevelMenu/LevelMenu';
import SetMenu from '../../pages/SetMenu/SetMenu';
import TaskContent from '../../pages/Task/TaskContent';
import TaskManager from '../../pages/Task/TaskManager';
import TestUi from '../../pages/TestUI/TestUi';
import Welcome from '../../pages/Welcome/Welcome';

const AppRouter: React.FC = () => {
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
export default AppRouter;