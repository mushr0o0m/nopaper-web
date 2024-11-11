import Dot, {LevelType} from "../Dot/index.jsx";
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
        <div {...props} className={[styles.bar, className ?? ''].join(' ')}>
            {levels.map((level, index): JSX.Element =>
                <Dot key={index} dotType={level} className={['dot--score',level == LevelType.Correct ? 'dot--score-correct' : ''].join(' ')}/>
            )}
        </div>
    );
};

export default ProgressBar;
