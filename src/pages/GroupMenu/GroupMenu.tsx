import React from "react";
import { LevelMenuElement } from "./modules/LevelMenuElement";
import styles from './GroupMenu.module.css'
import { useNavigate, useParams } from "react-router-dom";
import { useExercise } from "../../utils/contextes/ExerciseContext/useExercise";

export const GroupMenu: React.FC = () => {
  const { getData } = useExercise();
  const { setId } = useParams();
  const navigate = useNavigate();

  if (!setId) {
    navigate('/404');
    return null;
  }

  const groupIds = getData()?.groups
    .filter(group => group.set === setId)
    .map(group => group.id) || [];

  return (
    <div className="container">
      {[0, 5].map(n => (
        <section key={n} className={styles.levelSection}>
          {groupIds.slice(n, n + 5).map((id, index) => (
            <LevelMenuElement
              linkTo={`${id}/task`}
              key={id} colorIndex={index + 1 + n}
              isOn={true}
              index={index + 1 + n} />
          ))}
        </section>
      ))}
    </div>)
}