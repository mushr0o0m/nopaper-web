import {FC} from 'react';
import Book from "../Book/Book.tsx";
import {BookType} from "../../utils/models/colorTypeEnum/book-type.enum.ts";
import styles from './BookTab.module.css'
import {Link} from "react-router-dom";

interface BookTabProps {
    type: BookType,
    active: boolean,
    chosen: boolean,
    linkTo: string
}

const BookName = {
    1: 'Знакомство с людьми \nи животными',
    2: 'Школа',
    3: 'Путешествия по земле'
}

const BookTab: FC<BookTabProps> = ({type, active, chosen, linkTo, ...props}) => {
    return (
        <Link to={linkTo} style={{
            pointerEvents: !chosen && !active || active ? 'auto' : 'none'}}
            className={[styles.tab, active ? '' : styles.faded, chosen ? styles.chosen : ''].join(' ')} {...props}>

            <Book type={type} active={active} linkTo={linkTo}/>
            <div className={styles.title}>
                {BookName[type].split('\n').map((part) => (
                    <p className={styles.text}>{part}</p>
                ))}
            </div>

        </Link>
    );
};

export default BookTab
