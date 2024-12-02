import { FC } from 'react';
import styles from './Book.module.css'
import { Link } from 'react-router-dom';
import BookInactive1 from '@/assets/svg/secondLevelMenu/book-1.svg?react'
import BookInactive2 from '@/assets/svg/secondLevelMenu/book-2.svg?react'
// import BookInactive3 from '@/assets/svg/secondLevelMenu/book-3.svg?react'
import Book1 from '@/assets/svg/secondLevelMenu/book-1-active.svg?react'
import Book2 from '@/assets/svg/secondLevelMenu/book-2-active.svg?react'
// import Book3 from '@/assets/svg/secondLevelMenu/book-3-active.svg?react'
import { LevelIconProps } from '../../setMenu.types';


const levelIconByType: React.FunctionComponent<React.SVGProps<SVGSVGElement>>[] = [
  Book1,
  Book2,
 
]

const levelIconOutlineByType: React.FunctionComponent<React.SVGProps<SVGSVGElement>>[] = [
  BookInactive1,
  BookInactive2,
]

const iconTextByType: React.JSX.Element[] = [
  <>Знакомство<br /> с людьми<br /> и животными</>,
  <>школа</>,
]

const Book: FC<LevelIconProps> = ({ index, isTempSet, isFinished, linkTo, isAvilable }) => {
  const Book = levelIconByType[index]
  return (
    <Link to={linkTo} className={styles.bookIcon}
      style={{
        pointerEvents: (index <= iconTextByType.length) && !isAvilable || isAvilable ? 'auto' : 'none'
      }}>
      <Book className={styles.bookIcon__svg}/>
      <span className={styles.bookIcon__text}>{iconTextByType[Math.floor(index/iconTextByType.length)]}</span>
    </Link>
  );
};

export default Book;
