import { atom } from 'recoil'
import { IAuth } from './auth.types.ts'

const authAtom = atom<IAuth>({
  key: 'authState',
  default: {
    isLogining: false,
    isAuth: false,
    user: undefined,
    email: undefined,
  },
})

export default authAtom
