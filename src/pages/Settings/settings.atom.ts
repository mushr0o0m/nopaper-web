import { atom } from 'recoil'
import { IUser } from './user.types'

export interface ISettings {
  user: IUser
}

const settingsAtom = atom<ISettings>({
  key: 'settingsState',
  default: {
    user: undefined
  },
})

export default settingsAtom
