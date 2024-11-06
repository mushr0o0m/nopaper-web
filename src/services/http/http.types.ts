export interface IHTTPSuccessResponse<T = undefined> {
  status: 'success'
  body: T
}

export interface IHTTPErrorResponse {
  status: 'error'
  message: string
  body?: Record<string, string>
}

export type HTTPResponse<T = undefined> = IHTTPErrorResponse | IHTTPSuccessResponse<T>
