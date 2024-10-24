/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import styles from './styles/authPage.module.css'
import LoginInputGroup from './components/LoginInputGroup';
import ConfirmInputGroup from './components/ConfirmInputGroup';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../recoil/auth/hooks/auth.hook';
import { useRecoilValue } from 'recoil';
import { authState } from '../../recoil/auth/auth.atom';

const AuthorizationPage: React.FC = () => {

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { signIn, confirm, refresh } = useAuth();
  const authDate = useRecoilValue(authState)

  const formHandler = () => {
    if (authDate.isLogining)
      return confirm(otp).then(() => navigate('/'));
    return signIn(email);
  }

  React.useEffect(() => {
    if (localStorage.getItem('access')) {
      refresh();
    }
  }, [])

  return <>
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2 className={styles.loginCard__header}>АвторизА́ция</h2>
        <div>
          {!authDate.isLogining ? <LoginInputGroup styles={styles} email={email} setEmail={setEmail} /> :
            <ConfirmInputGroup styles={styles} otp={otp} setOtp={setOtp} email={email} />}
          <div className={styles.loginCard__footer}>
            <button className={styles.button} onClick={() => formHandler()}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default AuthorizationPage