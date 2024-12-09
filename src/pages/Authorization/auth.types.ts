export interface IAuth {
  isAuth: boolean
  access: string
  accessExpires?: number
}

//response

export interface AuthResponse {
  refresh: string
  access: string
  refreshExpires: number
  accessExpires: number
}

export interface GuestResponse {
  userId: string
}

