import React from 'react'

interface LoginInputGroupProps {
  styles: CSSModuleClasses
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
}

const LoginInputGroup: React.FC<LoginInputGroupProps> = ({ email, setEmail, styles }) => {
  return (
    <div className={styles.inputForm + ' ' + styles.inputForm_login}>
      <h2 className={styles.loginCard__header}>Вход в личный кабинет</h2>
      <label className={styles.label} htmlFor="email">
        Укажите ваш email:
      </label>
      <div className={styles.loginCard__input}>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={'example@scalartis.com'}
        />
      </div>
    </div>
  )
}

export default LoginInputGroup
