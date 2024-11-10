const OTP_REGEXP = /^\d{6}$/
const isOtpValid = (otp: string) => {
  return OTP_REGEXP.test(otp)
}

export default isOtpValid