import { Dimensions, Platform, StatusBar } from 'react-native'
import Config from 'react-native-config'

export const isIOS = Platform.OS === 'ios'

export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height

export const statusBarHeight = StatusBar.currentHeight ?? 40

export const headerPaddingTop = Platform.select({
  android: statusBarHeight + 5,
  ios: 8,
  default: 0,
})

export const APP_VERSION = isIOS
  ? Config.MARKETING_VERSION
  : Config.ANDROID_VERSION_NAME

export const MUSEUM_LINK = 'https://rusmuseum.ru/'
