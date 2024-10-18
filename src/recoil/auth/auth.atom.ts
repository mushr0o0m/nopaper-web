import { atom } from 'recoil'
import { IAuth } from './auth.types'

// Состояние для проверки процесса логина
export const authState = atom<IAuth>({
  key: 'isLoginingState',
  default: {
    'isLogining': false,
    'isAuth': false,
    'user': undefined,
    'email': undefined,
  },
})