import React from 'react';
import Button from '../components/UI/Button/Button';
import SmallButton from '../components/UI/SmallButton/SmallButton.tsx';
import level1 from './svg/level1.svg';
import level2 from './svg/level2.svg';
import background from './svg/background.png';
import styles from './LevelSelectPage.module.css'

const LevelSelectPage = () => {
    return (
        <div className={styles.background}>
            <div className={styles.centerArea}>
                <h1 className={styles.text}>ВЫБЕРИТЕ<br></br>
                    УРОВЕНЬ СЛОЖНОСТИ</h1>
                <div className={styles.levels}>
                    <img src={level1} alt="Your SVG" />
                    <img src={level2} alt="Your SVG" />
                </div>
            </div>
        </div>
    );
};

export default LevelSelectPage;