import { atom } from 'recoil'
import { IAuth } from './auth.types'

export const authState = atom<IAuth>({
  key: 'authState',
  default: {
    'isLogining': false,
    'isAuth': false,
    'user': undefined,
    'email': undefined,
  },
})