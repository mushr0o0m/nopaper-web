import { atom } from 'recoil'
import { IAuth } from '@/pages/Authorization/auth.types'

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
