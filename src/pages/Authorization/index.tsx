/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles/authPage.module.css'
import LoginInputGroup from './components/LoginInputGroup'
import ConfirmInputGroup from './components/ConfirmInputGroup'
import { useNavigate } from 'react-router-dom'
import useAuthMethods from './hooks/useAuthMethods'
import Button from '@/shared/Button'
import useHttpLoader from '@/shared/hooks/useHttpLoader'
import isEmailValid from './utils/isEmailValid'
import isOtpValid from './utils/isOtpValid'
import config from '@/config'

const AuthPage: React.FC = () => {
  const { wait, loading } = useHttpLoader()
  const isOtpSentAtLeastOnce = useRef(false)

  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [isOtpWrong, setIsOtpWrong] = useState(false)
  const [isOtpSent, setIsOtpSent] = useState(false)
  const [tick, setTick] = useState(0)

  const navigate = useNavigate()
  const { signIn, confirm } = useAuthMethods()

  const formHandler = () => {
    if (isOtpSent) return sentOtp(otp)

    wait(signIn(email), (resp) => {
      if (resp.status === 'success') {
        setIsOtpSent(true)
      }
    })
  }

  const goBackHandler = () => {
    navigate(-1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prevValue) => (prevValue - 1) % 3)
    }, 750)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const handleOtpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.toString().length < 7) {
      setIsOtpWrong(false)
      setOtp(event.target.value)

      if (isOtpValid(event.target.value) && !isOtpSentAtLeastOnce.current) {
        isOtpSentAtLeastOnce.current = true
        sentOtp(event.target.value.toString())
      }
    }
  }

  const sentOtp = (otp: string) => {
    wait(confirm(otp, email), (resp) => {
      if (resp.status === 'success') {
        navigate('/')
      } else {
        setIsOtpWrong(true)
      }
    })
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.returnButton}>
        <Button onClick={() => goBackHandler()}>Назад</Button>
      </div>
      <div className={styles.loginData}>
        <div className={styles.loginCard}>
          {!isOtpSent ? (
            <LoginInputGroup styles={styles} email={email} setEmail={setEmail} />
          ) : (
            <ConfirmInputGroup
              styles={styles}
              otp={otp}
              handleOtpChange={handleOtpChange}
              email={email}
              isOtpWrong={isOtpWrong}
              sentOtp={() => signIn(email)}
            />
          )}
          <div className={styles.loginCard__confirm}>
            <Button
              className={styles.button}
              isDisable={(!isOtpSent && !isEmailValid(email)) || (isOtpSent && !isOtpValid(otp))}
              onClick={() => formHandler()}
            >
              {loading ? `загрузка${'...'.slice(tick)}` : 'далее'}
            </Button>
          </div>
        </div>
        {!isOtpSent && (
          <p className={styles.loginCard__footer}>
            Нажимая на кнопку "Далее", вы соглашаетесь с условиями{' '}
            <a href={config.userLicenseAgreementUrl} target="_blank">
              Пользовательского соглашения
            </a>{' '}
            и{' '}
            <a href={config.privacyPolicyLink} target="_blank">
              Политики приватности
            </a>
          </p>
        )}
      </div>
    </div>
  )
}

export default AuthPage
