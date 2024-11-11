const isOtpValid = (otp: string) => {
  return otp.length === 6 && !Number.isNaN(otp)
}

export default isOtpValid
