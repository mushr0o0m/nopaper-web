/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import styles from './styles/authPage.module.css'
import LoginInputGroup from './components/LoginInputGroup';
import ConfirmInputGroup from './components/ConfirmInputGroup';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contextes/AuthContext/hooks/useAuth';
import Button from "../../ui/Button/Button";

const AuthorizationPage: React.FC = () => {

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
      <div className={styles.returnButton}>
        <Button linkTo="" onClick={() => navigate(-1)}>Назад</Button>
      </div>
      <div className={styles.loginData}>
        <div className={styles.loginCard}>
          {!isLogining ? <LoginInputGroup styles={styles} email={email} setEmail={setEmail}/> :
              <ConfirmInputGroup styles={styles} otp={otp} setOtp={setOtp} email={email}/>}
          <div className={styles.loginCard__confirm}>
            <Button linkTo={''} className={styles.button} onClick={() => formHandler()}>Далее</Button>
          </div>
        </div>
        {!isLogining ?
        <p className={styles.loginCard__footer}>
          Нажимая на кнопку "Далее", вы соглашаетесь с условиями <a
            href="https://ne-bumaga.tilda.ws/end-user-license-agreement" target="_blank">Пользовательского
          соглашения</a> и <a href="https://ne-bumaga.tilda.ws/privacy-policy" target="_blank">Политики
          приватности</a>
        </p> : ''}
      </div>
    </div>
  </>
}

export default AuthorizationPage
