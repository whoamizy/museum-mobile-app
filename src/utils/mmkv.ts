import Config from 'react-native-config'
import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV({
  id: 'museum',
  encryptionKey: Config.STORAGE_KEY,
})
