import React from 'react';
import styles from './styles/levelMenu.module.css'
import { useNavigate } from 'react-router-dom';
import level1 from './../../assets/svg/level1.svg';
import level2 from './../../assets/svg/level2.svg';

const LevelMenu: React.FC = () => {
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

export default LevelMenu