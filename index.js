/**
 * @format
 */

import {
  AppRegistry,
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
} from 'react-native'
import ru from 'date-fns/locale/ru'
import setDateFnsOptions from 'date-fns/setDefaultOptions'

import { name as appName } from './app.json'
import App from './src/app'
import { isIOS } from './src/utils'

if (!isIOS) {
  StatusBar.setBackgroundColor('transparent')
  StatusBar.setTranslucent(true)
}

StatusBar.setBarStyle('dark-content')

Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.allowFontScaling = false
TextInput.defaultProps = TextInput.defaultProps || {}
TextInput.defaultProps.allowFontScaling = false
ScrollView.defaultProps = ScrollView.defaultProps || {}
ScrollView.defaultProps.bounces = false
ScrollView.defaultProps.showsVerticalScrollIndicator = false
ScrollView.defaultProps.showsHorizontalScrollIndicator = false
ScrollView.defaultProps.overScrollMode = 'never'
ScrollView.defaultProps.keyboardShouldPersistTaps = 'handled'
FlatList.defaultProps = FlatList.defaultProps || {}
FlatList.defaultProps.keyExtractor = (item) => item._id

setDateFnsOptions({ locale: ru })

AppRegistry.registerComponent(appName, () => App)
