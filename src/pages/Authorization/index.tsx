/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import styles from './styles/authPage.module.css'
import LoginInputGroup from './components/LoginInputGroup';
import ConfirmInputGroup from './components/ConfirmInputGroup';
import { useNavigate } from 'react-router-dom';
import useAuthMethods from './hooks/useAuthMethods';
import Button from '@/shared/Button';
import useHttpLoader from '@/shared/hooks/useHttpLoader';
import isEmailValid from './utils/isEmailValid';
import isOtpValid from './utils/isOtpValid';

const AuthPage: React.FC = () => {
  const { wait, loading } = useHttpLoader()
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpWrong, setIsOtpWrong] = useState(false)
  const [isOtpWasSentAuto, setIsOtpWasSentAuto] = useState(false)
  const [isLogining, setIsLogining] = useState(false)
  const navigate = useNavigate();
  const { signIn, confirm, refresh, otpEntryAborted } = useAuthMethods();


const formHandler = () => {
    if (isLogining) return sentOtp(otp)

    wait(signIn(email), (resp) => {
      if(resp.status === 'success'){
        setIsLogining(true)
      }
    })
  }

  const goBackHandler = () => {
    otpEntryAborted()
    navigate(-1)
  }

  useEffect(() => {
    if (localStorage.getItem('access')) {
      refresh();
    }

    return () => otpEntryAborted()
  }, [])

  const handleOtpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.toString().length < 7) {
      setIsOtpWrong(false)
      setOtp(event.target.value)

      if (isOtpValid(event.target.value) && !isOtpWasSentAuto) {
        setIsOtpWasSentAuto(true)
        sentOtp(event.target.value.toString())
      }
    }}

  const sentOtp = (otp: string) => {
    wait(confirm(otp, email), (resp) => {
      if(resp.status === 'error'){
        setIsOtpWrong(true)
      }
      else if(resp.status === 'success'){
        navigate('/')
      }
    })
  }


  return <>
    <div className={styles.loginPage}>
      <div className={styles.returnButton}>
        <Button onClick={() => goBackHandler()}>Назад</Button>
      </div>
      <div className={styles.loginData}>
        <div className={styles.loginCard}>
          {!isLogining ? <LoginInputGroup styles={styles} email={email} setEmail={setEmail} /> :
            <ConfirmInputGroup 
            styles={styles} 
            otp={otp} 
            handleOtpChange={handleOtpChange}
            email={email} 
            isOtpWrong={isOtpWrong}
            sentOtp={() => signIn(email)}
            />}
          <div className={styles.loginCard__confirm}>
            <Button
              className={styles.button}
              isDisable={!isLogining && !isEmailValid(email) || isLogining && !isOtpValid(otp)}
              onClick={() => formHandler()}>
              {loading ? 'Загрузка..' : 'Далее'}
            </Button>
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

export default AuthPage
