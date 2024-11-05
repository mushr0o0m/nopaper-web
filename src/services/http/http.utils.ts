import { AxiosError, AxiosResponse } from 'axios'
import { IHTTPErrorResponse, IHTTPSuccessResponse } from '@/services/http/http.types'

export const handleHttpResponse = <T extends any>(
  response: Pick<AxiosResponse<T>, 'data'>
): IHTTPSuccessResponse<T> => {
  return { status: 'success', body: response.data }
}

export const handleHttpError = (error: AxiosError): IHTTPErrorResponse => {
  if (error?.response?.status === 400) {
    console.log('Validation error')
  }

  return { status: 'error', message: error?.message }
}
