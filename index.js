/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

/* Language Settings */
require('intl');
require('intl/locale-data/jsonp/pt-BR');

if (__DEV__) {
  import('./source/config/ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

AppRegistry.registerComponent(appName, () => App);
