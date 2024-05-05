import Dot, {LevelType} from "../Dot/Dot.tsx";
import {FC} from "react";
import './ProgressBar.css'

export type LevelInfo = {
    level: number,
    status: LevelType
}

export interface ProgressBarProps {
    levels: LevelInfo[],
    className?: string
}

const ProgressBar: FC<ProgressBarProps> = ({
                                               levels,
                                               className,
                                           ...props}) => {
    levels.sort((a, b) => a.level - b.level);



    return (
        <div {...props} className={['progress-bar', className ?? ''].join(' ')}>
            {levels.map((level): JSX.Element => {
                return <Dot dotType={level.status} />;
            })}
        </div>
    );
};

export default ProgressBar;
