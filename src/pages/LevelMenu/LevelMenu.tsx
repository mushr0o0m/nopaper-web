import React from 'react';
import level1 from './svg/level1.svg';
import level2 from './svg/level2.svg';
import styles from './LevelMenu.module.css'

export const LevelMenu: React.FC = () => {
  return (
    <div className='container'>
      <div className={styles.centerArea}>
        <h1 className={styles.text}>ВЫБЕРИТЕ<br />
          УРОВЕНЬ СЛОЖНОСТИ</h1>
        <div className={styles.levels}>
          <button className={styles.selectLevel__button}>
            <img src={level1} />
          </button>
          <button className={styles.selectLevel__button}>
            <img src={level2} />
          </button>
        </div>
      </div>
    </div>
  );
};