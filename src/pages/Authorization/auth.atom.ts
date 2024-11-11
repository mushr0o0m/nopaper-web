import { atom } from 'recoil'
import { IAuth } from '@/pages/Authorization/auth.types'

const authAtom = atom<IAuth>({
  key: 'authState',
  default: {
    isAuth: false,
    access: ''
  },
})

export default authAtom
