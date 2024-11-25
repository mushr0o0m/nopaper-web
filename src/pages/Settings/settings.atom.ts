import { atom } from 'recoil'
import { ISettings } from './settings.types'

const settingsAtom = atom<ISettings>({
  key: 'settingsState',
  default: {
    user: undefined
  },
})

export default settingsAtom
