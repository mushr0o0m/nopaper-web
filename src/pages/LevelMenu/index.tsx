import React from 'react';
import styles from './styles/levelMenu.module.css'
import LevelCard from './components/LevelCard/LevelCard';
import { useRecoilValue } from 'recoil';
import exerciseSelectors from '../Task/exercise.selectors';

const LevelMenu: React.FC = () => {

  const data = useRecoilValue(exerciseSelectors.getExerciseDataByUserStatus)

  const defSetIdByLevel = (levelId: string) => data?.sets.find((el) => el.level === levelId).id || ''

  return (
    <div className='container'>
      <div className={styles.centerArea}>
        <h1 className={styles.text}>ВЫБЕРИТЕ<br />
          УРОВЕНЬ СЛОЖНОСТИ</h1>
        <div className={styles.levels}>
          <LevelCard levelId='first_level' defSetId={defSetIdByLevel('first_level')}/> 
          <LevelCard levelId='second_level' defSetId={defSetIdByLevel('second_level')}/> 
        </div>
      </div>
    </div>
  );
};

export default LevelMenu