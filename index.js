/**
 * @format
 */

import {AppRegistry, StatusBar} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

StatusBar.setHidden(true, 'slide');

AppRegistry.registerComponent(appName, () => App);
