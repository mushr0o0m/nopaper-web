import Dot, {LevelType} from "../Dot/Dot.tsx";
import {FC} from "react";
import styles from './ScoreBar.module.css';

export interface ScoreBarProps {
    recentLevel: number,
    levelAmount: number,
    className?: string
}

const ProgressBar: FC<ScoreBarProps> = ({
                                            recentLevel,
                                            levelAmount,
                                            className,
                                            ...props}) => {
    const levels: LevelType[] = []
    for (let i = 0; i <= levelAmount; i++) {
        if (i <= recentLevel) {
            levels.push(LevelType.Correct)
        } else {
            levels.push(LevelType.Default)
        }
    }

    return (
        <div {...props} className={[styles.scoreBar, className ?? ''].join(' ')}>
            {levels.map((level): JSX.Element => {
                return <Dot dotType={level} className={['dot--score',level == LevelType.Correct ? 'dot--score-correct' : ''].join(' ')}/>;
            })}
        </div>
    );
};

export default ProgressBar;
