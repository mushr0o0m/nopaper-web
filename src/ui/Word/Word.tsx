import {FC} from "react";

export interface WordProps {
    children: string,
    className?: string
}

function chooseWord(wordLine: string): JSX.Element {
    const words = [
        <path d="M3.5535 1L182.337 8.2259L173.138 84.8472H0.768921L3.5535 1Z" stroke="#6B6C6F" strokeMiterlimit="10"
              strokeDasharray="2 2"/>,
        <path d="M1 10.0164L182 1L173.188 85L4.77083 78.1403L1 10.0164Z" stroke="#6B6C6F" strokeMiterlimit="10"
              strokeDasharray="2 2"/>,
        <path d="M3.5 4L159 0.5L176.5 86L1.5 82L3.5 4Z" stroke="#6B6C6F" strokeMiterlimit="10"
              strokeDasharray="2 2"/>,
        <path d="M1 6.5L170 1.5L183.5 88L6 81.5L1 6.5Z" stroke="#6B6C6F" strokeMiterlimit="10"
              strokeDasharray="2 2"/>,
        <path d="M15 9L159.5 1L185.5 82L1 78L15 9Z" stroke="#6B6C6F" strokeMiterlimit="10" strokeDasharray="2 2"/>,
        <path d="M16.5 1L171.5 11.5L187.5 77L1.5 87.5L16.5 1Z" stroke="#6B6C6F" strokeMiterlimit="10"
              strokeDasharray="2 2"/>,
        <path d="M23.5 7.5L179.5 1.5V76L1 80.5L23.5 7.5Z" stroke="#6B6C6F" strokeMiterlimit="10"
              strokeDasharray="2 2"/>,
        <path d="M19.5 3.5L187.5 1L176.5 86.5L1 81.5L19.5 3.5Z" stroke="#6B6C6F" strokeMiterlimit="10"
              strokeDasharray="2 2"/>,
    ]

    return <svg width="190" height="90" viewBox="0 0 190 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        {words[Math.floor(Math.random() * words.length)]}
        <text x='48%' y='75%' textAnchor="middle" fontSize='57px' fill="#6B6C6F">{wordLine}</text>
    </svg>;
}

const Word: FC<WordProps> = ({
                                 children,
                                 className,
                                 ...props
                             }) => {

    return (
        <div className={className} {...props}>
            {chooseWord(children)}
        </div>
    );
};

export default Word;
