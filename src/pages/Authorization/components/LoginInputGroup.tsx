import React from 'react'

interface LoginInputGroupProps {
  styles: CSSModuleClasses;
  email:string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const LoginInputGroup: React.FC<LoginInputGroupProps> = ({ email, setEmail, styles }) => {
  return <>
    <div className={styles.inputForm}>
      <label className={styles.label} htmlFor="email">Email</label>
      <input className={styles.input} type="email" name="email" id="email"
        value={email} onChange={e => setEmail(e.target.value)}
        placeholder={"example@scalartis.com"}/>
    </div>
  </>
}

export default LoginInputGroup