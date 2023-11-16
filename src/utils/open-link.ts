import { Linking } from 'react-native'

export const openLink = (link: string) => {
  Linking.openURL(link)
}
