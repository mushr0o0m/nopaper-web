import React from "react";
import { ColorType } from "../../utils/models/colorTypeEnum/color-type.enum";
import { LevelMenuElement } from "./modules/LevelMenuElement";
import styles from './LevelMenu.module.css'

export const LevelMenu: React.FC = () => {

  return (
    <div className={`${'container'}`}>
      <section className={styles.levelSection}>
        <LevelMenuElement color={ColorType.Level2} isOn={false} index={1} recentLevel={7} isScoreBarIsOn={true} />
        <LevelMenuElement color={ColorType.Level2} isOn={false} index={1} recentLevel={7} />
      </section>
    </div>)
}