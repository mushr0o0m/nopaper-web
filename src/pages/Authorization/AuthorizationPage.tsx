/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import styles from './AuthorizationPage.module.css'
import { useAuth } from '../../utils/contextes/AuthContext/useAuth';
import { LoginInputGroup } from './components/LoginInputGroup';
import { ConfirmInputGroup } from './components/ConfirmInputGroup';
import { useNavigate } from 'react-router-dom';

export const AuthorizationPage: React.FC = () => {

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { signIn, isLogining, confirm, refresh } = useAuth();

  const formHandler = () => {
    if (isLogining)
      return confirm(otp).then(() => navigate('/welcome'));
    return signIn(email);
  }


  React.useEffect(() => {
    if (localStorage.getItem('access')) {
      console.log('asdasd')
      refresh();
    }
  }, [])

  return <>
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2 className={styles.loginCard__header}>АвторизА́ция</h2>
        <div>
          {!isLogining ? <LoginInputGroup styles={styles} email={email} setEmail={setEmail} /> :
            <ConfirmInputGroup styles={styles} otp={otp} setOtp={setOtp} email={email} />}
          <div className={styles.loginCard__footer}>
            <button className={styles.button} onClick={() => formHandler()}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  </>
}
