import React from "react";
import styles from './Welcome.module.css';
import {ClockSvg, GlassesSvg, HandsSvg, HeartSvg } from './svg/index';
import Button from "../../ui/Button/Button";

export const Welcome: React.FC = () => {


  return (
    <div className='container'>
      <section className={styles.section}>
        <p className={styles.section__text}>
          дорогие родители!<br />
        </p>
        <p className={styles.section__text}>
          «неБумага» — игровое приложение <b>для развития навыка чтения.</b>
        </p>
        <br />
        <p className={`${styles.section__text} ${styles.section__text_last}`}>
          В нашем приложении — 300 упражнений разного уровня сложности, составленных <b>экспертами-лингвистами.</b>
        </p>
        <Button>Начать</Button>
        <img className={`${styles.section__img} ${styles.section__img_glasses}`} src={GlassesSvg} alt="Иллюстрация к тексту" />
      </section>
      <section className={`${styles.section} ${styles.section_rightSide}`}>
        <div className={styles.section__text}>
          <p className={styles.section__text_last}>
            В начале игры <b>будьте рядом с ребЁнком</b> и помогайте, если что-то не будет получаться. <b>внимание и поддержка родителя</b> очень важны для когнитивного развития ребёнка.
          </p>
          <Button>Начать</Button>
          <img className={`${styles.section__img} ${styles.section__img_hands}`} src={HandsSvg} alt="Иллюстрация к тексту" />
        </div>
      </section>
      <section className={styles.section}>
        <p className={`${styles.section__text} ${styles.section__text_3}`}>
          дети могут погрузиться <br />
          в приложение и потерять счЁт <br />
          времени. <b>Рекомендуем поставить <br />
            таймер на 20 минут</b>, он <br />
          напомнит, что пора отдохнуть.
        </p>
        <Button>Начать</Button>
        <img className={`${styles.section__img} ${styles.section__img_clock}`} src={ClockSvg} alt="Иллюстрация к тексту" />
      </section>
      <section className={`${styles.section} ${styles.section_rightSide}`}>
        <div className={styles.section__text}>
          <p className={styles.section__text_last}>
          Надеемся, что вашему ребЁнку будет <b>не только полезно, но и приятно</b>  учиться читать. 
          </p>
          <Button>Начать</Button>
          <img className={`${styles.section__img} ${styles.section__img_heart}`} src={HeartSvg} alt="Иллюстрация к тексту" />
        </div>
      </section>
    </div>
  )
}