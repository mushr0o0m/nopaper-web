/* eslint-disable react-hooks/exhaustive-deps */
import NotFound from '@/pages/404/NotFound';
import AuthorizationPage from '@/pages/Authorization';
import useAuthMethods from '@/pages/Authorization/hooks/useAuthMethods';
import GroupMenu from '@/pages/GroupMenu/GroupMenu';
import LevelMenu from '@/pages/LevelMenu/LevelMenu';
import SetMenu from '@/pages/SetMenu/SetMenu';
import useExercisesLoad from '@/pages/Task/hooks/useExercisesLoad';
import TaskContent from '@/pages/Task/TaskContent';
import TaskManager from '@/pages/Task/TaskManager';
import TestDnd from '@/pages/TestDnd/TestDnd';
import TestUi from '@/pages/TestUI/TestUi';
import Welcome from '@/pages/Welcome/Welcome';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Settings from "@/pages/Settings/Settings";

const AppRouter: React.FC = () => {
  const { loadUser, guestInit } = useAuthMethods()
  const { loadExercises } = useExercisesLoad()

  useEffect(() => {
    Promise.all([guestInit(), loadUser(), loadExercises()]).catch(() => {})
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} index={true} />
        <Route path="/test-ui" element={<TestUi />} />
        <Route path="/test-dnd" element={<TestDnd />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/auth" element={<AuthorizationPage />} />
        <Route path="/level-menu" element={<LevelMenu />} />
        <Route path="/level-menu/:levelId/set-menu" element={<SetMenu />} />
        <Route path="/level-menu/:levelId/set-menu/:setId/group-menu" element={<GroupMenu />} />
        <Route path="/level-menu/:levelId/set-menu/:setId/group-menu/:groupId/task/" element={<TaskManager />}>
          <Route path=":taskId" element={<TaskContent />} />
        </Route>
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}
export default AppRouter
