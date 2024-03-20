import React from 'react'
import styles from './AuthorizationPage.module.css'

export const AuthorizationPage: React.FC = () => {


  return <>
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2 className={styles.loginCard__header}>АвторизА́ция</h2>
        <form action="" method="post">
          <div className={styles.inputForm}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input className={styles.input} type="email" name="email" id="email"
              placeholder="example@scalartis.com" />
          </div>
          <div className={styles.loginCard__footer}>
            <button className={styles.button}>Отправить</button>
          </div>
        </form>
      </div>
    </div>
  </>
}
