/**
 * @format
 */

import { AppRegistry, StatusBar } from 'react-native'

import { name as appName } from './app.json'
import App from './src/app'
import { isIOS } from './src/utils'

if (!isIOS) {
  StatusBar.setBackgroundColor('transparent')
  StatusBar.setTranslucent(true)
}

StatusBar.setBarStyle('dark-content')

AppRegistry.registerComponent(appName, () => App)
