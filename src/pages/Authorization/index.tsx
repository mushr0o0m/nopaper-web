/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import styles from './styles/authPage.module.css'
import LoginInputGroup from './components/LoginInputGroup'
import ConfirmInputGroup from './components/ConfirmInputGroup'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import authAtom from './auth.atom.ts'
import useAuthMethods from './hooks/useAuthMethods.ts'
import useHttpLoader from '../../shared/hooks/useHttpLoader.ts'

const AuthorizationPage: React.FC = () => {
  const { wait, loading } = useHttpLoader()

  const navigate = useNavigate()
  const authState = useRecoilValue(authAtom)

  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const { signIn, confirm, refresh } = useAuthMethods()

  const formHandler = () => {
    if (authState.isLogining) return confirm(otp).then(() => navigate('/'))

    wait(signIn(email), () => {
      // ...
    })
  }

  React.useEffect(() => {
    if (localStorage.getItem('access')) {
      refresh()
    }
  }, [])

  return (
    <>
      <div className={styles.loginPage}>
        <div className={styles.loginCard}>
          <h2 className={styles.loginCard__header}>АвторизА́ция</h2>
          <div>
            {!authState.isLogining ? (
              <LoginInputGroup styles={styles} email={email} setEmail={setEmail} />
            ) : (
              <ConfirmInputGroup styles={styles} otp={otp} setOtp={setOtp} email={email} />
            )}
            <div className={styles.loginCard__footer}>
              <button className={styles.button} onClick={() => formHandler()}>
                {loading ? 'Загрузка..' : 'Далее'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthorizationPage
