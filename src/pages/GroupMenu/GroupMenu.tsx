import React from "react";
import { ColorType } from "../../utils/models/colorTypeEnum/color-type.enum";
import { LevelMenuElement } from "./modules/LevelMenuElement";
import styles from './GroupMenu.module.css'

export const GroupMenu: React.FC = () => {

  return (
    <div className={styles.container}>
      <section className={styles.levelSection}>
        <LevelMenuElement color={ColorType.Level1} isOn={false} index={1} recentLevel={7} isScoreBarIsOn={true} />
        <LevelMenuElement color={ColorType.Level2} isOn={false} index={2} recentLevel={7} />
        <LevelMenuElement color={ColorType.Level3} isOn={false} index={3} recentLevel={7} />
        <LevelMenuElement color={ColorType.Level4} isOn={false} index={4} recentLevel={7} />
        <LevelMenuElement color={ColorType.Level5} isOn={false} index={5} recentLevel={7} />
      </section>
      <section className={styles.levelSection}>
      <LevelMenuElement color={ColorType.Level6} isOn={false} index={6} recentLevel={7} />
        <LevelMenuElement color={ColorType.Level7} isOn={false} index={7} recentLevel={7} />
        <LevelMenuElement color={ColorType.Level8} isOn={false} index={8} recentLevel={7} />
        <LevelMenuElement color={ColorType.Level9} isOn={false} index={9} recentLevel={7} />
        <LevelMenuElement color={ColorType.Level10} isOn={false} index={10} recentLevel={7} />
      </section>
    </div>)
}