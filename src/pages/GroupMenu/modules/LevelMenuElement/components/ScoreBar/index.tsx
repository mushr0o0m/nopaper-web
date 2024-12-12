import { FC } from "react";
import styles from './styles/index.module.css';
import { IUserProgress } from "@/pages/Settings/user.types.js";
import Dot from '@/assets/svg/scoreBar/dot.svg?react'
import colorByProgress from "@/pages/Task/utils/colorByProgress";

export interface ScoreBarProps {
  groupProgress: IUserProgress
  className?: string
}

const ProgressBar: FC<ScoreBarProps> = ({
  groupProgress,
  className,
}) => {

  return (
    <div className={[styles.bar, className ?? ''].join(' ')}>
      {Object.values(groupProgress).map((isTaskSolved, index) =>
        <Dot
          key={index}
          className={styles.bar__dot}
          style={{
            color: `var(${colorByProgress(isTaskSolved)})`,
            left:  `${12 * index}px`
          }}
        />
      )}
    </div>
  );
};

export default ProgressBar;
