import React from 'react';
import styles from './styles/levelMenu.module.css'
import LevelCard from './components/LevelCard/LevelCard';
import { useRecoilValue } from 'recoil';
import exerciseSelectors from '../Task/exercise.selectors';

const LevelMenu: React.FC = () => {

  const data = useRecoilValue(exerciseSelectors.getExerciseDataByUserStatus)

  return (
    <div className='container'>
      <div className={styles.centerArea}>
        <h1 className={styles.text}>ВЫБЕРИТЕ<br />
          УРОВЕНЬ СЛОЖНОСТИ</h1>
        <div className={styles.levels}>
          <LevelCard level={'level_1'} levelId='first_level' defSetId={data?.sets[0].id}/> 
          <LevelCard level={'level_2'} levelId='second_level' defSetId={data?.sets[0].id}/> 
        </div>
      </div>
    </div>
  );
};

export default LevelMenu