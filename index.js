/**
 * @format
 */

import {AppRegistry, StatusBar} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';
import {isIOS} from './src/utils';

if (!isIOS) {
  StatusBar.setBackgroundColor('transparent');
  StatusBar.setTranslucent(true);
}

StatusBar.setBarStyle('light-content');

AppRegistry.registerComponent(appName, () => App);
