import { FC } from "react";
import './Dot.css'

export enum LevelType {
    Default = 'var(--light-grey)',
    Correct = 'var(--success)',
    Wrong = 'var(--alert-wrong)',
    Current = 'var(--beige-bg)'
}

export interface DotProps {
    className?: string,
    dotType: LevelType
}

const Dot: FC<DotProps> = ({
    className,
    dotType,
    ...props }) => {

    return <i className={`${className} dotElement`}>
        {LevelType.Current === dotType ? (
            <svg className='dot--current dot' {...props} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.86008 5.21791L3.86041 5.21752C5.94357 2.78365 8.27578 1.93969 10.4509 2.00332C12.693 2.06891 14.9607 3.10942 16.7531 4.79205C18.5466 6.4757 19.7308 8.67754 19.9592 10.8833C20.1806 13.0206 19.526 15.3021 17.376 17.3609C15.166 19.4771 12.8968 20.1358 10.8583 19.9775C8.76674 19.8151 6.72161 18.7739 5.09716 17.1493C1.77022 13.822 0.783893 8.81012 3.86008 5.21791Z" fill={dotType} stroke='var(--light-grey)' strokeWidth="4" />
            </svg>
        ) : (
            <svg className='dot' {...props}  width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.48971 2.49265C-3.56765 8.39837 5.34157 18.2833 11.9377 11.9671C18.5338 5.65079 7.74281 -4.81317 1.48971 2.49265Z"
                    fill={dotType} />
            </svg>
        )}
    </i>
};

export default Dot;
