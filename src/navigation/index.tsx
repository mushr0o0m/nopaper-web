/* eslint-disable react-hooks/exhaustive-deps */
import NotFound from '@/pages/404/NotFound';
import AuthorizationPage from '@/pages/Authorization';
import useAuthMethods from '@/pages/Authorization/hooks/useAuthMethods';
import GroupMenu from '@/pages/GroupMenu';
import LevelMenu from '@/pages/LevelMenu';
import Settings from '@/pages/Settings';
import useSettingsMethods from '@/pages/Settings/hooks/useSettingsMethods';
import TaskManager from '@/pages/Task';
import useExercisesLoad from '@/pages/Task/hooks/useExercisesLoad';
import TaskContent from '@/pages/Task/modules/TaskContent';
import TestDnd from '@/pages/TestDnd/TestDnd';
import Welcome from '@/pages/Welcome/Welcome';
import Loader from '@/shared/PageLoader';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter: React.FC = () => {
  const { guestInit } = useAuthMethods()
  const { loadUser } = useSettingsMethods()
  const { loadExercises } = useExercisesLoad()

  useEffect(() => {
    Promise.all([guestInit(), loadUser(), loadExercises()]).catch(() => {})
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} index={true} />
        <Route path="/test-dnd" element={<TestDnd />} />
        <Route path="/test-loader" element={<Loader />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/auth" element={<AuthorizationPage />} />
        <Route path="/level-menu" element={<LevelMenu />} />
        <Route path="/level-menu/:levelId/set-menu/:setId/group-menu" element={<GroupMenu />} />
        <Route path="/level-menu/:levelId/set-menu/:setId/group-menu/:groupId/task/" element={<TaskManager />}>
          <Route path=":taskId" element={<TaskContent />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default AppRouter
