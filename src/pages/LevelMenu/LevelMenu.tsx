import React from 'react';
import level1 from './svg/level1.svg';
import level2 from './svg/level2.svg';
import styles from './LevelMenu.module.css'
import { useNavigate } from 'react-router-dom';

export const LevelMenu: React.FC = () => {
  const navigate = useNavigate();

  const navigateToLevel = (levelId: string) => {
    //доступен ли пользователю этот уровень?
    navigate(`/level-menu/${levelId}/set-menu`)
  }

  return (
    <div className='container'>
      <div className={styles.centerArea}>
        <h1 className={styles.text}>ВЫБЕРИТЕ<br />
          УРОВЕНЬ СЛОЖНОСТИ</h1>
        <div className={styles.levels}>
          <button className={styles.selectLevel__button} onClick={() => navigateToLevel('first_level')}>
            <img src={level1} />
          </button>
          <button className={styles.selectLevel__button} onClick={() => navigateToLevel('second_level')}>
            <img src={level2} />
          </button>
        </div>
      </div>
    </div>
  );
};