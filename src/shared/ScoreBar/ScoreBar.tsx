import { FC } from "react";
import styles from './ScoreBar.module.css';
import { IUserProgress } from "@/pages/Settings/user.types.js";
import Dot from '@/assets/svg/scoreBar/dot.svg?react'

export interface ScoreBarProps {
  groupProgress: IUserProgress
  className?: string
}

const ProgressBar: FC<ScoreBarProps> = ({
  groupProgress,
  className,
}) => {

  const colorByProgress = (IsTaskSolved: boolean | null) => {
    switch (IsTaskSolved) {
      case true:
        return '--success'
      case false:
        return '--alert'
      default:
        return '--white'
    }
  }

  return (
    <div className={[styles.bar, className ?? ''].join(' ')}>
      {Object.values(groupProgress).map((isTaskSolved, index): JSX.Element =>
        <Dot
          key={index}
          style={{
            color: `var(${colorByProgress(isTaskSolved)})`,
            transform: 'translateX(-12px)'
          }}
        />
      )}
    </div>
  );
};

export default ProgressBar;
