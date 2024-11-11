import { useRef, useState } from 'react'

interface IProps {
  resendFunction: Function
}

const useResendTimout = (props: IProps) => {
  const intervalRef = useRef(null)
  const [secondsRemaining, setSecondsRemaining] = useState(30)
  const [resendAvailable, setResendAvailable] = useState(true)

  const resend = () => {
    if (!resendAvailable) return

    setResendAvailable(false)
    props.resendFunction()

    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev === 1) {
          clearInterval(intervalRef.current)
          setResendAvailable(true)
          return 30
        }

        return prev - 1
      })
    }, 1000)
  }

  return { secondsRemaining, resendAvailable, resend }
}

export default useResendTimout
