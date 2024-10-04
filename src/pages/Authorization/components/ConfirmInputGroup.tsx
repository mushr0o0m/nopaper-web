import React from 'react'

interface ConfirmInputGroupProps {
  styles: CSSModuleClasses;
  otp:string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
  email: string;
}

export const ConfirmInputGroup: React.FC<ConfirmInputGroupProps> = ({ otp, setOtp, styles, email }) => {
  return <>
    <div className={styles.inputForm}>
      <label className={styles.label} htmlFor="otp">Код подтверждения - {email}</label>
      <input className={styles.input} type="otp" name="otp" id="otp"
        value={otp} onChange={e => setOtp(e.target.value)}
        placeholder={"000000"} />
    </div>
  </>
}
