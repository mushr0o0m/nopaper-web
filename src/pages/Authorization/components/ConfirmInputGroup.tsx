import React from 'react'
import useResendTimout from '@/pages/Authorization/hooks/useResendTimout'

interface ConfirmInputGroupProps {
  styles: CSSModuleClasses
  otp: string
  email: string
  handleOtpChange: (otp: React.ChangeEvent<HTMLInputElement>) => void
  isOtpWrong: boolean
  sentOtp: () => void
}

const ConfirmInputGroup: React.FC<ConfirmInputGroupProps> = ({
  otp,
  styles,
  email,
  handleOtpChange,
  isOtpWrong,
  sentOtp,
}) => {
  const { resendAvailable, secondsRemaining, resend: resendCode } = useResendTimout({ resendFunction: sentOtp })

  return (
    <div className={styles.inputForm}>
      <p className={styles.confirmLabel}>
        На email
        <br />
        <span className={styles.email}> {email} </span> <br />
        МЫ ОТПРАВИЛИ цифровой код. <br />
        Введите его здесь:
      </p>
      <div className={styles.confirmCard__input}>
        <input
          className={[styles.input, styles.input_confirm, isOtpWrong ? styles.input_invalid : ''].join(' ')}
          type="num"
          name="otp"
          id="otp"
          value={otp}
          onChange={(event) => handleOtpChange(event)}
          placeholder={'000000'}
          onInvalid={() => isOtpWrong}
        />
        {isOtpWrong && <p className={styles.input__alert_confirm}>с вашими данными что-то не так :(</p>}
      </div>
      {!resendAvailable ? (
        <p className={styles.waitLine}>повторная отправка возможна через {secondsRemaining} сек.</p>
      ) : (
        <p className={styles.waitLine}>
          код не пришел?
          <button onClick={() => resendCode()} className={styles.confirmCard__resendOtpBtn}>
            отправить код заново
          </button>
        </p>
      )}
    </div>
  )
}

export default ConfirmInputGroup
