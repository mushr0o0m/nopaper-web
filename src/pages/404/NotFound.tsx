import React from "react";
import Button from "../../ui/Button/Button";
import styles from './styles/notFound.module.css'
import SadManSvg from "./modules/SadManSvg";

const NotFound: React.FC = () => {

  return (
    <main className={styles.main}>
      <div className={styles.main__body}>
        <SadManSvg height={423} width={247} style={styles.menSvg}/>
        <div className={styles.body__text}>
          <h1 className={styles.title}>Ошибка 404</h1>
          <p className={styles.descr}>К сожалению, страница не найдена</p>
          <Button linkTo={""}>Вернуться домой</Button>
        </div>
      </div>
    </main>
  )
}

export default NotFound