import {FC} from 'react';
import {BookType} from "../../utils/models/colorTypeEnum/book-type.enum.js";
import {Link} from "react-router-dom";
import styles from "./Book.module.css";

interface BookProps {
    type: BookType,
    active: boolean,
    linkTo: string,
}

const Book: FC<BookProps> = ({ type, active, linkTo, ...props }) => {
    return (
        <Link to={linkTo} className={styles.book}
              style={{
                  pointerEvents: active ? 'auto' : 'none'
              }}>
            {active ? (
                <img {...props} src={`/public/images/Shapes/book-${type}-active.svg`}
                     className={[styles.part, styles.shape].join(' ')}
                     alt=''/>
            ) : (
                <img {...props} src={`/public/images/Shapes/book-${type}.svg`}
                     className={[styles.part, styles.shape].join(' ')}
                     alt=''/>
            )}
        </Link>
    );
};

export default Book;
