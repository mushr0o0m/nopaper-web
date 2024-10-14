import { atom } from 'recoil'
import { IUser } from './auth.types'

// Состояние для проверки процесса логина
export const isLoginingState = atom<boolean>({
  key: 'isLoginingState',
  default: false,
})

// Состояние авторизации
export const isAuthState = atom<boolean>({
  key: 'isAuthState',
  default: false,
})

// Текущий пользователь
export const userState = atom<IUser | undefined>({
  key: 'userState',
  default: undefined,
})

// Email пользователя
export const emailState = atom<string | undefined>({
  key: 'emailState',
  default: undefined,
})