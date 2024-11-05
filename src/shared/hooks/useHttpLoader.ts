import { useState } from 'react'
import { AxiosError } from 'axios'

const useHttpLoader = () => {
  const [loading, setLoading] = useState(false)

  const wait = <T>(p: Promise<T>, onLoad?: (v: T) => any, onError?: (err: AxiosError) => any) => {
    setLoading(true)

    return p
      .then((r) => {
        let resp = null
        if (onLoad) resp = onLoad(r)
        setLoading(false)
        return resp
      })
      .catch((err) => {
        let resp = null
        if (onError) resp = onError(err)
        setLoading(false)
        return resp
      })
  }

  return { loading, wait }
}

export default useHttpLoader
