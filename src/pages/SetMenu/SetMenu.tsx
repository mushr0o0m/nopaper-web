import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useExercise } from "../../contextes/ExerciseContext/hooks/useExercise";
import FirstLevelMenu from "./components/FirstLevelMenu/FirstLevelMenu";


const SetMenu: React.FC = () => {
  const { getData } = useExercise();
  const { levelId } = useParams();
  const navigate = useNavigate();

  const setMenuById = new Map([
    ['first_level', FirstLevelMenu],
  ]);

  if (!levelId) {
    navigate('/404');
    return null;
  }

  const setIds = getData()?.sets
    .filter(set => set.level === levelId)
    .map(set => set.id) || [];

  const MenuComponent = setMenuById.get(levelId);

  if (!MenuComponent) {
    navigate('/404');
    return null;
  }

  return (
    <div className="container">
      <MenuComponent setIds={setIds} tempSetId={setIds[0]} />
    </div>
  )
}

export default SetMenu