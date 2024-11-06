import React from 'react'

interface ConfirmInputGroupProps {
  styles: CSSModuleClasses;
  otp:string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
  email: string;
}

const ConfirmInputGroup: React.FC<ConfirmInputGroupProps> = ({ otp, setOtp, styles, email }) => {
  return <>
    <div className={styles.inputForm}>
      <p className={styles.confirmLabel}>На email<br/>
        <span className={styles.email}> {email} </span> <br/>
        МЫ ОТПРАВИЛИ цифровой код. <br/>
        Введите его здесь:</p>
      <input className={styles.confirmInput} type="otp" name="otp" id="otp"
        value={otp} onChange={e => setOtp(e.target.value)}
        placeholder={"000000"} />
      <p className={styles.waitLine}>
        повторная отправка возможна через {} сек.
      </p>
    </div>
  </>
}

export default ConfirmInputGroup
